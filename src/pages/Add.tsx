import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Add = () => {

  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  });

  const handleChange = (e) => {
    setBook(prev => ({...prev, [e.target.name]: e.target.value}));
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/books', book);
      navigate('/');
    } catch (err) {
      console.error(err);
        
    }
  };

  return (
    <form className="form">
      <h1>Add new book</h1>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="Add a Title" 
        name="title" 
      />
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="Add a Description" 
        name="desc" 
      />
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="Add a Cover" 
        name="cover" 
      />
      <input 
        onChange={handleChange} 
        type="number" 
        placeholder="Add a Price" 
        name="price" 
      />
      <button onClick={handleClick} >Add</button>
    </form>
  );
};

export default Add;
