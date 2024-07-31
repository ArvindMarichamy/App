import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HallProvider } from './context/HallContext';
import { BookingProvider } from './context/BookingContext'; // Ensure this path is correct
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import Hall from './components/Hall';
import Admin from './components/Admin';
import BookingForm from './components/BookingForm';
import PaymentPage from './components/PaymentPage';
import BookingHistory from './components/BookingHistory'; // Import BookingHistory component
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <HallProvider>
        <BookingProvider> {/* Ensure this is correctly added */}
          <Router>
            <Header />
            <NavBar />
            <div className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<Admin />} />

                <Route path="/halls" element={<ProtectedRoute element={<Hall />} />} />
                <Route path="/book/:id" element={<ProtectedRoute element={<BookingForm />} />} />
                <Route path="/payment" element={<ProtectedRoute element={<PaymentPage />} />} />
                <Route path="/booking-history" element={<ProtectedRoute element={<BookingHistory />} />} />
                <Route path="/" element={<ProtectedRoute element={<Home />} />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </BookingProvider>
      </HallProvider>
    </AuthProvider>
  );
}

export default App;
