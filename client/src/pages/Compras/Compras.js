import React from "react";
import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router';
import ContagemPizza from "./ContagemPizza"
import Header from "../Main/Header/Header"
import ContagemBedida from "./ContagemBebida"

function Compras(){

    let history = useHistory()

    const handleCarrinho = () =>{ 

        history.push('/carrinho');
    }

    return(
        <div className = "divprincipalcompra">
            <Header/>
            <div className = "info-alinha-compras">
                <div className = "info-alinha-compras-pizza"><ContagemPizza/></div>
                <div className = "info-alinha-compras-bebidas"><ContagemBedida/></div>
            </div>

            <button onClick={handleCarrinho} className = "btn-carrinho">Carrinho</button>
        </div>
    )
}

export default Compras;