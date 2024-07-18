import React from 'react'
// import { FaCartArrowDown } from "react-icons/fa6";
// import Basket from './Basket/Basket';

const Home = ({ basket, addItemToBasket }) => {


  return (
    <div>

      <div className='grid grid-cols-4 gap-4 mt-10'>
        <div className='grid grid-rows-4 gap-10'>
          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "HP Laptop", desc: "16GB SSD, Black Color, RTX", price: "50000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Dell Laptop", desc: "16GB SSD, Black Color, RTX", price: "50000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Asus Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>
        </div>

        <div className='grid grid-rows-4 gap-10'>
          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Mac Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Vivobook Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "MSI Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>
        </div>

        <div className='grid grid-rows-4 gap-10'>
          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Intel Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Asus3 Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Asus4 Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>
        </div>

        <div className='grid grid-rows-4 gap-10'>
          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Asus5 Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Asus6 Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>

          </div>

          <div className='grid grid-rows-4 gap-3 border-2 border-black-500 text-center'>
            <h3>HP Laptop</h3>
            <h4>16GB SSD, Black Color, RTX</h4>
            <h5>50000</h5>
            <button onClick={() => { console.log("hello"); addItemToBasket({ name: "Dell2 Laptop", desc: "6GB SSD, Black Color, RTX", price: "100000" })}}>ADD item</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home