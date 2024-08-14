// ./components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">User Login</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/halls">Hall</Link></li>
        <li><Link to="/booking-history">Booking History</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li> {/* Admin Login Link */}
        <li><Link to="/admin">Admin</Link></li>
        <li><button onClick={(e) => {
          localStorage.setItem('user', '')
          localStorage.setItem('userRole', '')
          navigate('/login')

        }}> Logout </button></li>

      </ul>
    </nav>
  );
}

export default NavBar;
