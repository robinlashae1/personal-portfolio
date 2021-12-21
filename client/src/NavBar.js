import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
      <div id="navBar">
        <NavLink className="navLinks"
          to="/"
          exact
          style={linkStyles}
        >
          Home
        </NavLink>
        <NavLink className="navLinks"
          to="/aboutMe"
          exact
          style={linkStyles}
        >
          About Me
        </NavLink>
        <NavLink className="navLinks"
          to="/blogs"
          exact
          style={linkStyles}
        >
          Blogs
        </NavLink>
        <NavLink className="navLinks"
          to="/portfolio"
          exact
          style={linkStyles}
        >
          Portfolio
        </NavLink>
      </div>
    );
  }
    export default NavBar

    const linkStyles = {
        display: "inline-block",
        width: "20%",
        padding: "12px",
        marginTop: "10px",
        margin: "0 6px 6px",
        textDecoration:"none",
        color: "black",
      };