import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {

  return (
    <div className="navigation">
      <ul>
        {/* les navlinks génèreront des a dans le dom*/}
        {/* <NavLink to="/plats" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Menu</li>
        </NavLink> */}
        <a 
        className={props.toggleState === 1 ? "tabs nav-active" : "tabs"}
        //Pour pouvoir appeler dynamiquement l'onglet on place la fonction fléchée dans une fonction anonyme pour lui donner un index
        onClick={() =>props.toggleTab(1)}>
          <li>Menu</li>
        </a>
        <a
          className={props.toggleState === 2 ? "tabs nav-active" : "tabs"}
          onClick={() =>props.toggleTab(2)}>
          <li>Desserts</li>
        </a>
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
