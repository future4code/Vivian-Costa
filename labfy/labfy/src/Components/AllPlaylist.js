import React from 'react';
import axios from 'axios'
import {baseUrl, axiosConfig} from '../parametros'

export class AllPlaylist extends React.Component {
    state = {
        all: [],
        id: []
    }

    componentDidMount = () => {
        this.getAllPlaylist()
    }

    getAllPlaylist = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
            Authorization: 'vivian-costa-epps'
        }   
    }) 
    .then ((res) => {
        this.setState({all: res.data.result.list})
        this.setState({id: res.data.result.id})
    })
    .catch((err) => {
        alert('Playlist nao encontrada!' + err.message)
    })

       
    }

    deletePlaylist = (id)  => {
        console.log()
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId ${id}`, {
            headers: {
                Authorization: 'vivian-costa-epps'
            }
        })
        .then((res) => {
            this.getAllPlaylist()
           
        })
        .catch((err) => {
            console.log(err)
        })
    }



    render () {
        console.log(this.state.allplay)
        return (
            <div>
               <h2>Todas as Playlist</h2>
               {this.state.all.map((allplay) => {
                   return (
                      <div> 
                        <p>{allplay.name}</p>
                        <button onClick={() => {this.deletePlaylist(allplay.id)}}>X</button>
                      </div>
                   )
               })}
            </div>
        )
    }
}