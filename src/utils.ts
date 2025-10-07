import type { Room } from "./types";

export const formatRoomName = (room: Room) =>
  room === "all"
    ? "All Rooms"
    : room
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

export const sendWebhook = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "value" }),
    });
    if (!res.ok) console.error(`Error sending webhook to ${url}`);
    else console.log(`Webhook sent: ${url}`);
  } catch (e) {
    console.error(e);
  }
};

export const applyClickEffect = (btn: HTMLButtonElement) => {
  const orig = btn.style.backgroundColor;
  btn.style.backgroundColor = "#444";
  setTimeout(() => {
    btn.style.backgroundColor = orig;
  }, 200);
};
