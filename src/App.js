import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navbar";
class App extends Component {
  state = {
    name: "Edainne"
  };
  render() {
    return (
      <div className="App">
        <NavigationBar userName={this.state.name} />
      </div>
    );
  }
}

export default App;
