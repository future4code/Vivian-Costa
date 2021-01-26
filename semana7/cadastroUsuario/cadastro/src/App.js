import React from "react";
import { RegisterPage } from "./pages/RegisterPage";
import { UsersListPage } from "./pages/UsersListPage";

export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        {this.state.page ? <RegisterPage /> : <UsersListPage />}
        <button onClick={this.changePage}>Troca de página</button>
      </div>
    );
  }
}
