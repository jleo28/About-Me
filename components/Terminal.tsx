// components/Terminal.tsx
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { terminalCommands } from "@/lib/data";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<{ cmd: string; res: string }[]>([
    { cmd: "", res: 'welcome! type <span style="color:#4ade80">help</span> to see available commands.' },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const openTerminal = useCallback(() => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const closeTerminal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && !open) {
        e.preventDefault();
        openTerminal();
      }
      if (e.key === "Escape") closeTerminal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, openTerminal, closeTerminal]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    setInput("");

    if (cmd === "clear") {
      setLog([{ cmd: "", res: "cleared." }]);
      return;
    }
    if (cmd === "exit") {
      closeTerminal();
      return;
    }
    if (cmd === "night") {
      const doc = document.documentElement;
      const isDark = doc.getAttribute("data-theme") === "dark";
      doc.setAttribute("data-theme", isDark ? "" : "dark");
      localStorage.setItem("theme", isDark ? "" : "dark");
      setLog((prev) => [...prev, { cmd, res: "toggled. \u{1F30C}" }]);
      return;
    }

    const res =
      terminalCommands[cmd] ||
      `command not found: ${cmd}. type <span style="color:#4ade80">help</span> for available commands.`;
    setLog((prev) => [...prev, { cmd, res }]);
  };

  return (
    <>
      <div className="terminal-hint" onClick={openTerminal}>
        press / to open terminal
      </div>

      {open && (
        <div
          className="terminal-overlay open"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeTerminal();
          }}
        >
          <div className="terminal-box">
            <div className="t-header">
              <span>joe@portfolio ~ %</span>
              <button className="t-close" onClick={closeTerminal}>
                &#10005; esc
              </button>
            </div>
            <div ref={logRef} className="t-log">
              {log.map((entry, i) => (
                <div className="t-output" key={i}>
                  {entry.cmd && (
                    <>
                      <span className="t-cmd">&#10095; {entry.cmd}</span>
                      <br />
                    </>
                  )}
                  <span
                    className="t-res"
                    dangerouslySetInnerHTML={{ __html: entry.res }}
                  />
                </div>
              ))}
            </div>
            <div className="t-input-row">
              <span className="t-prompt">&#10095;</span>
              <input
                ref={inputRef}
                className="t-input"
                type="text"
                autoComplete="off"
                spellCheck={false}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}