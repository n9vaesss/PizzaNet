const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;

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

    db.query( "SELECT * FROM usuarios WHERE user_email = ?", [login], (err, result) => {
        if(err){
            res.send(err)
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].pass,(err, result) =>{
                if(result){
                    res.send({msg: 1})
                } else{
                    res.send({msg:"Senha incorreta"})
                }
            }) 
        }else{
            res.send({msg: "Conta nao encontrado"})
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
            bcrypt.hash(password, saltRounds, (err, hash) =>{
                db.query(" INSERT INTO usuarios (user_email, user_senha, user_rua, user_numero_casa, user_telefone) VALUES (?, ?, ?, ?, ?) ", [login, hash, endereco, numero, telefone],
                (err, response) => {
                    if(err){
                        res.send(err)
                    }
                    res.send({msg: 1})
                })                
            })

        }else{
            res.send({msg: "Usuario ja cadastrado"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------*/ 

/*---------------------------------------------------------------------------------------------------*/ 

app.listen(3333, () => {
    console.log("rodando na porta 3333")
})