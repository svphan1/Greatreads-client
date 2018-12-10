import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import Home from "../components/Users/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    authors: [],
    isLoggedIn: false
  };

  fetchAuthors = () => {
    fetch("http://localhost:3000/authors")
      .then(response => response.json())
      .then(data => {
        this.setState({ authors: data.authors });
      });
  };

  componentDidMount() {
    this.fetchAuthors();
  }

  deleteAuthor = e => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`http://localhost:3000/authors/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      }
    }).then(this.fetchAuthors);
  };

  filterAuthors = () => {
    this.setState({
      authors: this.state.authors.sort((a, b) => {
        let nameA = a.firstName.toLowerCase(),
          nameB = b.firstName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      })
    });
  };

  changeNavBar = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          {this.state.isLoggedIn ? (
            <NavBar
              authors={this.state.authors}
              fetchAuthors={this.fetchAuthors}
              deleteBook={this.deleteBook}
              deleteAuthor={this.deleteAuthor}
              filterAuthors={this.filterAuthors}
            />
          ) : (
            <NavBarMain
              authors={this.state.authors}
              fetchAuthors={this.fetchAuthors}
              deleteBook={this.deleteBook}
              deleteAuthor={this.deleteAuthor}
              filterAuthors={this.filterAuthors}
            />
          )}
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
