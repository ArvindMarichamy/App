import React from 'react';
import { useBooking } from '../context/BookingContext';
import './BookingHistory.css'; // Add custom styles for the booking history page

function BookingHistory() {
  const { bookingHistory } = useBooking();
  return (
    <div className="booking-history">
      <h1>Booking History</h1>
      <p>Here is a list of all your past bookings.</p>
      <div className="booking-cards">
        {bookingHistory.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookingHistory.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>{booking.name}</h3>
              <p>Event Date: {booking.eventDate}</p>
              <p>Event Time: {booking.eventTime}</p>
              <p>Hall ID: {booking.hallId}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookingHistory;
