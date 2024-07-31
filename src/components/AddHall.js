// ./components/AddHall.js
import React, { useState } from 'react';
import { useHalls } from '../context/HallContext';

function AddHall() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const { addHall } = useHalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHall = { name, image, description };
    addHall(newHall);
    setName('');
    setImage('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Hall Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Add Hall</button>
    </form>
  );
}

export default AddHall;
