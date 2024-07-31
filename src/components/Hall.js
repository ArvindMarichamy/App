// ./components/Hall.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHalls } from '../context/HallContext';
import './Hall.css'; // You can add custom styles for Hall cards here

function Hall() {
  const { halls } = useHalls();
  const navigate = useNavigate();

  const handleBookNow = (hallId) => {
    navigate(`/book/${hallId}`);
  };

  return (
    <div className="hall-list">
      <h1>Hall Page</h1>
      <p>Welcome to the hall page. Here you can view all halls.</p>
      <div className="hall-cards">
        {halls.map((hall, index) => (
          <div key={index} className="hall-card">
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <h3 className="hall-name">{hall.name}</h3>
            <p className="hall-description">{hall.description}</p>
            <button className="book-button" onClick={() => handleBookNow(hall.id)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hall;
