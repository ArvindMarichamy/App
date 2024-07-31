import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
    const data = await response.json();

    if (response.ok && data.length > 0) {
      const user = data[0];
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
