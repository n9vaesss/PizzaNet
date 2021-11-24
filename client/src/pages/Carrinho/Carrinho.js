import React, { useEffect } from "react";
import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";
import Header from "../Main/Header/Header"
import Axios from "axios";
import './Carrinho.css'

function Carrinho(){

    const [cookies, setCookie, removeCookie] = useCookies(["pizzanumero1", "pizzanumero2", "pizzanumero3", "pizzanumero4", "pizzanumero5", "pizzanumero6", "pizzanumero7", "pizzanumero8", "bebidanumero1", "bebidanumero2", "bebidanumero3", "bebidanumero4", "bebidanumero5", "bebidanumero6", "bebidanumero7", "bebidanumero8", "bebidanumero9", , "user"]);

    let history = useHistory()

    const handleFinalizarCompras = () =>{ 
        Axios.post("http://localhost:3333/finalizaroComprasPizza",{ 
            user: cookies.user,
            pizza1: cookies.pizzanumero1,
            pizza2: cookies.pizzanumero2,
            pizza3: cookies.pizzanumero3,
            pizza4: cookies.pizzanumero4,
            pizza5: cookies.pizzanumero5,
            pizza6: cookies.pizzanumero6,
            pizza7: cookies.pizzanumero7,
            pizza8: cookies.pizzanumero8,
            pizza9: cookies.pizzanumero9,
        }).then((response) => {
        })
        Axios.post("http://localhost:3333/finalizaroComprasBebida",{ 
            user: cookies.user,
            bebida1: cookies.bebidanumero1,
            bebida2: cookies.bebidanumero2,
            bebida3: cookies.bebidanumero3,
            bebida4: cookies.bebidanumero4,
            bebida5: cookies.bebidanumero5,
            bebida6: cookies.bebidanumero6,
            bebida7: cookies.bebidanumero7,
            bebida8: cookies.bebidanumero8,
            bebida9: cookies.bebidanumero9,
        }).then((response) => {
            alert(response.data.msg)
        })

        removeCookie("pizzanumero1");
        removeCookie("pizzanumero2"); 
        removeCookie("pizzanumero3")
        removeCookie("pizzanumero4")
        removeCookie("pizzanumero5")
        removeCookie("pizzanumero6")
        removeCookie("pizzanumero7")
        removeCookie("pizzanumero8")
        removeCookie("pizzanumero9")

        removeCookie("bebidanumero1");
        removeCookie("bebidanumero2"); 
        removeCookie("bebidanumero3")
        removeCookie("bebidanumero4")
        removeCookie("bebidanumero5")
        removeCookie("bebidanumero6")
        removeCookie("bebidanumero7")
        removeCookie("bebidanumero8")
        removeCookie("bebidanumero9")

        history.push('/');
    }

    const handleRemoverCarrinho = () =>{
        removeCookie("pizzanumero1");
        removeCookie("pizzanumero2"); 
        removeCookie("pizzanumero3")
        removeCookie("pizzanumero4")
        removeCookie("pizzanumero5")
        removeCookie("pizzanumero6")
        removeCookie("pizzanumero7")
        removeCookie("pizzanumero8")
        removeCookie("pizzanumero9")

        removeCookie("bebidanumero1");
        removeCookie("bebidanumero2"); 
        removeCookie("bebidanumero3")
        removeCookie("bebidanumero4")
        removeCookie("bebidanumero5")
        removeCookie("bebidanumero6")
        removeCookie("bebidanumero7")
        removeCookie("bebidanumero8")
        removeCookie("bebidanumero9")
        history.push('/compras');
    }

    const p = new Array(9)
    p[0] = "";p[1] = "";p[2] = "";p[3] = "";p[4] = "";p[5] = "";p[6] = "";p[7] = "";p[8] = "";

    const np = new Array(9)
    np[0] = "";np[1] = "";np[2] = "";np[3] = "";np[4] = "";np[5] = "";np[6] = "";np[7] = "";np[8] = "";

    const pp = new Array(9)
    pp[0] = "";pp[1] = "";pp[2] = "";pp[3] = "";pp[4] = "";pp[5] = "";pp[6] = "";pp[7] = "";pp[8] = ""

    const b = new Array(9)
    b[0] = "";b[1] = "";b[2] = "";b[3] = "";b[4] = "";b[5] = "";b[6] = "";b[7] = "";b[8] = ""

    const nb = new Array(9)
    nb[0] = "";nb[1] = "";nb[2] = "";nb[3] = "";nb[4] = "";nb[5] = "";nb[6] = "";nb[7] = "";nb[8] = ""

    const pb = new Array(9)
    pb[0] = "";pb[1] = "";pb[2] = "";pb[3] = "";pb[4] = "";pb[5] = "";pb[6] = "";pb[7] = "";pb[8] = ""

    const pbn = new Array(9)
    pbn[0] = 0;pbn[1] = 0;pbn[2] = 0;pbn[3] = 0;pbn[4] = 0;pbn[5] = 0;pbn[6] = 0;pbn[7] = 0;pbn[8] = 0

    const ppn = new Array(9)
    ppn[0] = 0;ppn[1] = 0;ppn[2] = 0;ppn[3] = 0;ppn[4] = 0;ppn[5] = 0;ppn[6] = 0;ppn[7] = 0;ppn[8] = 0

    const pbq = new Array(9)
    pbq[0] = 0;pbq[1] = 0;pbq[2] = 0;pbq[3] = 0;pbq[4] = 0;pbq[5] = 0;pbq[6] = 0;pbq[7] = 0;pbq[8] = 0

    const ppq = new Array(9)
    ppq[0] = 0;ppq[1] = 0;ppq[2] = 0;ppq[3] = 0;ppq[4] = 0;ppq[5] = 0;ppq[6] = 0;ppq[7] = 0;ppq[8] = 0

    if( cookies.pizzanumero1 > 0 ){ p[0] = cookies.pizzanumero1; np[0] = "Bauru"; pp[0] = 49.99 }
    if( cookies.pizzanumero2 > 0 ){ p[1] = cookies.pizzanumero2; np[1] = "Calabresa"; pp[1] = 49.99 }
    if( cookies.pizzanumero3 > 0 ){ p[2] = cookies.pizzanumero3; np[2] = "Catuperoni"; pp[2] = 49.99 }
    if( cookies.pizzanumero4 > 0 ){ p[3] = cookies.pizzanumero4; np[3] = "Mussarela"; pp[3] = 59.99 }
    if( cookies.pizzanumero5 > 0 ){ p[4] = cookies.pizzanumero5; np[4] = "Margherita"; pp[4] = 39.99 }
    if( cookies.pizzanumero6 > 0 ){ p[5] = cookies.pizzanumero6; np[5] = "Pepperoni"; pp[5] = 49.99 }
    if( cookies.pizzanumero7 > 0 ){ p[6] = cookies.pizzanumero7; np[6] = "Presunto"; pp[6] = 59.99 }
    if( cookies.pizzanumero8 > 0 ){ p[7] = cookies.pizzanumero8; np[7] = "Napolitana"; pp[7] = 69.99 }
    if( cookies.pizzanumero9 > 0 ){ p[8] = cookies.pizzanumero9; np[8] = "Pão de alho"; pp[8] = 59.99 }

    if( cookies.bebidanumero1 > 0 ){ b[0] = cookies.bebidanumero1; nb[0] = "Coca Cola"; pb[0] = 9.99 }
    if( cookies.bebidanumero2 > 0 ){ b[1] = cookies.bebidanumero2; nb[1] = "Coca Cola Zero"; pb[1] = 9.99  }
    if( cookies.bebidanumero3 > 0 ){ b[2] = cookies.bebidanumero3; nb[2] = "Fanta Laranja"; pb[2] = 9.99  }
    if( cookies.bebidanumero4 > 0 ){ b[3] = cookies.bebidanumero4; nb[3] = "Fanta Uva"; pb[3] = 9.99  }
    if( cookies.bebidanumero5 > 0 ){ b[4] = cookies.bebidanumero5; nb[4] = "Fanta guaraná"; pb[4] = 9.99  }
    if( cookies.bebidanumero6 > 0 ){ b[5] = cookies.bebidanumero6; nb[5] = "Ice tea Limão"; pb[5] = 7.99  }
    if( cookies.bebidanumero7 > 0 ){ b[6] = cookies.bebidanumero7; nb[6] = "Ice tea Pêssego"; pb[6] = 7.99  }
    if( cookies.bebidanumero8 > 0 ){ b[7] = cookies.bebidanumero8; nb[7] = "Sprite"; pb[7] = 8.99  }
    if( cookies.bebidanumero9 > 0 ){ b[8] = cookies.bebidanumero9; nb[8] = "Água"; pb[8] = 5.99  }

    var total = 0

    if ( cookies.pizzanumero1 > 0 ){ ppn[0] = 49.99; ppq[0] = p[0]}
    if ( cookies.pizzanumero2 > 0 ){ ppn[1] = 49.99; ppq[1] = p[1]}
    if ( cookies.pizzanumero3 > 0 ){ ppn[2] = 49.99; ppq[2] = p[2]}
    if ( cookies.pizzanumero4 > 0 ){ ppn[3] = 59.99; ppq[3] = p[3]}
    if ( cookies.pizzanumero4 > 0 ){ ppn[4] = 39.99; ppq[4] = p[4]}
    if ( cookies.pizzanumero6 > 0 ){ ppn[5] = 49.99; ppq[5] = p[5]}
    if ( cookies.pizzanumero7 > 0 ){ ppn[6] = 59.99; ppq[6] = p[6]}
    if ( cookies.pizzanumero8 > 0 ){ ppn[7] = 69.99; ppq[7] = p[7]}
    if ( cookies.pizzanumero9 > 0 ){ ppn[8] = 59.99; ppq[8] = p[8]}

    if ( cookies.bebidanumero1 > 0 ){ pbn[0] = 9.99; pbq[0] = b[0]}
    if ( cookies.bebidanumero2 > 0 ){ pbn[1] = 9.99; pbq[1] = b[1]}
    if ( cookies.bebidanumero3 > 0 ){ pbn[2] = 9.99; pbq[2] = b[2]}
    if ( cookies.bebidanumero4 > 0 ){ pbn[3] = 9.99; pbq[3] = b[3]}
    if ( cookies.bebidanumero5 > 0 ){ pbn[4] = 9.99; pbq[4] = b[4]}
    if ( cookies.bebidanumero6 > 0 ){ pbn[5] = 7.99; pbq[5] = b[5]}
    if ( cookies.bebidanumero7 > 0 ){ pbn[6] = 7.99; pbq[6] = b[6]}
    if ( cookies.bebidanumero8 > 0 ){ pbn[7] = 8.99; pbq[7] = b[7]}
    if ( cookies.bebidanumero9 > 0 ){ pbn[8] = 5.99; pbq[8] = b[8]}

    var total = ppn[0] * ppq[0] + ppn[1] * ppq[1] + ppn[2] * ppq[2] + ppn[3] * ppq[3] + ppn[4] * ppq[4] + ppn[5] * ppq[5] + ppn[6] * ppq[6] + ppn[7] * ppq[7] + ppn[8] * ppq[8] + pbn[0] * pbq[0] + pbn[1] * pbq[1] + pbn[2] * pbq[2]  + pbn[3] * pbq[3] + pbn[4] * pbq[4]  + pbn[5] * pbq[5]  + pbn[6] * pbq[6]  + pbn[7] * pbq[7]  + pbn[8] * pbq[8]


    return(
        <>
            <Header/>
            <div className = "principal-div-carrinho">

                <div className = "org-carrinho">

                    <h1 className = "txt-nome-carrinho">Carrinho de Compras</h1>

                    <hr className = "linha-carrinho-1"/>

                        <div className = "div-produtos-carrinho">
                            <h2>Produtos</h2>
                            <p>{np[0]}</p><p>{np[1]}</p><p>{np[2]}</p><p>{np[3]}</p><p>{np[4]}</p><p>{np[5]}</p>
                            <p>{np[6]}</p><p>{np[7]}</p><p>{np[8]}</p><p>{nb[0]}</p><p>{nb[1]}</p><p>{nb[2]}</p>
                            <p>{nb[3]}</p><p>{nb[4]}</p><p>{nb[5]}</p><p>{nb[6]}</p><p>{nb[7]}</p><p>{nb[8]}</p>
                        </div>

                        <div className = "div-quantidade-carrinho">
                            <h2>Quantidade</h2>
                            <p>{p[0]}</p><p>{p[1]}</p><p>{p[2]}</p><p>{p[3]}</p><p>{p[4]}</p><p>{p[5]}</p>
                            <p>{p[6]}</p><p>{p[7]}</p><p>{p[8]}</p><p>{b[0]}</p><p>{b[1]}</p><p>{b[2]}</p>
                            <p>{b[3]}</p><p>{b[4]}</p><p>{b[5]}</p><p>{b[6]}</p><p>{b[7]}</p><p>{b[8]}</p>
                        </div>

                        <div className = "div-preco-carrinho">
                            <h2>Preço</h2>
                            <p>{pp[0]}</p><p>{pp[1]}</p><p>{pp[2]}</p><p>{pp[3]}</p><p>{pp[4]}</p><p>{pp[5]}</p>
                            <p>{pp[6]}</p><p>{pp[7]}</p><p>{pp[8]}</p><p>{pb[0]}</p><p>{pb[1]}</p><p>{pb[2]}</p>
                            <p>{pb[3]}</p><p>{pb[4]}</p><p>{pb[5]}</p><p>{pb[6]}</p><p>{pb[7]}</p><p>{pb[8]}</p>
                        </div>

                        
                        <button onClick={handleRemoverCarrinho} className= "botao-remover">Remover</button>

                    <hr className = "linha-carrinho-2"/>
                    <p className = "nada"></p>
                    <p className = "total-carrinho">Total: {total.toFixed(2)}</p>

                </div>

                <button onClick={handleFinalizarCompras} className = "btn-carrinho">Finalizar Compra</button>

            </div>
        </>
    )
}
export default Carrinho