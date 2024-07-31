// ./components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>      
        <li><Link to="/halls">Hall</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/booking-history">Booking History</Link></li> {/* Added Booking History link */}
      </ul>
    </nav>
  );
}

export default NavBar;
