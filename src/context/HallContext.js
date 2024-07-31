// ./context/HallContext.js
import React, { createContext, useContext, useState } from 'react';

const HallContext = createContext();

export function useHalls() {
  return useContext(HallContext);
}

export function HallProvider({ children }) {
  const [halls, setHalls] = useState([]);

  const addHall = (newHall) => {
    setHalls((prevHalls) => [...prevHalls, newHall]);
  };

  return (
    <HallContext.Provider value={{ halls, addHall }}>
      {children}
    </HallContext.Provider>
  );
}
