// ./components/Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHalls } from '../context/HallContext';
import'./Admin.css'

function Admin() {
  const { halls, addHall, deleteHall } = useHalls();
  const navigate = useNavigate();
  const [newHall, setNewHall] = useState({
    name: '',
    description: '',
    image: ''
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
    setNewHall({ name: '', description: '', image: '' });
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
        <button onClick={handleAddHall}>Add Hall</button>
      </div>
      
      <div className="hall-list">
        <h2>Existing Halls</h2>
        {halls.map((hall, index) => (
          <div key={index} className="hall-card">
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <h3 className="hall-name">{hall.name}</h3>
            <p className="hall-description">{hall.description}</p>
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
