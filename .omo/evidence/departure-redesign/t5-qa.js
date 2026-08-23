/* Todo 5 QA: guestbook UI flow + no-scroll booleans at 1440x900 */
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));

  await page.goto('http://localhost:8787/', { waitUntil: 'networkidle' });

  const out = {};

  // no-scroll booleans
  out.noScroll = await page.evaluate(() => ({
    docY: document.documentElement.scrollHeight <= window.innerHeight,
    docX: document.documentElement.scrollWidth <= window.innerWidth,
    docYVal: document.documentElement.scrollHeight,
    innerH: window.innerHeight
  }));

  // per-panel clip probe
  out.clips = await page.evaluate(() => {
    const sels = ['.site-head', '.rail-left', '.board', '.rail-right', '.site-foot'];
    return sels.map((s) => {
      const el = document.querySelector(s);
      if (!el) return { s, missing: true };
      return { s, ok: el.scrollHeight <= el.clientHeight + 2, sh: el.scrollHeight, ch: el.clientHeight };
    });
  });

  // stamps rendered from local API (1 entry: qa-smoke)
  await page.waitForSelector('.stamp-card', { timeout: 8000 });
  out.stampCards = await page.locator('.stamp-card').count();
  out.firstAuthor = await page.locator('.stamp-author').first().textContent();

  // draw on editor: cells are buttons inside #pixelEditor; paint a diagonal
  const cell = (i) => page.locator('#pixelEditor .pixel-cell').nth(i);
  await cell(0).click(); await cell(11).click(); await cell(22).click(); await cell(33).click();

  // pick orange swatch then paint one more
  await page.locator('#guestbookPalette .palette-swatch').nth(1).click();
  await cell(44).click();
  out.paintedColor = await cell(44).evaluate((el) => el.style.background);

  // type name and stamp
  await page.fill('#guestbookName', 'browser-qa');
  const [resp] = await Promise.all([
    page.waitForResponse((r) => r.url().includes('/api/guestbook') && r.request().method() === 'POST', { timeout: 8000 }),
    page.click('#guestbookStamp')
  ]);
  out.postStatus = resp.status();
  await page.waitForFunction(() => document.querySelectorAll('.stamp-card').length >= 2, null, { timeout: 8000 });
  out.stampCardsAfter = await page.locator('.stamp-card').count();

  // toast visible?
  out.toastShown = await page.evaluate(() => {
    const t = document.getElementById('toast');
    return t && !t.hidden && t.classList.contains('is-visible');
  });

  // failure path: blank editor submit -> expect toast, no POST
  await page.waitForTimeout(2600); // let first toast fade
  const postPromise = page.waitForRequest((r) => r.url().includes('/api/guestbook') && r.request().method() === 'POST', { timeout: 2500 }).then(() => 'POST-FIRED(BAD)').catch(() => 'no-post(GOOD)');
  await page.click('#guestbookStamp');
  out.blankSubmit = await postPromise;

  fs.mkdirSync('.omo/evidence/departure-redesign', { recursive: true });
  await page.screenshot({ path: '.omo/evidence/departure-redesign/t5-stamp-local.png' });
  out.consoleErrors = errors;
  fs.writeFileSync('.omo/evidence/departure-redesign/t5-results.json', JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch((e) => { console.error('QA FAILED:', e); process.exit(1); });
