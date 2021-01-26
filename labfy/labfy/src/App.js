import React from 'react';
import CreatePlaylist from './Components/CreatePlaylist';
import AddMusic from './Components/AddMusic'
import {AllPlaylist} from './Components/AllPlaylist'


export default class App extends React.Component {
  state = {
    page: true,
    page2: true
  }

  changePage = () => {
    this.setState({page: !this.state.page})
  }
  render () {
    return (
      <div>
        <button onClick={this.changePage}>Troca de Pagina</button>
        <h1>LABEFY</h1>
        {this.state.page ? <CreatePlaylist /> : <AllPlaylist /> }
        <AddMusic />
        
      </div>
    )
  }
}

