import React from "react";
import './CarrosselPizza.css';
import { useEffect, useState, useRef } from 'react'

function App() {

  const [ data, setData ] = useState([])

  const carrossel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/static/pizzas.json').then((response) => response.json()).then(setData)
  }, [])

  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  if( !data || !data.length ) return null

  return (
    <div className="container">
      <h1 className = "expo"> Pizzas </h1>
      <div className ="carrossel" ref={carrossel}>

        {data.map((item) =>{

          const {id, name, price, image, ingredientes} = item;

          return(
          <div className = "item" key = {id}>
              <div className = "image">
                  <img src = {image} alt = {name} className= "Pizzasimgs" />
              </div>

              <div className = "info">
                  <span className = "name">{name}</span>
                  <span className = "ingre">{ingredientes}</span>
                  <button className = "price">R$ {price}</button>
              </div>
          </div>
          )
        })}
      </div>

      <div className = "buttons">

        <button onClick = {handleLeftClick}> 
          <img src= "/static/images/216151_right_chevron_icon.png" /> 
        </button>

        <button onClick = {handleRightClick}> 
          <img src= "/static/images/216151_right_chevron_icon.png" /> 
        </button>

      </div>
    </div>
  );
}

export default App;