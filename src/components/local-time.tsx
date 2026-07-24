"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Karachi",
  hour: "numeric",
  minute: "2-digit",
});

// Tick well under a minute so the displayed minute never lags noticeably;
// React only re-renders when the formatted string actually changes.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 20_000);
  return () => clearInterval(id);
}

/**
 * Live local time for Pakistan in the Contact section. Statically rendered
 * without a clock on the server; hydrates into the live, self-updating line.
 */
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => null,
  );

  return (
    <p className="font-mono text-xs text-subtle">
      {time === null
        ? "I'm in Pakistan (PKT). I usually reply within a day."
        : `It's ${time} in Pakistan for me. I usually reply within a day.`}
    </p>
  );
}
