import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Service_card, { Icon } from '../../components/Service_card/Service_card';
import CardBook from '../../components/CardBook/CardBook';

import './Home.css';

const Home = () => {
  const booksTest = [
    {
      image: 'https://m.media-amazon.com/images/I/51RZJvWcBGL._SY445_SX342_.jpg', 
      title: 'Uzumaki: deluxe edition', 
      author: 'Junji Ito',
      price: 132.16,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51t24CKCByL._SY445_SX342_.jpg', 
      title: 'Happiness - Volume 01', 
      author: 'Shuzo Oshimi',
      price: 23.02,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51FceofWBQL._SY445_SX342_.jpg', 
      title: 'Re:Zero - Começando uma Vida em Outro Mundo', 
      author: 'Tappei Nagatsuki ',
      price: 26.90,
    },
    {
      image: 'https://m.media-amazon.com/images/I/61XVDT2-WTL._SY445_SX342_.jpg', 
      title: 'Cidade das Lápides (acompanha 4 cards exclusivos)', 
      author: 'Junji Ito',
      price: 86.93,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51ivWmFvLbL._SY445_SX342_.jpg', 
      title: 'Tokyo Ghoul - vol. 1', 
      author: 'Sui Ishida',
      price: 32.16,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51cfXZRmgnL._SY445_SX342_.jpg', 
      title: 'As Esculturas sem Cabeça (acompanha 4 cards exclusivos)', 
      author: 'Junji Ito',
      price: 60.80, 
    },
  ];


  const [books, setBooks] = useState([]);
  
  const fetchAllBooks = async () => {
    try{
      const res = await axios.get('http://localhost:8800/books');
      setBooks(res.data);  
    }catch(err){
      console.log(err);    
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/books/'+id);
      window.location.reload();
    } catch (err) {
      console.error(err);
      
    }
  };

  return (
    <>
      <header className="home-header">
        <NavBar />
        <div className="info">
          <h1>Cidade das Lápides</h1>
          <p>A Cidade das Lápides é a mais nova compilação de onze dos melhores contos do início da carreira do mestre dos mangás de horror! Lançados originalmente entre 1994 e 1997 nas clássicas revistas Halloween e Nemuki, da editora japonesa Asahi Sonorama, eles agora integram a coleção de obras-primas do nosso querido mangaká!</p>
          <button>Saiba Mais</button>
        </div>
      </header>

      <main className="home-main">
        <section className="service">
          <h1>Service</h1>
          <div className="cards">
            <Service_card 
              title="Fixed Prices" 
              desc="Prices fix for you shopping needs and others" 
              icon={Icon.TbPigMoney}
            />
            <Service_card 
              title="Money Back Guarantee" 
              desc="Money back guarantee will be safe and loss" 
              icon={Icon.SlBadge}     
            />
            <Service_card 
              title="Fast Delivery" 
              desc="Delivery is very fast until the destination you request" 
              icon={Icon.FaTruckFast}   
            />
          </div>
        </section>

        <section className="bestSellers">
          <h1>BestSellers</h1>
          <div className="best-books">
            {
              booksTest.map(book => (
                <CardBook 
                  key={book.title}
                  image={book.image} 
                  title={book.title} 
                  author={book.author}
                  price={book.price} 
                />
              ))
            }
          </div>
        </section>
      </main>

      <footer>
        <section className="footer-sec" >
          <h1>Subscribe</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit" >&#62;</button>
            <p>Subscribe to our newslatter and stay updated with the latest news.</p>
          </form>
        </section>
        <NavBar />
      </footer>
      
      {/* <h1>Library</h1>
      {
        books.map(book => (
          <div key={book.id}>
            {book.cover && <img src={book.cover}  alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            
            <button onClick={() => handleDelete(book.id)} >Delete</button>
            <button><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>)
        )
      }
      <button>
        <Link to='/add'>Add New Book</Link>
      </button> */}
    </>
  );
};

export default Home;
