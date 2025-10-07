import React from "react";
import type { Room, Action } from "../types";
import { formatRoomName } from "../utils";

interface RoomControlProps {
  room: Room;
  onAction: (room: Room, action: Action, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RoomControl: React.FC<RoomControlProps> = ({ room, onAction }) => {
  return (
    <div className="mb-4">
      <h2>{formatRoomName(room)}</h2>
      <button
        className="btn btn-secondary btn-lg w-75 mb-2"
        onClick={(e) => onAction(room, "on", e)}
      >
        Turn On
      </button>
      <button
        className="btn btn-secondary btn-lg w-75"
        onClick={(e) => onAction(room, "off", e)}
      >
        Turn Off
      </button>
    </div>
  );
};
