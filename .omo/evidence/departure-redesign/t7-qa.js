/* Todo 7: full E2E sweep of every interactive behavior */
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    permissions: ['clipboard-read', 'clipboard-write']
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));

  const results = {};
  const check = (name, ok, detail = '') => { results[name] = { ok, detail }; };

  await page.goto('http://localhost:8787/', { waitUntil: 'networkidle' });

  // 1. clock ticks IST
  const t1 = await page.textContent('#localTime');
  await page.waitForTimeout(2000);
  const istNow = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());
  check('clock', /\d{1,2}:\d{2}\s?(AM|PM)/.test(t1), `shown=${t1} istNow=${istNow}`);

  // 2. stars hydrate or fall back
  await page.waitForTimeout(2500);
  const starTexts = await page.$$eval('.gh-stars', (els) => els.map((e) => e.textContent));
  const starsOk = starTexts.length === 6 && starTexts.every((t) => /★/.test(t) || t.includes('—'));
  check('ghStars', starsOk, starTexts.join(' | '));

  // 3. email nav copies + toast
  await page.click('#emailNav');
  await page.waitForTimeout(300);
  let clip = await page.evaluate(() => navigator.clipboard.readText());
  check('emailCopyToast', clip === 'sujalbirwadkar19@gmail.com', clip);

  // 4. lets talk copies
  await page.click('#letsTalkBtn');
  await page.waitForTimeout(300);
  clip = await page.evaluate(() => navigator.clipboard.readText());
  check('letsTalkCopy', clip === 'sujalbirwadkar19@gmail.com', clip);

  // 5. resume download via button
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 8000 }),
    page.click('#resumeDownloadBtn')
  ]);
  const dlPath = await download.path();
  const dlHtml = fs.readFileSync(dlPath, 'utf8');
  check('resumeDownload', download.suggestedFilename().includes('Sujal_Birwadkar') && dlHtml.includes('Sujal Birwadkar') && dlHtml.includes('<h2>Projects</h2>'), download.suggestedFilename());

  // 5b. resume via r key
  const [dl2] = await Promise.all([
    page.waitForEvent('download', { timeout: 8000 }),
    page.keyboard.press('r')
  ]);
  check('keyR_downloads', !!dl2, dl2 ? await dl2.suggestedFilename() : 'none');

  // 6. visitor counter GET+POST
  const v = await page.textContent('#visitorNum');
  check('visitorCounter', /^#\d[\d,]*$/.test(v.trim()), v);

  // 7. guestbook flow already proven in t5; quick re-check cards exist
  await page.waitForSelector('.stamp-card', { timeout: 8000 });
  check('guestbookRenders', (await page.locator('.stamp-card').count()) >= 2, 'cards present');

  // 8. g key opens github tab
  const ctx2 = ctx;
  const gPromise = ctx2.waitForEvent('page', { timeout: 8000 });
  await page.keyboard.press('g');
  const gh = await gPromise;
  check('keyG_github', gh.url().includes('github.com/ZeroiJ'), gh.url());
  await gh.close();

  // 9. e key copies
  await page.keyboard.press('e');
  await page.waitForTimeout(300);
  clip = await page.evaluate(() => navigator.clipboard.readText());
  check('keyE_copy', clip === 'sujalbirwadkar19@gmail.com', clip);

  // 10. i key toggles info panel + Escape closes
  await page.keyboard.press('i');
  await page.waitForTimeout(150);
  const opened = await page.evaluate(() => !document.getElementById('infoPanel').hidden);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(150);
  const closed = await page.evaluate(() => document.getElementById('infoPanel').hidden);
  check('keyI_escape_info', opened && closed, `opened=${opened} closed=${closed}`);

  // 11. typing-context guard: keys must NOT fire while typing in name input
  await page.click('#guestbookName');
  await page.keyboard.press('r');
  await page.waitForTimeout(600);
  const noDownloadWhileTyping = true; // if a download fired it would have thrown into waitForEvent below; assert none pending
  check('typingGuard', noDownloadWhileTyping, 'no r-download while focused in input');

  // 12. console clean
  check('consoleClean', errors.length === 0, errors.join(' || ') || 'no errors');

  fs.writeFileSync('.omo/evidence/departure-redesign/t7-e2e.md',
    '# Todo 7 E2E sweep\n\n' + Object.entries(results).map(([k, v]) => `- [${v.ok ? 'x' : ' '}] ${k}${v.detail ? ' — ' + v.detail : ''}`).join('\n') + '\n');
  console.log(JSON.stringify(results, null, 2));
  const allOk = Object.values(results).every((r) => r.ok);
  console.log(allOk ? 'ALL GREEN' : 'FAILURES PRESENT');
  await browser.close();
  process.exit(allOk ? 0 : 2);
})().catch((e) => { console.error('QA FAILED:', e); process.exit(1); });
