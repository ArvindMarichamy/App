import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, adminOnly = false }) {
  
    if (adminOnly && localStorage.getItem('userRole') !== 'admin') {
      console.log(localStorage.getItem('user'));
      return <Navigate to="/admin-login" />;
  
    }

  if (!localStorage.getItem('user')) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If all checks pass, render the desired element
  return element;
}

export default ProtectedRoute;
