import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div className="flex-fill">
      <NavLink to="/">
        <img src={logo} alt="MICpro- Multimedia service" />
      </NavLink>
    </div>
  );
};

export default Logo;
