import React from "react";

const Logo = ({ logo, setPage }) => {
  return (
    <div className="flex-fill">
      <a onClick={() => setPage("home")} href="#">
        <img src={logo} alt="Atelier Materi - Haute parfumerie française" />
      </a>
    </div>
  );
};

export default Logo;
