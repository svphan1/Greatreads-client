import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import Home from "../components/Users/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    authors: []
  };

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books });
      });
  };

  fetchAuthors = () => {
    fetch("http://localhost:3000/authors")
      .then(response => response.json())
      .then(data => {
        this.setState({ authors: data.authors });
      });
  };

  componentDidMount() {
    this.fetchBooks();
    this.fetchAuthors();
  }

  showBooksHandler = () => {
    this.setState({
      showUserCards: false
    });
  };

  deleteBook = e => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      }
    }).then(this.fetchBooks);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar
            books={this.state.books}
            authors={this.state.authors}
            fetchBooks={this.fetchBooks}
            deleteBook={this.deleteBook}
            showBooksHandler={this.showBooksHandler}
          />
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
