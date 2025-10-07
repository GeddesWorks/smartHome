import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="text-center position-absolute top-0 start-50 translate-middle-x pt-5 mt-4">
      <img
        className="img-fluid pt-5"
        style={{ maxWidth: "300px", width: "50%" }}
        src="https://cdn.glitch.global/82cb22fa-f731-44fb-920a-62677fdd14e2/GeddesWorksCutout.png?v=1701152252228"
        alt="Logo"
      />
    </div>
  );
};
