import React, {useState, useEffect} from 'react';
import { LoginContainer, MainLogin, InputTextLogin, ButtonLogin, TitleLogin } from "./StyledLoginPage";
import axios from 'axios';
import {useProtectedRoute} from '../../Hooks/useProtectedRoute'
import { useHistory } from 'react-router-dom';

export function LoginPage (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const history = useHistory();

    const handleEmail = (e) => {
        setEmail(e.target.value);
       // setEmail("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
       // setPassword("");
    }

    useEffect (() => {
        const token = localStorage.getItem("token");

        if(token) {
            history.push("/trip/details")
        }
    }, [history]);

    const login = () => {
        const body = {
            email: email,
            password: password
        };

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/login', body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/trip/details")
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <LoginContainer>
        <MainLogin>
        <TitleLogin>Login</TitleLogin> 
        <h4>E-mail <InputTextLogin value={email} onChange={handleEmail} type='text'></InputTextLogin>  </h4>
        <h4>Senha  <InputTextLogin value={password} onChange={handlePassword} type='password'></InputTextLogin> </h4>
        <ButtonLogin onClick={login}>Enviar</ButtonLogin>
        </MainLogin>
    </LoginContainer>
    )
}