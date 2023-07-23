import React from "react";
import "../assets/CSS/style.css";

export default function Navbar () {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <h5 x="50%" y="50%" id="logo-text-id">
              Karan Padhiyar
            </h5>
          </div>
          <div className="menu-container">
            <ul>
              <li>
                <a href="." className="menu-text">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="." className="menu-text">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
