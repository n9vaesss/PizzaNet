import React from "react";
import Header from './Header/Header'
import Detalhes from "./Detalhes/Detalhes";
import CarrosselP from './Carrossel/CarrosselPizza'
import CarrosselB from './Carrossel/CarrosselBebidas'

function Main(){
    return(
        <>
            <Header/>
            <Detalhes/>
            <CarrosselP/>
            <CarrosselB/>
        </>
    )
}

export default Main;