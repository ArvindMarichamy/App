// ./components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'D:/App Devlapment/23/main/src/components/AdminLogin.css';


function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace the following logic with actual admin authentication logic
    if (email === 'admin@gmail.com' && password === '456456') {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('user', {
        email: {email},
        password: {password}
      })
      console.log(localStorage)
      navigate('/admin');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
