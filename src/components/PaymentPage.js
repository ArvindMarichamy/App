// ./components/PaymentPage.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext'; // Ensure this path is correct
import './PaymentPage.css'; // Add your styles here

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addBooking } = useBooking();

  const handlePayment = (e) => {
    e.preventDefault();

    // Extract booking details from location state or other sources
    const bookingDetails = location.state || {};

    // Save the booking details to the context
    addBooking(bookingDetails);

    // Redirect to a confirmation page or home
    navigate('/');
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <p>Please enter your payment details to complete the booking.</p>
      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input type="text" placeholder="1234 5678 9012 3456" required />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" placeholder="123" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
