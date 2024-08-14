// ./components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p></p>
      <nav className="footer-nav">
        <Link to="/about">About Us</Link>
      </nav>
    </footer>
  );
}

export default Footer;
