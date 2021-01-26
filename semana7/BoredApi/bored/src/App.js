import React from "react";
import axios from 'axios'

export default class App extends React.Component {
  state = {
    activity: '',
    type: '',
    participants: 0,
    price: ''
  }

  pegarAtividade = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      this.setState({
        activity: res.data.activity,
        type: res.data.type,
        participants: res.data.participants,
        price: res.data.price
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Vamos sair do tedio?</h1>
        <button onClick = {this.pegarAtividade}>Clique em mim</button>
        <h3>Atividade</h3>
        <p> {this.state.activity}</p>
        <h3>Tipo: </h3>
        <p>{this.state.type}</p>
        <h3>Particiantes:</h3>
        <p> {this.state.participants}</p>
        <h3>Valor: </h3>
        <p>R$ {this.state.price}</p>
      </div>
    );
  }
}
