"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GRID = 10;
const CELLS = GRID * GRID;
const PALETTE_HEX = [
  "#1f1f1f", // 0 dark
  "#ff6a00", // 1 orange
  "#1b7f79", // 2 teal
  "#6b5ca5", // 3 purple
  "#c63d2f", // 4 red
  "#efe9e1", // 5 paper
];
const PAPER = 5;
const API = process.env.NEXT_PUBLIC_GUESTBOOK_API ?? "/api/guestbook";

interface StampEntry {
  id: string;
  name: string;
  pixels: number[];
  created_at: number;
}

const PALETTE_LABELS = ["Dark", "Orange", "Teal", "Purple", "Red", "Paper"];

export default function Guestbook() {
  const [entries, setEntries] = useState<StampEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [pixels, setPixels] = useState<number[]>(() =>
    Array(CELLS).fill(PAPER)
  );
  const [selectedColor, setSelectedColor] = useState(0);
  const [name, setName] = useState("");
  const [posting, setPosting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const paintingRef = useRef(false);
  const pixelsRef = useRef(pixels);
  pixelsRef.current = pixels;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3000);
  }, []);

  const fetchEntries = useCallback(async () => {
    try {
      const res = await fetch(API, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { entries?: StampEntry[] };
      setEntries(Array.isArray(data.entries) ? data.entries : []);
      setOffline(false);
    } catch {
      setOffline(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntries();
    const id = window.setInterval(fetchEntries, 30000);
    return () => window.clearInterval(id);
  }, [fetchEntries]);

  /* ─── drawing ─── */
  const paintCell = useCallback((idx: number) => {
    setPixels((prev) => {
      if (idx < 0 || idx >= CELLS) return prev;
      const next = [...prev];
      next[idx] = selectedColor;
      return next;
    });
  }, [selectedColor]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, idx: number) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      paintingRef.current = true;
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      paintCell(idx);
    },
    [paintCell]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!paintingRef.current) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!(el instanceof HTMLElement)) return;
      const idx = el.dataset.idx;
      if (idx === undefined) return;
      paintCell(Number(idx));
    },
    [paintCell]
  );

  const endPaint = useCallback(() => {
    paintingRef.current = false;
  }, []);

  const clearEditor = useCallback(() => {
    setPixels(Array(CELLS).fill(PAPER));
  }, []);

  /* ─── submit ─── */
  const submitStamp = useCallback(async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      showToast("Add your name first");
      return;
    }
    if (!pixels.some((c) => c !== PAPER)) {
      showToast("Draw something first");
      return;
    }

    setPosting(true);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: trimmed, pixels }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        showToast(typeof data.error === "string" ? data.error : "Could not stamp");
        return;
      }
      showToast("Stamped");
      clearEditor();
      setName("");
      await fetchEntries();
    } catch {
      showToast("Network error — try again");
    } finally {
      setPosting(false);
    }
  }, [name, pixels, showToast, clearEditor, fetchEntries]);

  return (
    <section className="gb-section">
      {/* header */}
      <div className="flex items-baseline justify-between border-t border-white/20 pt-6 mb-5">
        <h2 className="text-[15px] font-semibold tracking-tight">Guestbook</h2>
        <span className="gb-mono-label">10×10 · 6 INKS</span>
      </div>

      <p className="gb-intro">
        Leave a stamp — draw on the grid, drop your name, and it joins the wall.
      </p>

      <div className="gb-layout">
        {/* wall of stamps */}
        <div className="gb-wall">
          <p className="gb-mono-label gb-status" aria-live="polite">
            {offline
              ? "Guestbook offline — try again later."
              : loading
              ? "Loading stamps…"
              : ""}
          </p>
          {entries.length === 0 && !offline && !loading && (
            <div className="gb-empty">No stamps yet — be the first.</div>
          )}
          <div className="stamps-gallery">
            {entries.map((e) =>
              e.pixels && e.pixels.length === CELLS ? (
                <div key={e.id} className="stamp-card">
                  <div className="stamp" title={e.name}>
                    {e.pixels.map((c, i) => {
                      let idx = typeof c === "number" && Number.isInteger(c) ? c : 0;
                      if (idx < 0 || idx > 5) idx = 0;
                      return (
                        <span
                          key={i}
                          className="stamp-cell"
                          style={{ background: PALETTE_HEX[idx] }}
                        />
                      );
                    })}
                  </div>
                  <div className="stamp-author">{e.name}</div>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* editor */}
        <div className="gb-editor">
          <div className="gb-mono-label gb-editor-title">LEAVE A STAMP</div>
          <div className="gb-workspace">
            <div className="gb-canvas-col">
              <div
                className="pixel-editor"
                role="application"
                aria-label="10 by 10 stamp editor"
                onPointerUp={endPaint}
                onPointerCancel={endPaint}
                onLostPointerCapture={endPaint}
                onPointerMove={handlePointerMove}
              >
                {pixels.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    data-idx={i}
                    className="pixel-cell"
                    aria-label={`Pixel ${1 + Math.floor(i / GRID)}, ${1 + (i % GRID)}`}
                    style={{ background: PALETTE_HEX[c] }}
                    onPointerDown={(e) => handlePointerDown(e, i)}
                  />
                ))}
              </div>
              <div className="palette" role="listbox" aria-label="Ink colors">
                {PALETTE_HEX.map((hex, i) => (
                  <button
                    key={hex}
                    type="button"
                    className={`palette-swatch${i === selectedColor ? " is-selected" : ""}`}
                    aria-label={PALETTE_LABELS[i]}
                    aria-selected={i === selectedColor}
                    style={{ background: hex }}
                    onClick={() => setSelectedColor(i)}
                  />
                ))}
              </div>
            </div>
            <div className="gb-form-col">
              <input
                className="gb-input"
                type="text"
                placeholder="Name"
                maxLength={32}
                autoComplete="nickname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitStamp();
                }}
              />
              <div className="gb-actions">
                <button
                  type="button"
                  className="gb-btn"
                  onClick={clearEditor}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="gb-btn gb-btn-primary"
                  onClick={submitStamp}
                  disabled={posting}
                >
                  {posting ? "Stamping…" : "Stamp ↗"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && <div className="gb-toast">{toast}</div>}
    </section>
  );
}