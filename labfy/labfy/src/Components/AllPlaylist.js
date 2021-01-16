import React from 'react';
import axios from 'axios'
import {baseUrl, axiosConfig} from '../parametros'

export class AllPlaylist extends React.Component {
    state = {
        all: []
    }

    componentDidMount = () => {
        this.getAllPlaylist()
    }

    getAllPlaylist = () => {
        axios.get(baseUrl, axiosConfig)
        .then((res) => {
            this.setState({all: res.data.result.list})
        })
        .catch((err) => {
        })
    }

    deletePlaylist = (Id)  => {
        console.log(`${baseUrl}/: ${Id}`)
        axios.delete(`${baseUrl}/ ${Id}`, axiosConfig)
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
                        <button onClick={() => {this.deletePlaylist(allplay.Id)}}>X</button>
                      </div>
                   )
               })}
            </div>
        )
    }
}