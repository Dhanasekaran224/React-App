import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">Luumi Media</Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-menu-item">Home</Link></li>
          <li><Link to="/about" className="navbar-menu-item">About Us</Link></li>
          <li><Link to="/services" className="navbar-menu-item">Services</Link></li>
          <li><Link to="/blog" className="navbar-menu-item">Blog</Link></li>
          <li><Link to="/contact" className="navbar-menu-item">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;