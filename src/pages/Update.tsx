import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const Update = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: null,
  })

  const bookId = location.pathname.split('/'[2])

  const handleChange = (e) => {
    setBook(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:8800/books/'+bookId, book)
      navigate('/')
    } catch (err) {
      console.error(err);
        
    }
  }

  return (
    <form className='form'>
      <h1>Update the book</h1>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder='Add a Title' 
        name='title' 
        />
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder='Add a Description' 
        name='desc' 
        />
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder='Add a Cover' 
        name='cover' 
        />
      <input 
        onChange={handleChange} 
        type="number" 
        placeholder='Add a Price' 
        name='price' 
        />
        <button onClick={handleClick} >Add</button>
    </form>
  )
}

export default Update;