import React from 'react';
import axios from 'axios';
import {baseUrl, axiosConfig} from '../parametros'
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid black;
text-align:center;
`
const SendButton = styled.button`
border: 1px solid black;
text-align:center;
`

export class RegisterPage extends React.Component {
  state = {
    nome: '',
    email: ''
  }

  onChangeName = (e) => {
    this.setState({nome: e.target.value})
  }
  
  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post(baseUrl, body, axiosConfig)
    .then((res) => {
      alert("Usuário criado com sucesso!!")
      this.setState({nome: '', email: ''})
    })
    .catch((err) => {
      alert("Usuário não pode ser criado!")
    })
  }

  render() {
    return (
      <Container>
        <h2>Cadastro</h2>
        <form>
            <label for = "nome">Nome:</label>
            <input  value={this.state.nome} onChange={this.onChangeName} />
            <label for = "email">E-mail:</label>
            <input  value={this.state.email} onChange={this.onChangeEmail} />
            <SendButton onClick={this.createUser}>Cadastrar</SendButton>
        </form>
        
      </Container>
    )
  }
}