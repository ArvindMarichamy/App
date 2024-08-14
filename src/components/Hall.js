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
    <div>
      <h2>Welcome to the hall page</h2>
      <h2>Here you can view all halls</h2>
    <div className="hall-list">
      <div className="hall-cards">
        {halls.map((hall, index) => (
          <div key={index} className="hall-card">
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <h3 className="hall-name">{hall.name}</h3>
            <p className="hall-description">{hall.description}</p>
            <p className="hall-location"><strong>Location:</strong> {hall.location}</p>
            <p className="hall-price"><strong>Price:</strong> {hall.price}</p>
            <p className="hall-capacity"><strong>Capacity:</strong> {hall.capacity}</p>
            <button className="book-button" onClick={() => handleBookNow(hall.id)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Hall;
