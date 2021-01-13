import React from "react";
import axios from 'axios'
import { baseUrl, axiosConfig } from '../parametros'

export class UsersListPage extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get(baseUrl, axiosConfig)
    .then((res) => {
      this.setState({users: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  deleteUser = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.getAllUsers()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h2>Lista de usuários</h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <button onClick={() => {this.deleteUser(user.id)}}>X</button>
            </div>
          )
        })}
      </div>
    );
  }
}
