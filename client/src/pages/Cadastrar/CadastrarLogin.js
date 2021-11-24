import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { useHistory } from 'react-router'
import Logo from "../../componentes/img/logo-da-pizza.png"
import "./CadastrarLogin.css"

function Cadastrar(){

    let history = useHistory()
    const onSubmitCadastro = (values) => {
        Axios.post("http://localhost:3333/cadastrar",{
            login: values.login,
            password: values.password,
            Confirmpassword: values.Confirmpassword,
            endereco: values.endereco,
            numero: values.numero,
            telefone: values.telefone
        }).then((response) =>{
            if( response.data.msg == 1)
            {
                alert("Usuario criado com sucesso!")
                history.push('/')
            }else{
                alert(response.data.msg)
            }
            console.log(response)
        })}

    const validationCadastro = yup.object().shape({
        login: yup
        .string()
        .email(" Email invalido ")
        .required(" Campo obrigatorio "),
        password: yup
        .string()
        .min(4, "Deve haver no minimo 4 digitos")
        .required(" Campo obrigatorio "),
        Confirmpassword: yup
        .string()
        .required(" Campo obrigatorio ")
        .oneOf([yup.ref("password"), null], "As senhas nao sao iguais"),
        endereco: yup.string()
        .required(" Campo obrigatorio "),
        numero: yup.string()
        .required(" Campo obrigatorio "),
        telefone: yup.number()
        .typeError("Isso não parece um número de telefone")
        .positive("Isso não parece um número de telefone")
        .integer("Um número de telefone não pode incluir uma vírgula decimal")
        .min(8)
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
                onSubmit = {onSubmitCadastro}
                validationSchema = {validationCadastro}
                >
                    <Form>

                        <div className = "form-LoginC">
                            <div className = "div-alinha-topo-login">

                                <Field name = "login" className = "input-login" placeholder = "Email" />

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

                                <Field name = "Confirmpassword" className = "input-login" placeholder = "Confirme sua senha" type ="password" />

                                <ErrorMessage
                                component = "span"
                                name = "Confirmpassword"
                                className = "form-error-login"
                                />

                            </div>

                            <div className = "div-alinha-topo-login">

                                <Field name = "endereco" className = "input-login" placeholder = "Endereco"/>

                                <ErrorMessage
                                    component = "span"
                                    name = "endereco"
                                    className = "form-error-login"
                                />

                                <Field name = "numero" className = "input-login" placeholder = "Numero"/>

                                <ErrorMessage
                                    component = "span"
                                    name = "numero"
                                    className = "form-error-login"
                                />
                            
                                <Field name = "telefone" className = "input-login" placeholder = "Telefone" mask="(xx) xxxx-xxxx"/>
                                
                                <ErrorMessage
                                    component = "span"
                                    name = "telefone"
                                    className = "form-error-login"
                                />
                            </div>
                        </div>           

                        <div className = "alinha-botao">
                            <button className = "enviar-login" type = "submit"> Enviar </button>
                        </div>

                    </Form>

                    

                </Formik>

           </div>
        </div>
    )
}

export default Cadastrar;