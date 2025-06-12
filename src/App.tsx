import React from "react";

type Room = "living-room" | "kitchen" | "office" | "bedroom" | "all";
type Action = "on" | "off";

const urlMap: Record<Room, { on: string; off: string }> = {
  "living-room": {
    on: "https://trigger.esp8266-server.de/api/?id=5071&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "https://trigger.esp8266-server.de/api/?id=5070&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  kitchen: {
    on: "https://trigger.esp8266-server.de/api/?id=5072&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "https://trigger.esp8266-server.de/api/?id=5073&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  office: {
    on: "https://trigger.esp8266-server.de/api/?id=5076&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "https://trigger.esp8266-server.de/api/?id=5077&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  bedroom: {
    on: "https://trigger.esp8266-server.de/api/?id=5074&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "https://trigger.esp8266-server.de/api/?id=5075&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
  all: {
    on: "https://trigger.esp8266-server.de/api/?id=5078&hash=fbeae237ed8f7576ce05b01b81dd95d7",
    off: "https://trigger.esp8266-server.de/api/?id=5079&hash=fbeae237ed8f7576ce05b01b81dd95d7",
  },
};

const roomsTop: Room[] = ["living-room", "kitchen"];
const roomsBottom: Room[] = ["office", "bedroom"];

const colors: Record<string, string> = {
  Movie: "",
  Purple: "",
  Red: "",
  Blue: "",
  Pink: "",
  Reset: "",
};

const formatRoomName = (room: Room) =>
  room === "all"
    ? "All Rooms"
    : room
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

const sendWebhook = async (url: string) => {
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

const applyClickEffect = (btn: HTMLButtonElement) => {
  const orig = btn.style.backgroundColor;
  btn.style.backgroundColor = "#444";
  setTimeout(() => {
    btn.style.backgroundColor = orig;
  }, 200);
};

const App: React.FC = () => {
  const handleClick = (
    room: Room,
    action: Action,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    sendWebhook(urlMap[room][action]);
    applyClickEffect(e.currentTarget);
  };

  const handleColor = (
    link: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    sendWebhook(link);
    applyClickEffect(e.currentTarget);
  };

  return (
    // Full-screen dark background + white text
    <div className="bg-dark text-white min-vh-100 min-vw-100">
      <div className="container-fluid py-5">
        <h1 className="text-center mb-5">Geddes Smart Home</h1>

        <div className="row gy-4">
          <div className="col text-center">
            {roomsTop.map((r) => (
              <div className="mb-4">
                <h2>{formatRoomName(r)}</h2>
                <button
                  className="btn btn-secondary btn-lg w-75 mb-2"
                  onClick={(e) => handleClick(r, "on", e)}
                >
                  Turn On
                </button>
                <button
                  className="btn btn-secondary btn-lg w-75"
                  onClick={(e) => handleClick(r, "off", e)}
                >
                  Turn Off
                </button>
              </div>
            ))}
          </div>
          <div className="col text-center pt-5 mt-5">
            <div className="text-center position-absolute top-0 start-50 translate-middle-x pt-5 mt-4">
              <img
                className="img-fluid pt-5"
                style={{ maxWidth: "300px", width: "50%" }}
                src="https://cdn.glitch.global/82cb22fa-f731-44fb-920a-62677fdd14e2/GeddesWorksCutout.png?v=1701152252228"
                alt="Logo"
              />
            </div>
            <div className="mt-5">
              <h2>Colors</h2>
              {Object.entries(colors).map((r) => (
                <button
                  className="btn btn-secondary btn-lg m-1"
                  style={{ width: "35%" }}
                  onClick={(e) => handleColor(r[1], e)}
                >
                  {r[0]}
                </button>
              ))}
            </div>
          </div>
          <div className="col text-center">
            {roomsBottom.map((r) => (
              <div className="mb-4">
                <h2>{formatRoomName(r)}</h2>
                <button
                  className="btn btn-secondary btn-lg w-75 mb-2"
                  onClick={(e) => handleClick(r, "on", e)}
                >
                  Turn On
                </button>
                <button
                  className="btn btn-secondary btn-lg w-75"
                  onClick={(e) => handleClick(r, "off", e)}
                >
                  Turn Off
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-5">
          <button
            className="btn btn-primary btn-lg px-4"
            onClick={(e) => handleClick("all", "on", e)}
          >
            All On
          </button>
          <button
            className="btn btn-primary btn-lg px-4"
            onClick={(e) => handleClick("all", "off", e)}
          >
            All Off
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
