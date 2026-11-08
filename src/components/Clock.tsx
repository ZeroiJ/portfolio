"use client";

import { useEffect, useState } from "react";

/** Header shows the user's own city — always render IST, not the visitor's local time. */
const formatIST = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

export default function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => setTime(formatIST.format(new Date()));
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs">{time}</span>
  );
}
