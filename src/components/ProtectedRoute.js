// ./components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ element, adminOnly = false }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !currentUser.isAdmin) {
    return <Navigate to="/" />;
  }

  return element;
}

export default ProtectedRoute;
