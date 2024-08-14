import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HallProvider } from './context/HallContext';
import { BookingProvider } from './context/BookingContext';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Hall from './components/Hall';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import BookingForm from './components/BookingForm';
import PaymentPage from './components/PaymentPage';
import BookingHistory from './components/BookingHistory';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <HallProvider>
        <BookingProvider>
          <Router>
            <Header />
            <NavBar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-login" element={<AdminLogin />} />

                {/* Admin-only route */}
                <Route path="/admin" element={<Admin />} />

                {/* User and admin accessible routes */}
                <Route path="/about" element={<About />} />
                <Route path="/halls" element={<Hall />} />
                <Route path="/book/:id" element={<BookingForm />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/booking-history" element={<BookingHistory />} />

                {/* Redirect to signup if no matching route */}
                <Route path="*" element={<Navigate to="/signup" />} />
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
