import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

import './Cart.css';
import ProductCart from '../../components/ProductCart/ProductCart';

const Cart = () => {
  const cartProducts = [
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
  ];
  const defaultShip = 10.00;

  return (
    <>
      <header className="cart-header">
        <NavBar/>
      </header>

      <main className="cart-main">
       
        <section className="cart-items"> 
          <h1>Carrinho</h1>
          {
            cartProducts.map(cartProduct => (
              <ProductCart 
                key={cartProduct.id}
                image={cartProduct.image} 
                title={cartProduct.title} 
                price={cartProduct.price}
              />
            ))
          }
        </section>
        <section className="cart-totals" >
          <h2>Total</h2>
          <div className="summary">
            <div className="send">
              <span>Envio</span>
              <span>RS 12,00</span>
            </div>
            <div className="subtotal">
              <span>Subtotal</span>
              <span>
                {
                  cartProducts
                    .reduce((acc, cur) => cur.price + acc, 0)
                    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })
                }
              </span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>
                {
                  (cartProducts
                    .reduce((acc, cur) => cur.price + acc, 0) + defaultShip)
                    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })
                }
              </span>
            </div>
          </div>
          <button>Prosseguir</button>
        </section>
      </main>

      <footer className="cart-footer">
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

export default Cart;
