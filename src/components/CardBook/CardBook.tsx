import React, { useEffect } from 'react';

import './CardBook.css';

type Props = {
  image: string, 
  title: string, 
  price: number,
  author: string,
}
  
const CardBook = (props: Props) => {

  return (
    <div className="CardBook">
      <img src={props.image} alt="" />
      <div className="CardBook-wrapper"> 
        <h2>{(props.title.length >= 24) ? props.title.slice(0, 24)+'...' : props.title}</h2>
        <h3>{props.author}</h3>
        <span>{props.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}</span>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default CardBook;
