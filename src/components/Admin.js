// ./components/Admin.js
import React, { useState } from 'react';
import { useHalls } from '../context/HallContext';
import './Admin.css';

function Admin() {
  const { halls, addHall, deleteHall } = useHalls();
  const [newHall, setNewHall] = useState({
    name: '',
    description: '',
    image: '',
    location: '',
    price: '',
    capacity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHall({
      ...newHall,
      [name]: value
    });
  };

  const handleAddHall = () => {
    addHall(newHall);
    setNewHall({
      name: '',
      description: '',
      image: '',
      location: '',
      price: '',
      capacity: ''
    });
  };

  const handleDeleteHall = (hallId) => {
    deleteHall(hallId);
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <p>Manage halls: add, view, and delete halls.</p>
      
      <div className="add-hall-form">
        <h2>Add New Hall</h2>
        <input
          type="text"
          name="name"
          placeholder="Hall Name"
          value={newHall.name}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Hall Description"
          value={newHall.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newHall.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newHall.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newHall.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={newHall.capacity}
          onChange={handleInputChange}
        />
        <button onClick={handleAddHall}>Add Hall</button>
      </div>
      
        <h2>Existing Halls</h2>
      <div className="hall-list">
        {halls.map((hall) => (
          <div key={hall.id} className="hall-card">
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <h3 className="hall-name">{hall.name}</h3>
            <p className="hall-description">{hall.description}</p>
            <p className="hall-location"><strong>Location:</strong> {hall.location}</p>
            <p className="hall-capacity"><strong>Hall Capacity:</strong> {hall.capacity}</p>
            <p className="hall-price"><strong>Price:</strong> {hall.price}</p>
            
            <button className="delete-button" onClick={() => handleDeleteHall(hall.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
