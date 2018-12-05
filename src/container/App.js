import React, { Component } from "react";
import NavMenu from "../components/NavBar";
import BookCard from "../components/BookCard";
import AuthorCard from "../components/AuthorCard";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavMenu />
          <BookCard />
          <AuthorCard />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
