import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "../src/pages/Main/Main"
import Login from "./pages/Login/Login"
import CadastrarLogin from "./pages/Cadastrar/CadastrarLogin"

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {() => <Main/>} />    
            <Route exact path = "/login" component = {() => <Login/>} /> 
            <Route exact path = "/cadastrarLogin" component = {() => <CadastrarLogin/>} />     
        </Switch>
    </BrowserRouter>
)

export default Routes;