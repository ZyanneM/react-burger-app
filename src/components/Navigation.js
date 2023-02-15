import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* les navlinks génèreront des a dans le dom*/}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Menu</li>
        </NavLink>
        <NavLink
          to="/desserts"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Desserts</li>
        </NavLink>
        {/* <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Navigation;
