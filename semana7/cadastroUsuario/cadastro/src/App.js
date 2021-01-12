import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
border: 1px solid black;
text-align:center;;
height: 80%;
margin:0 30px 0 5px;
width: 100%;
border-radius: 4px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);

`

const BotaoP = styled.button`
border: 1px solid black;
border-radius: 4px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
display: flex;
font-size: 16px;
line-height: 16px;
padding: 5px ;
display:flex;
justify-content:center;
&:hover {
  background: #e9f0f7;
  transition: all .4s ease-in-out;
}

`

class App extends React.Component {
  state = {
    usuarios: [],
    nome: "",
    email: "",
    mostrarLista: false
  };

  componentDidMount = () =>{
    this.todosUsuarios();
  };

  todosUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
        {
          headers: {
            Authorization: "vivian-costa-epps"
          }
        }
      )
      .then((resposta) =>{
        this.setState({ usuarios: resposta.data});
      })
      .catch((erro) =>{
        alert('Tente novamente' + erro.message);
      });
  };

  onChangeNome = (e) => {
    this.setState({nome: e.target.value});
  };

  onChangeEmail = (e) => {
    this.setState({email: e.target.value});
  };

  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
        {
          headers: {
            Authorization: "vivian-costa-epps"
          }
        }
      )
      .then(() =>{
        alert('Criado com sucesso!')
        this.setState({nome: "", email: ""}); 
        this.todosUsuarios()
      })
      .catch((error) =>{
        alert('Tente novamente' + error.message)
      });     
  }
 
  mostrarLista = () => {
    this.setState({mostrarLista: !this.state.mostrarLista});
  }

  render() {
    const renderedTodosUsuarios = this.state.usuarios.map((usuario) =>{
      return <p >{usuario.name}</p>;
    });

     return (

    <div >

      {this.state.mostrarLista? <div><div>{renderedTodosUsuarios}</div>< button onClick = {this.mostrarLista}className="BotaoTop">Voltar</button></div>: (
       <div>
          <BotaoP>
          <button onClick= {this.mostrarLista}className="BotaoTop">
            Lista
            </button>
            </BotaoP>

          <Container>
        
          <p>
            <label for = "nome">Nome: </label>
            <input 
            id = "nome"
            className = "InputNome"
            type = "text"
            value={this.state.name}
            onChange = {this.onChangeNome}
            /> 
          </p>
          <p>
            <label for = "email">Email: </label>
            <input 
            id = "email"
            className = "InputEmail"
            type = "text"
            value={this.state.email}
            onChange = {this.onChangeEmail}
            />
          </p>
          <button
          
            className="salvar" 
            criarUsuario=""
            onClick={this.criarUsuario} >
            Salvar</button>
      </Container>
      </div>
      )}

    </div>
  );

  }
  
} export default App;




 



