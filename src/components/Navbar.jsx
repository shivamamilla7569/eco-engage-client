import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const navLinks = ["Home", "Services", "About US", "Contact US"];

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EcoTech</h1>
      <ul className="nav-links">
        {navLinks.map((tab) => (
          <li key={tab}>
            <NavLink 
              to={`/${tab.toLowerCase()}`} 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {tab}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <button className="login-btn" >Login/Signup</button>
        <button className="cart-btn">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
