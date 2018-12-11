import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import Home from "../components/Users/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  changeNavBar = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          {this.state.isLoggedIn ? <NavBar /> : <NavBarMain />}
          <Route
            exact
            path="/"
            render={() => <Home changeNavBar={this.changeNavBar} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
