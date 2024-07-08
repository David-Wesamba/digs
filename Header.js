import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">TECH DIGS</a>
      <img src="imgs/logo.jpeg" alt="TECH DIGS Logo" className="logo-img" />
      <i className="fa-solid fa-bars" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default Header;