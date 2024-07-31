import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    fetchBookingHistory();
  }, []);

  const fetchBookingHistory = async () => {
    try {
      const response = await fetch('http://localhost:3001/bookings');
      const data = await response.json();
      setBookingHistory(data);
    } catch (err) {
      console.error('Failed to fetch booking history:', err);
    }
  };

  const addBooking = async (newBooking) => {
    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });
      const addedBooking = await response.json();
      setBookingHistory([...bookingHistory, addedBooking]);
    } catch (err) {
      console.error('Failed to add booking:', err);
    }
  };

  const value = {
    bookingHistory,
    addBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}
