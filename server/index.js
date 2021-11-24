const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"pizzanet"
})

app.use(express.json())
app.use(cors())


/*---------------------------------------------------------------------------------------------------*/ 

app.post('/login', (req, res) =>{
    const login = req.body.login;
    const password = req.body.password;

    db.query( "SELECT * FROM usuarios WHERE user_email = ? AND user_senha = ?", [login, password], (err, result) => {
        if(err){
            res.send(err)
        }
        if(result.length > 0){
            res.send({msg: 1})
        }else{
            res.send({msg: "Conta nao encontrado"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------*/

app.post('/idusuario', (req, res) =>{
    const login = req.body.login;

    db.query( "SELECT id_usuario FROM usuarios WHERE user_email = ?", [login], (err, result) => {
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
        
    })
})

/*---------------------------------------------------------------------------------------------------*/

app.post("/cadastrar", (req, res)=>{
    const login = req.body.login
    const password = req.body.password
    const endereco = req.body.endereco
    const numero = req.body.numero
    const telefone = req.body.telefone

    db.query(" SELECT * FROM usuarios WHERE user_email = ? ", [login], (err, result) => {
        if(err){
            res.send(err)
        }
        if(result.length == 0){

            db.query(" INSERT INTO usuarios (user_email, user_senha, user_rua, user_numero_casa, user_telefone) VALUES (?, ?, ?, ?, ?) ", [login,password, endereco, numero, telefone],
            (err, response) => {
                if(err){
                    res.send(err)
                }
                res.send({msg: 1})
            })                

        }else{
            res.send({msg: "Usuario ja cadastrado"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------*/ 

app.post("/finalizaroComprasPizza", (req, res) =>{

    const user = req.body.user
    const pizza1 = req.body.pizza1;
    const pizza2 = req.body.pizza2;
    const pizza3 = req.body.pizza3;
    const pizza4 = req.body.pizza4;
    const pizza5 = req.body.pizza5;
    const pizza6 = req.body.pizza6;
    const pizza7 = req.body.pizza7;
    const pizza8 = req.body.pizza8;
    const pizza9 = req.body.pizza9;
    
    const vet = new Array(9)
    vet[1] = 0
    vet[2] = 0
    vet[3] = 0
    vet[4] = 0
    vet[5] = 0
    vet[6] = 0
    vet[7] = 0
    vet[8] = 0

    if(pizza1 > 0){ vet[0] = pizza1 }
    if(pizza2 > 0){ vet[1] = pizza2 }
    if(pizza3 > 0){ vet[2] = pizza1 }
    if(pizza4 > 0){ vet[3] = pizza4 }
    if(pizza5 > 0){ vet[4] = pizza5 }
    if(pizza6 > 0){ vet[5] = pizza6 }
    if(pizza7 > 0){ vet[6] = pizza7 }
    if(pizza8 > 0){ vet[7] = pizza8 }
    if(pizza9 > 0){ vet[8] = pizza9 }


    db.query(" INSERT INTO venda VALUES (?,?,?,?,?,?,?,?,?,?,?)", [null, user,vet[0],vet[1],vet[2],vet[3],vet[4],vet[5],vet[6],vet[7],vet[8]],
    (err, response) => {
        if(err){
            res.send(err)
        }
        res.send({msg: "Compra Finalizada"})
    })
})

/*---------------------------------------------------------------------------------------------------*/ 

app.post("/finalizaroComprasBebida", (req, res) =>{

    const user = req.body.user
    const bebida1 = req.body.bebida1;
    const bebida2 = req.body.bebida2;
    const bebida3 = req.body.bebida3;
    const bebida4 = req.body.bebida4;
    const bebida5 = req.body.bebida5;
    const bebida6 = req.body.bebida6;
    const bebida7 = req.body.bebida7;
    const bebida8 = req.body.bebida8;
    const bebida9 = req.body.bebida9;
    
    const vet = new Array(9)
    vet[1] = 0
    vet[2] = 0
    vet[3] = 0
    vet[4] = 0
    vet[5] = 0
    vet[6] = 0
    vet[7] = 0
    vet[8] = 0

    if(bebida1 > 0){ vet[0] = bebida1 }
    if(bebida2 > 0){ vet[1] = bebida2 }
    if(bebida3 > 0){ vet[2] = bebida1 }
    if(bebida4 > 0){ vet[3] = bebida4 }
    if(bebida5 > 0){ vet[4] = bebida5 }
    if(bebida6 > 0){ vet[5] = bebida6 }
    if(bebida7 > 0){ vet[6] = bebida7 }
    if(bebida8 > 0){ vet[7] = bebida8 }
    if(bebida9 > 0){ vet[8] = bebida9 }


    db.query(" INSERT INTO vendasbedidas VALUES (?,?,?,?,?,?,?,?,?,?,?)", [null, user,vet[0],vet[1],vet[2],vet[3],vet[4],vet[5],vet[6],vet[7],vet[8]],
    (err, response) => {
        if(err){
            res.send(err)
        }
        res.send({msg: "Compra Finalizada"})
    })
})

/*---------------------------------------------------------------------------------------------------*/ 

app.listen(3333, () => {
    console.log("rodando na porta 3333")
})