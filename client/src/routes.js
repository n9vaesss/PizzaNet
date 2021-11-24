import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "../src/pages/Main/Main"
import Login from "./pages/Login/Login"
import CadastrarLogin from "./pages/Cadastrar/CadastrarLogin"
import Compras from "./pages/Compras/Compras"
import Carrinho from "./pages/Carrinho/Carrinho"


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {() => <Main/>} />    
            <Route exact path = "/login" component = {() => <Login/>} /> 
            <Route exact path = "/cadastrarLogin" component = {() => <CadastrarLogin/>} />    
            <Route exact path = "/compras" component = {() => <Compras/>} />     
            <Route exact path = "/carrinho" component = {() => <Carrinho/>} /> 
        </Switch>
    </BrowserRouter>
)

export default Routes;