import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import BookAddForm from "../components/Books/BookAddForm";
import BookList from "../components/Books/BookList";
import MainUserCard from "../components/Users/MainUserCard";
import GuestUserCard from "../components/Users/GuestUserCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Message } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    authors: [],
    showUserCards: true
  };

  // componentDidMount() {
  //   Promise.all([
  //     fetch("http://localhost:3000/books"),
  //     fetch("http://localhost:3000/authors")
  //   ])
  //     .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  //     .then(([data1, data2]) =>
  //       this.setState({
  //         books: data1.books,
  //         authors: data2.authors
  //       })
  //     );
  // }

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books })
      })
  };

  fetchAuthors = () => {
    fetch("http://localhost:3000/authors")
      .then(response => response.json())
      .then(data => {
        this.setState({ authors: data.authors })
      })
  };

  componentDidMount() {
    this.fetchBooks()
    this.fetchAuthors()
  };

  showBooksHandler = () => {
    this.setState({
      showUserCards: false
    });
  };

  deleteBook = e => {
      e.preventDefault();
  
      fetch("http://localhost:3000/books", {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/JSON"
        },
        body: JSON.stringify({
          title: this.state.title,
          genre: this.state.genre,
          authors: this.state.authors,
          description: this.state.description,
          coverUrl: this.state.coverUrl
        })
      }).then(this.props.fetchBooks);
    };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar
            books={this.state.books}
            authors={this.state.authors}
            fetchBooks={this.fetchBooks}
            showBooksHandler={this.showBooksHandler}
          />
          {this.state.showUserCards ? (
            <div>
              <Message warning>
                <Message.Header>Welcome to Greatreads!</Message.Header>
                <p>Please choose your login</p>
              </Message>
              <MainUserCard
                showBooksHandler={this.showBooksHandler}
                books={this.state.books}
              />
              <GuestUserCard
                showBooksHandler={this.showBooksHandler}
                books={this.state.books}
              />
            </div>
          ) : null}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
