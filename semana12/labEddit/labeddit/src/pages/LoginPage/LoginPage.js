import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {goToRegisterPage} from '../../routes/Coordinator'

export function LoginPage () {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerEmail = (e) => {
        setEmail(e.target.value)
    }

    const registerPassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect (() => {
        const token = localStorage.getItem("token");

        if(token){
            history.push("/feed")
        }
    }, [history]);

    const login = () => {
        const body = {
            email: email,
            password: password
        };

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/feed")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <h1>Pagina de Login</h1>
            <h4>E-mail <input value={email} onChange={registerEmail} type= 'email'></input></h4>
            <h4>Senha <input value={password} onChange={registerPassword} type= 'password'></input></h4>
            <button onClick={login}>Entrar</button>
            <button onClick={() => goToRegisterPage(history)}>Cadastrar</button>
        </div>
    )
}