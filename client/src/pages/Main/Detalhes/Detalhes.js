import React from "react"
import "../Detalhes/Detalhes.css"
import medalha from "../../../componentes/img/imagem-de-medalha.png"
import DPizza from "../../../componentes/img/desenho-pizza.png"
import DFone from "../../../componentes/img/desenho-de-fone.png"

function Detalhes() {
    return(
        <div className = "selecao">
            <div className = "divSelecao">
                <img src={medalha} className = "medalha"/>
                <h1>Qualidade</h1>
                <p>Todos nossos produtos são feitos com ingredientes de altíssima qualidade, para entregar o melhor para você</p>
            </div>

            <div className = "divSelecao">
                <img src={DPizza} className = "DPizza"/>
                <h1>Sabores</h1>
                <p>Todas nossas pizzas e esfihas possuem um sabor incrível e inesquecível,peça a sua e confira!</p>
            </div>

            <div className = "divSelecao">
                <img src={DFone} className = "DFone"/>
                <h1>Atendimento</h1>
                <p>Além de excelentes produtos, possuímos também um ótimo atendimento, seja presencial, delivery ou por ifood.</p>
            </div>
        </div>
    )
}

export default Detalhes