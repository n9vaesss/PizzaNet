import React from "react"
import PizzaHeader from "../../../componentes/img/PizzaHeader.jpg"
import LogoPizza from "../../../componentes/img/logo-da-pizza.png"
import LogoWapp from "../../../componentes/img/logo-waap.png"
import LogoFB from "../../../componentes/img/logo_facebook.png"
import Logoinsta from "../../../componentes/img/logo_instagram.png"
import "../Header/Header.css"

function App() {
    return (
      <>
        <div className = "pizzaHeader">

          <img src = {PizzaHeader} className = "imgHeader"/>
          <a href="/"><img src = {LogoPizza} className = "LogoPHeader"/></a>
          <a href="#"><img src = {LogoWapp} className = "LogoWHeader"/></a>
          <a href="#"><img src = {LogoFB} className = "LogoFHeader"/></a>
          <a href="#"><img src = {Logoinsta} className = "LogoIHeader"/></a>

          <div className = "containerLC">

            <a href="/login" className = "LoginHeader" >Entrar</a>
            <a href="/cadastrarLogin" className = "LoginHeader" >Cadastrar</a>

          </div>

          <div className = "FraseTopo">
            <h1>Tradicional Pizza Net</h1>
            <p>Confira o nosso cardápio e escolha a sua pizza tradicional italiana preferida!</p>
          </div>
          
        </div>
      </>
    );
  }
  
  export default App;