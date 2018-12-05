import React, { Component } from "react";
import MenuExampleStackable from "../components/NavBar";
import BookCard from "../components/BookCard";
import AuthorCard from "../components/AuthorCard";
import { BrowserRouter as Router } from "react-router-rom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <MenuExampleStackable />
          <BookCard />
          <AuthorCard />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
