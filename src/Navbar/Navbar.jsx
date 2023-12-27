import React from 'react';
import './Navbar.css'; // Create a separate CSS file for styling if needed
import a from './image 1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          {/* Replace 'YourLogo' with your actual logo */}
          <img src={a} alt="YourLogo" />
        </div>
        <div className="navbar__name">
          {/* Replace 'YourName' with your actual name */}
          <h2>Royal Falcon</h2>
        </div>
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
