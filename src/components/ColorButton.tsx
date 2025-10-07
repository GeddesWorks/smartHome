import React from "react";

interface ColorButtonProps {
  color: string;
  link: string;
  onClick: (link: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ColorButton: React.FC<ColorButtonProps> = ({ color, link, onClick }) => {
  return (
    <button
      className="btn btn-secondary btn-lg m-1"
      style={{ width: "35%" }}
      onClick={(e) => onClick(link, e)}
    >
      {color}
    </button>
  );
};
