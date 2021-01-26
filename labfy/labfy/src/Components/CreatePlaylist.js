import React from 'react';
import axios from 'axios'


export default class CreatePlaylist extends React.Component {
    state = {
        inputName: '',
    }

    handleInputName = (e) => {
        this.setState({inputName: e.target.value})
    }

    createPlay = () => {
        const body = {
            name: this.state.inputName
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
          headers: {
            Authorization: 'vivian-costa-epps'
          }
        })
        .then ((res) => {
          alert('Lista Criada com Sucesso!')

        })
        .catch ((err) => {
          alert('Nao foi possivel criar lista ' + err)
        })
    }

    render () {
        return (
            <div>
                <h2>Crie Sua Playlist</h2>
                <label for = "name">Nome da Playlist: </label>
                <input placeholder = 'Nome da Playlist' value={this.state.inputName} onChange= {this.handleInputName}/>
                <button onClick= {this.createPlay}>Criar Playlist</button>
            </div>
        )
    }
}