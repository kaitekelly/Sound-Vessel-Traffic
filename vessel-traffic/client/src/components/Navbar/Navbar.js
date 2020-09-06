import React from "react";
import { Link } from "react-router-dom";
// import "./navbarStyle.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Sound Vessel Traffic
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/userlogin"
              className={
                window.location.pathname === "/userlogin" || window.location.pathname === "/userlogin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              User Sign in
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search Boats
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className={window.location.pathname === "/map" ? "nav-link active" : "nav-link"}
            >
              Boat Map
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/plantrip"
              className={window.location.pathname === "/plantrip" ? "nav-link active" : "nav-link"}
            >
              Plan Trip
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
