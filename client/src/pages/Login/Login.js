import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import Logo from '../../componentes/img/logo-da-pizza.png'
import { useHistory } from 'react-router'
import { useCookies } from "react-cookie"
import './Login.css'

function Login(){

    const [cookies, setCookies] = useCookies(["user"])


    let history = useHistory()


    const onSubmitLogin = (values) => {
        Axios.post("http://localhost:3333/login",{
            login: values.login,
            password: values.password,
        }).then((response) =>{
            
            setCookies("user", response.data.msg,{
                path: "/"
            })
            if( response.data.msg == 1 ){
                alert("Usuario logado")
                history.push('/')
            }else{
                alert(" Usuario ou senha incorretos ")
            }
        })}

    const validationLogin = yup.object().shape({
        login: yup
        .string()
        .email(" Email invalido ")
        .required(" Campo obrigatorio "),
        password: yup
        .string()
        .min(4, "Deve haver no minimo 4 digitos")
        .required(" Campo obrigatorio "),
    })


    return(
        <div className = "main-alinha">
            
           <div className = "div-alinha-topo">
               <div className = "div-alinha-logo">
                   <img src={Logo} className = "logo-login"/>
                </div>

                <Formik
                initialValues ={{}}
                onSubmit = {onSubmitLogin}
                validationSchema = {validationLogin}
                >
                    <Form className = "form-Login">

                        <Field name = "login" className = "input-login" placeholder = "Entrar" />

                        <ErrorMessage
                        component = "span"
                        name = "login"
                        className = "form-error-login"
                        />

                        <Field name = "password" className = "input-login" placeholder = "Senha" type ="password" />

                        <ErrorMessage
                        component = "span"
                        name = "password"
                        className = "form-error-login"
                        />

                        <button className = "enviar-login" type = "submit"> Enviar </button>

                        <a className = "enviar-login1" href= "/cadastrarLogin">Cadastrar</a>

                    </Form>

                </Formik>

           </div>
        </div>
    )
}

export default Login;