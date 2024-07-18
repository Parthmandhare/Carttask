// App.js
import React, { useState } from 'react';
import Home from "./Home/Home";
import Basket from './Basket/Basket';
// import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [basket, setBasket] = useState([]);

  const addItemToBasket = (item) => {
    setBasket([...basket, item]);
  };

  return (
   
    <div>
      <Home basket={basket} addItemToBasket={addItemToBasket} />
      <Basket basket={basket} />
    </div>
  );
};

export default App;
