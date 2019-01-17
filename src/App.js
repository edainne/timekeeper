import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navbar";
import Page from "./components/page";
class App extends Component {
  state = {
    name: "Edainne",
    age: "26",
    location: "Lakewood, WA"
  };
  render() {
    return (
      <div className="App">
        <NavigationBar userName={this.state.name} component={this.state} />
        <Page
          userName={this.state.name}
          userAge={this.state.age}
          userLocation={this.state.location}
        />
      </div>
    );
  }
}

export default App;
