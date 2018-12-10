import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import Home from "../components/Users/Home";
import BookEditModal2 from "../components/Books/BookEditModal/BookEditModal2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    authors: [],
    isLoggedIn: false
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

  filterBooks = () => {
    this.setState({
      books: this.state.books.sort((a, b) => {
        let nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      })
    });
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
              books={this.state.books}
              authors={this.state.authors}
              fetchBooks={this.fetchBooks}
              fetchAuthors={this.fetchAuthors}
              deleteBook={this.deleteBook}
              deleteAuthor={this.deleteAuthor}
              filterBooks={this.filterBooks}
              filterAuthors={this.filterAuthors}
              showModal={this.showModal}
            />
          ) : (
            <NavBarMain
              books={this.state.books}
              authors={this.state.authors}
              fetchBooks={this.fetchBooks}
              fetchAuthors={this.fetchAuthors}
              deleteBook={this.deleteBook}
              deleteAuthor={this.deleteAuthor}
              filterBooks={this.filterBooks}
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
