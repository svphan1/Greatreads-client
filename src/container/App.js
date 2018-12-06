import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import BookCard from "../components/Books/BookCard";
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

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/books"),
      fetch("http://localhost:3000/authors")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          books: data1.books,
          authors: data2.authors
        })
      );
  }

  showBooksHandler = () => {
    const doesShow = this.state.showUserCards;
    this.setState({
      showUserCards: !doesShow
    });
  };

  deleteBook = (e) => {
    e.preventDefault()
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar
            books={this.state.books}
            authors={this.state.authors}
            showBooksHandler={this.showBooksHandler}
            deleteBook={this.deleteBook}
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
            </div> ) : null }
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
