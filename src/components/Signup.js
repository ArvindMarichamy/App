import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = { email, password };
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (response.ok) {
      console.log('Signup successful:', { email, password });
      alert('Signup successful');
      navigate('/login');
    } else {
      alert('Error signing up');
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
