// ./context/HallContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const HallContext = createContext();

export function HallProvider({ children }) {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await fetch('http://localhost:8000/halls');
        if (response.ok) {
          const data = await response.json();
          setHalls(data);
        } else {
          throw new Error('Failed to fetch halls');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchHalls();
  }, []);

  const addHall = async (newHall) => {
    try {
      const response = await fetch('http://localhost:8000/halls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHall)
      });
      if (response.ok) {
        const addedHall = await response.json();
        setHalls((prevHalls) => [...prevHalls, addedHall]);
      } else {
        throw new Error('Failed to add hall');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHall = async (hallId) => {
    try {
      const response = await fetch(`http://localhost:8000/halls/${hallId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setHalls((prevHalls) => prevHalls.filter((hall) => hall.id !== hallId));
      } else {
        throw new Error('Failed to delete hall');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HallContext.Provider value={{ halls, addHall, deleteHall }}>
      {children}
    </HallContext.Provider>
  );
}

export function useHalls() {
  return useContext(HallContext);
}
