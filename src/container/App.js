import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BookCard from "../components/Books/BookCard";
import StudentsCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Message } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    authors: [],
    showCardsStudent: true,
    showCardsTeacher: true
  };

  componentDidMount(){
    Promise.all([
        fetch('http://localhost:3000/books'),
        fetch('http://localhost:3000/authors')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        books: data1.books, 
        authors: data2.authors
    }));
  } 

  showBooksHandler = () => {
    const doesShow = this.state.showCardsStudent;
    this.setState({
      showCardsStudent: !doesShow
    })
    console.log(this.state.showStudent);
  };

  deleteBook = (index) => {
    const currentList = this.state.books
    currentList.splice(index, 1);
    this.setState({ currentList: currentList });
    console.log('delete', this.state.books)
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar 
          books={this.state.books}
          authors={this.state.authors}
          showBooksHandler={this.showBooksHandler}
          deleteBook={this.deleteBook} />

          {this.state.showCardsStudent ? (
            <div>
              <Message warning>
                <Message.Header>Welcome to Greatreads!</Message.Header>
                <p>Please choose your login</p>
              </Message>
              <StudentsCard
                showBooksHandler={this.showBooksHandler}
                books={this.state.books}
              />
              <TeacherCard 
              showBooksHandler={this.showBooksHandler} 
              books={this.state.books}  />
            </div>
          ) : (
            <Message warning>
                <Message.Header>My Bookshelf</Message.Header>
                <p>Add Books</p>
              </Message>
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;