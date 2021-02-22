import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPage } from '../../routes/Coordinator'

export function RegisterPage () {
    const history = useHistory()

    return(
        <form>
            <h1>Pagina de Cadastro</h1>
            <h4>Nome de usuario <input type= 'name'></input></h4>
            <h4>E-mail <input type= 'email'></input></h4>
            <h4>Senha <input type= 'password'></input></h4>
            <button onClick={() => goToFeedPage(history)}>Cadastrar</button>
        </form>
    )
}