import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './ProductCart.css';

const ProductCart = (props) => {
  return (
    <div className="product-cart" >
      <div className="left">
        <button className="remove-btn" ><AiOutlineClose size={50} /></button>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
      </div>

      <div className="right">
        <div className="increment_decrement" >
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span className="product-total">
          {props.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
