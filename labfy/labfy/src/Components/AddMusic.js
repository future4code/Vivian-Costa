import React from 'react';
import axios from 'axios'

export default class AddMusic extends React.Component {
    state = {
        inputArtist: '',
        inputMusic: '',
        inputLinkMusic: ''
    }

    handleInputArtist = (e) => {
        this.setState({inputArtist: e.target.value})
    }

    handleInputMusic = (e) => {
        this.setState({inputMusic: e.target.value})
    }

    handleInputLinkMusic = (e) => {
        this.setState({inputLinkMusic: e.target.value})
    }

    addTrackToPlaylist = (id) =>{
      const body = {
        name: this.state.inputMusic,
        artist: this.state.inputArtist,
        url: this.state.inputLinkMusic
      }

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks', body, id, {
        headers: {
          Authorization: 'vivian-costa-epps'
        }
      })
      .then ((res) => {
        this.setState({all: res.data.result.list})
        console.log({all: res.data})
          alert('Adicionado com Sucesso!')
      })
      .catch((err) => {
          alert(err)
      })
    }

    render () {
        return (
            <div>
                <h2>Add Musicas a sua Playlist!</h2>
                <label for = "artist">Artista: </label>
                <input placeholder = 'Artista' value={this.state.inputArtist} onChange= {this.handleInputArtist} />
                <label for = "music">Musica: </label>
                <input placeholder = 'Musica' value={this.state.inputMusic} onChange= {this.handleInputMusic}/>
                <label for = "linkmusic">Link da Musica: </label>
                <input placeholder = 'Link' value={this.state.inputLinkMusic} onChange= {this.handleInputLinkMusic} />
                <button onClick= {this.addTrackToPlaylist}>Add Musicas</button>

            </div>
        )
    }
}