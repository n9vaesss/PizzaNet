import React from "react";
import { useEffect, useState, useRef } from 'react'
import { useCookies } from "react-cookie";
import Header from "../Main/Header/Header"
import './Compras.css'

function ContagemBebida (){

    const [cookies, setCookie] = useCookies(["bebidanumero1", "bebidanumero2", "bebidanumero3", "bebidanumero4", "bebidanumero5", "bebidanumero6", "bebidanumero7", "bebidanumero8", "bebidanumero9", "user"]);

    { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida1, setContagembebida1] = useState(0)

    function HandleSubBebida1 (){
        
        setContagembebida1((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida1 > 0){
        setCookie("bebidanumero1", contagembebida1 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero1", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida1 (){ 

        setContagembebida1((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero1", contagembebida1 + 1, {
            path: "/"
        });
    }
{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida2, setContagembebida2] = useState(0)

    function HandleSubBebida2 (){
        
        setContagembebida2((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida2 > 0){
        setCookie("bebidanumero2", contagembebida2 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero2", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida2 (){ 

        setContagembebida2((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero2", contagembebida2 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida3, setContagembebida3] = useState(0)

    function HandleSubBebida3 (){
        
        setContagembebida3((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida3 > 0){
        setCookie("bebidanumero3", contagembebida3 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero3", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida3 (){ 

        setContagembebida3((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero3", contagembebida3 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida4, setContagembebida4] = useState(0)

    function HandleSubBebida4 (){
        
        setContagembebida4((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida4 > 0){
        setCookie("bebidanumero4", contagembebida4 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero4", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida4 (){ 

        setContagembebida4((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero4", contagembebida4 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida5, setContagembebida5] = useState(0)

    function HandleSubBebida5 (){
        
        setContagembebida5((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida5 > 0){
        setCookie("bebidanumero5", contagembebida5 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero5", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida5 (){ 

        setContagembebida5((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero5", contagembebida5 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida6, setContagembebida6] = useState(0)

    function HandleSubBebida6 (){
        
        setContagembebida6((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida6 > 0){
        setCookie("bebidanumero6", contagembebida6 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero6", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida6 (){ 

        setContagembebida6((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero6", contagembebida6 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida7, setContagembebida7] = useState(0)

    function HandleSubBebida7 (){
        
        setContagembebida7((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida7 > 0){
        setCookie("bebidanumero7", contagembebida7 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero7", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida7 (){ 

        setContagembebida7((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero7", contagembebida7 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida8, setContagembebida8] = useState(0)

    function HandleSubBebida8 (){
        
        setContagembebida8((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida8 > 0){
        setCookie("bebidanumero8", contagembebida8 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero8", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida8 (){ 

        setContagembebida8((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero8", contagembebida8 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagembebida9, setContagembebida9] = useState(0)

    function HandleSubBebida9 (){
        
        setContagembebida9((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagembebida9 > 0){
        setCookie("bebidanumero9", contagembebida9 - 1, {
            path: "/"
        });
        }else{
            setCookie("bebidanumero9", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaBebida9 (){ 

        setContagembebida9((anterior) => { return anterior + 1});
        
        setCookie("bebidanumero9", contagembebida9 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    return(
        <>
            <div className="info-alinha-compras">

                <div className="info-alinha-img-compras-pizza">

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_COKE.jpg"} className="img-compras">
                        </img>
                        <span className = "nome-pizza-compras">Coca Cola</span>
                        <span className = "preco-pizza-compras">R$9.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida1}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida1}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida1}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/c871dfed-0fa7-4026-92c3-260de2d6ba60.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Coca Cola Zero</span>
                        <span className = "preco-pizza-compras">R$9.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida2}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida2}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida2}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_ORANGE.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Fanta Laranja</span>
                        <span className = "preco-pizza-compras">R$9.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida3}>-</button>
                        <button className = "botao-adicao"  onClick={HandleSomaBebida3}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida3}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_GRAPE.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Fanta Uva</span>
                        <span className = "preco-pizza-compras">R$9.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida4}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida4}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida4}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_GUARANAF.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Fanta guaraná</span>
                        <span className = "preco-pizza-compras">R$9.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida5}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida5}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida5}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_TEALEM.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Ice tea Limão</span>
                        <span className = "preco-pizza-compras">R$7.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida6}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida6}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida6}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_TEAPCH.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Ice tea Pêssego</span>
                        <span className = "preco-pizza-compras">R$7.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida7}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida7}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida7}</label>
                    </div>

                { /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_SPRITE.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Sprite</span>
                        <span className = "preco-pizza-compras">R$8.99</span>
                        <span className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida8}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida8}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida8}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_68_3/assets/build/market/BR/_pt/images/img/products/larges/F_WATER.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Água</span>
                        <span className = "preco-pizza-compras">R$5.99</span>
                        <span  className = "ingredientes-pizza-compras"></span>
                        <button className = "botao-subtracao" onClick={HandleSubBebida9}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaBebida9}>+</button>
                        <label type = "text" className = "botao-teste">{contagembebida9}</label>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ContagemBebida