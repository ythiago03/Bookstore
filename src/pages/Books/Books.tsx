import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/SideBar/Sidebar';
import CardBook from '../../components/CardBook/CardBook';

import './Books.css';


const Books = () => {
  const booksTest = [
    {
      id: 0,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/51RZJvWcBGL._SY445_SX342_.jpg', 
      title: 'Uzumaki: deluxe edition', 
      author: 'Junji Ito',
      price: 132.16,
    },
    {
      id: 1,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/51t24CKCByL._SY445_SX342_.jpg', 
      title: 'Happiness - Volume 01', 
      author: 'Shuzo Oshimi',
      price: 23.02,
    },
    {
      id: 2,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/51FceofWBQL._SY445_SX342_.jpg', 
      title: 'Re:Zero - Começando uma Vida em Outro Mundo', 
      author: 'Tappei Nagatsuki ',
      price: 26.90,
    },
    {
      id: 3,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/61XVDT2-WTL._SY445_SX342_.jpg', 
      title: 'Cidade das Lápides (acompanha 4 cards exclusivos)', 
      author: 'Junji Ito',
      price: 86.93,
    },
    {
      id: 4,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/51ivWmFvLbL._SY445_SX342_.jpg', 
      title: 'Tokyo Ghoul - vol. 1', 
      author: 'Sui Ishida',
      price: 32.16,
    },
    {
      id: 5,
      gender: 'HQs, Mangás e Graphic Novels',
      image: 'https://m.media-amazon.com/images/I/51cfXZRmgnL._SY445_SX342_.jpg', 
      title: 'As Esculturas sem Cabeça (acompanha 4 cards exclusivos)', 
      author: 'Junji Ito',
      price: 60.80, 
    },
    {
      id: 6,
      gender: 'Política, Filosofia e Ciências Sociais',
      image: 'https://m.media-amazon.com/images/I/612B0id4gNL._SL1240_.jpg', 
      title: 'Meditações: Edição com postais + marcador (Coleção Grandes Mestres do Estoicismo', 
      author: 'Marco Aurélio',
      price: 33.16, 
    },
    {
      id: 7,
      gender: 'Fantasia, Horror e Ficção Científica',
      image: 'https://m.media-amazon.com/images/I/71sW9BEbAlL._SL1360_.jpg', 
      title: 'O chamado de Cthulhu', 
      author: 'H. P. Lovecraft',
      price: 14.99, 
    },
    {
      id: 8,
      gender: 'Política, Filosofia e Ciências Sociais',
      image: 'https://m.media-amazon.com/images/I/61zkj3SiV4L._SL1200_.jpg', 
      title: 'Manual de Epicteto: Edição Bilíngue com postal + marcador ( Coleção Grandes Mestres do Estoicismo)', 
      author: 'Epicteto',
      price: 27.12, 
    },
    {
      id: 9,
      gender: 'Romance',
      image: 'https://m.media-amazon.com/images/I/81Izv2GRWoL._SL1500_.jpg', 
      title: 'É assim que começa (Vol. 2 É assim que acaba)', 
      author: 'Colleen Hoover',
      price: 37.90, 
    },
    {
      id: 10,
      gender: 'Política, Filosofia e Ciências Sociais',
      image: 'https://m.media-amazon.com/images/I/81TNzkUcNzL._SL1500_.jpg', 
      title: 'Sobre a brevidade da vida: Edição Bilíngue com postal + marcador (Coleção Grandes Mestres do Estoicismo)', 
      author: 'Sêneca',
      price: 27.12, 
    },
  ];

  return (
    <>
      <header className="books-header">
        <NavBar/>
      </header>

      <main className="books-main" >
        <section className="books-sidebar">
          <Sidebar/>
        </section>
        <section className="books-grid" >
          {
            booksTest.map(book => (
              <CardBook 
                key={book.id}
                image={book.image} 
                title={book.title} 
                author={book.author}
                price={book.price} 
              />
            ))
          }
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
    </>
  );
};

export default Books;
