// ./components/EventListings.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventListings.css';

const events = [
  {
    id: 1,
    name: 'Wedding Hall',
    image: '/images/wedding-hall.jpeg', 
  },
  {
    id: 2,
    name: 'Party Hall',
    image: '/images/Party_hall.jpeg',
  },
  {
    id: 3,
    name: 'Birthday Hall',
    image: '/images/Birthday_hall.jpeg',
  },
  {
    id: 4,
    name: 'Outdoor Wedding ',
    image: '/images/outdoor_Wedding.jpeg',
  },
];

function EventListings() {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/halls/${id}`);
  };

  return (
    <div className="event-listings">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.name} className="event-image" />
          <h3 className="event-name">{event.name}</h3>
          <button className="view-button" onClick={() => handleViewClick(event.id)}>View</button>
        </div>
      ))}
    </div>
  );
}

export default EventListings;
