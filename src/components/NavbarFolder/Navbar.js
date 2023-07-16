import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container mx-2" style={{ maxWidth: "1600px" }}>
        <Link to="/" className="navbar-brand">
          PALACE FOOTBALL ACADEMY
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? "collapsed" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/facilities" className="nav-link" onClick={closeMenu}>
                Facilities
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/coaches" className="nav-link" onClick={closeMenu}>
                Coaches
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className="nav-link" onClick={closeMenu}>
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/videos" className="nav-link" onClick={closeMenu}>
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link" onClick={closeMenu}>
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
