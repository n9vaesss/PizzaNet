import React from "react";
import { useEffect, useState, useRef } from 'react'
import { useCookies } from "react-cookie";
import './Compras.css'

function ContagemPizza(){

    const [cookies, setCookie] = useCookies(["pizzanumero1", "pizzanumero2", "pizzanumero3", "pizzanumero4", "pizzanumero5", "pizzanumero6", "pizzanumero7", "pizzanumero8", "pizzanumero9", "user"]);

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza1, setContagempizza1] = useState(0)

    function HandleSubPizza1 (){
        
        setContagempizza1((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza1 > 0){
            setCookie("pizzanumero1", contagempizza1 - 1, {
                path: "/"
            });
        }else{
            setCookie("pizzanumero1", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza1 (){ 

        setContagempizza1((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero1", contagempizza1 + 1, {
            path: "/"
        });
    }
{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza2, setContagempizza2] = useState(0)

    function HandleSubPizza2 (){
        
        setContagempizza2((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza2 > 0){
        setCookie("pizzanumero2", contagempizza2 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero2", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza2 (){ 

        setContagempizza2((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero2", contagempizza2 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza3, setContagempizza3] = useState(0)

    function HandleSubPizza3 (){
        
        setContagempizza3((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza3 > 0){
        setCookie("pizzanumero3", contagempizza3 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero3", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza3 (){ 

        setContagempizza3((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero3", contagempizza3 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza4, setContagempizza4] = useState(0)

    function HandleSubPizza4 (){
        
        setContagempizza4((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza4 > 0){
        setCookie("pizzanumero4", contagempizza4 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero4", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza4 (){ 

        setContagempizza4((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero4", contagempizza4 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza5, setContagempizza5] = useState(0)

    function HandleSubPizza5 (){
        
        setContagempizza5((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza5 > 0){
        setCookie("pizzanumero5", contagempizza5 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero5", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza5 (){ 

        setContagempizza5((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero5", contagempizza5 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza6, setContagempizza6] = useState(0)

    function HandleSubPizza6 (){
        
        setContagempizza6((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza6 > 0){
        setCookie("pizzanumero6", contagempizza6 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero6", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza6 (){ 

        setContagempizza6((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero6", contagempizza6 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza7, setContagempizza7] = useState(0)

    function HandleSubPizza7 (){
        
        setContagempizza7((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza7 > 0){
        setCookie("pizzanumero7", contagempizza7 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero7", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza7 (){ 

        setContagempizza7((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero7", contagempizza7 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza8, setContagempizza8] = useState(0)

    function HandleSubPizza8 (){
        
        setContagempizza8((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza8 > 0){
        setCookie("pizzanumero8", contagempizza8 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero8", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza8 (){ 

        setContagempizza8((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero8", contagempizza8 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    const [contagempizza9, setContagempizza9] = useState(0)

    function HandleSubPizza9 (){
        
        setContagempizza9((anterior) => { if(anterior <= 1){ return anterior = 0 } return anterior - 1 });

        if(contagempizza9 > 0){
        setCookie("pizzanumero9", contagempizza9 - 1, {
            path: "/"
        });
        }else{
            setCookie("pizzanumero9", 0, {
                path: "/"
            }); 
        }
    }

    function HandleSomaPizza9 (){ 

        setContagempizza9((anterior) => { return anterior + 1});
        
        setCookie("pizzanumero9", contagempizza9 + 1, {
            path: "/"
        });
    }

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

    return(
        <>

            <div className="info-alinha-compras">

                <div className="info-alinha-img-compras-pizza">

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZBU.jpg"} className="img-compras">
                        </img>
                        <span className = "nome-pizza-compras">Bauru</span>
                        <span className = "preco-pizza-compras">R$49.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, presunto, requeijão, oregano e tomate.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza1}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza1}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza1}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCLB.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Calabresa</span>
                        <span className = "preco-pizza-compras">R$49.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, presunto, requeijão, oregano e tomate.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza2}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza2}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza2}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCU.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Catuperoni</span>
                        <span className = "preco-pizza-compras">R$49.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, pepperoni, requeijão, oregano e parmesão ralado.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza3}>-</button>
                        <button className = "botao-adicao"  onClick={HandleSomaPizza3}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza3}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZMUS.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Mussarela</span>
                        <span className = "preco-pizza-compras">R$59.99</span>
                        <span className = "ingredientes-pizza-compras">Queijo mussarela e oregano.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza4}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza4}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza4}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZMG.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Margherita</span>
                        <span className = "preco-pizza-compras">R$39.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, tomate, oregano e manjericão.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza5}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza5}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza5}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPEP.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Pepperoni</span>
                        <span className = "preco-pizza-compras">R$49.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, oregano e pepperoni.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza6}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza6}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza6}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPU.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Presunto</span>
                        <span className = "preco-pizza-compras">R$59.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, oregano e presunto</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza7}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza7}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza7}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZNAP.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Napolitana</span>
                        <span className = "preco-pizza-compras">R$69.99</span>
                        <span className = "ingredientes-pizza-compras">Mussarela, tomate, oregano e parmesão ralado.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza8}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza8}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza8}</label>
                    </div>

{ /* ---------------------------------------------------------------------------------------------------------------------------- */ }

                    <div className ="div-pizza-geral">
                        <img src = {"https://cache.dominos.com/olo/6_66_4/assets/build/market/BR/_pt/images/img/products/larges/S_PIZALHO.jpg"} className="img-compras" />
                        <span className = "nome-pizza-compras">Pão de alho</span>
                        <span className = "preco-pizza-compras">R$59.99</span>
                        <span  className = "ingredientes-pizza-compras">Mussarela, oregano, pasta de pão de alho, pão e parmesão.</span>
                        <button className = "botao-subtracao" onClick={HandleSubPizza9}>-</button>
                        <button className = "botao-adicao" onClick={HandleSomaPizza9}>+</button>
                        <label type = "text" className = "botao-teste">{contagempizza9}</label>
                    </div>

                </div>

            </div>

        </>
    )

}

export default ContagemPizza;