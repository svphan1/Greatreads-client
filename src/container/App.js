import React, { Component } from "react";
import NavBar from "../components/NavBars/NavBar";
import NavBarMain from "../components/NavBars/NavBarMain";
import BookAddForm from "../components/Books/BookAddForm";
import BookList from "../components/Books/BookList";
import MainUserCard from "../components/Users/MainUserCard";
import Home from "../components/Users/Home";
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
    const id = e.target.id
    console.log(e.target.id)
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      }
    })
    .then(this.fetchBooks);
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
          <Route exact path="/" component={Home}/>
          {/* {this.state.showUserCards ? (
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
          ) : null} */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
