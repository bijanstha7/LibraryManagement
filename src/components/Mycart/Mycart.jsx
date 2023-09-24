import React, { useState } from 'react';
import "./Mycart.css";
import {useNavigate} from "react-router-dom";

const Mycart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Book 1 ', price: 10 },
    { id: 2, name: 'Book 2 ', price: 20 },
  ]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="shopping-cart">
      <h2>My Cart</h2>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
        <div><button className="button1" onClick={()=>navigate("/book")}>Check Out</button></div>
      </div>
    </div>
  );
};

export default Mycart;
