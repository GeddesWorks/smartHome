import React from "react";
import type {Room, Action} from "./types";
import { urlMap, roomsTop, roomsBottom, colors } from "./constants";
import { sendWebhook, applyClickEffect } from "./utils";
import { RoomControl } from "./components/RoomControl";
import { ColorButton } from "./components/ColorButton";
import { Logo } from "./components/Logo";

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
    <div className="bg-dark text-white min-vh-100 min-vw-100">
      <div className="container-fluid py-5">
        <h1 className="text-center mb-5">Geddes Smart Home</h1>

        <div className="row gy-4">
          <div className="col text-center">
            {roomsTop.map((r) => (
              <RoomControl key={r} room={r} onAction={handleClick} />
            ))}
          </div>
          <div className="col text-center pt-5 mt-5">
            <Logo />
            <div className="mt-5">
              <h2>Colors</h2>
              {Object.entries(colors).map(([color, link]) => (
                <ColorButton
                  key={color}
                  color={color}
                  link={link}
                  onClick={handleColor}
                />
              ))}
            </div>
          </div>
          <div className="col text-center">
            {roomsBottom.map((r) => (
              <RoomControl key={r} room={r} onAction={handleClick} />
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
