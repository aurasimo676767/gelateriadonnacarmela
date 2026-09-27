"use client";

import { useEffect, useState } from "react";
import { dayNames, site } from "./site";

export type OpenStatus = {
  open: boolean;
  today: number;
  label: string;
};

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function romeNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function computeStatus(now = romeNow()): OpenStatus {
  const { day, minutes } = now;
  const today = site.hours[day];
  const yesterday = site.hours[(day + 6) % 7];

  // Un turno che termina dopo mezzanotte appartiene al giorno precedente.
  if (yesterday && toMinutes(yesterday.close) <= toMinutes(yesterday.open) && minutes < toMinutes(yesterday.close)) {
    return { open: true, today: day, label: `Aperto ora, fino alle ${yesterday.close}` };
  }

  if (today && minutes >= toMinutes(today.open) && (toMinutes(today.close) <= toMinutes(today.open) || minutes < toMinutes(today.close))) {
    return { open: true, today: day, label: `Aperto ora, fino alle ${today.close}` };
  }
  if (today && minutes < toMinutes(today.open)) {
    return { open: false, today: day, label: `Apriamo oggi alle ${today.open}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = site.hours[d];
    if (h) {
      const when = i === 1 ? "domani" : dayNames[d].toLowerCase();
      return { open: false, today: day, label: `Chiuso, riapriamo ${when} alle ${h.open}` };
    }
  }
  return { open: false, today: day, label: "Chiuso" };
}

export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const tick = () => setStatus(computeStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}
