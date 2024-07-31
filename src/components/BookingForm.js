// ./components/BookingForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css'; // Add your styles here

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { name, eventDate, eventTime, hallId: id };
    navigate('/payment', { state: bookingDetails });
  };

  return (
    <div className="booking-form">
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay and Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
