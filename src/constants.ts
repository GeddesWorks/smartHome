import type { Room } from "./types";

export const urlMap: Record<Room, { on: string; off: string }> = {
  "living-room": {
    on: "/api/?id=5071&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "/api/?id=5070&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  kitchen: {
    on: "/api/?id=5072&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "/api/?id=5073&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  office: {
    on: "/api/?id=5076&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "/api/?id=5077&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  bedroom: {
    on: "/api/?id=5074&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "/api/?id=5075&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  all: {
    on: "/api/?id=5078&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "/api/?id=5079&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
};

export const roomsTop: Room[] = ["living-room", "kitchen"];
export const roomsBottom: Room[] = ["office", "bedroom"];

export const colors: Record<string, string> = {
  Movie: "",
  Purple: "",
  Red: "",
  Blue: "",
  Pink: "",
  Reset: "",
};
