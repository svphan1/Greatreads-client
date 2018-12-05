import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BookCard from "../components/Books/BookCard";
import StudentsCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Message } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    books: '',
    authors: '',
    showMainCards: true
  };

  // componentDidMount() {
  //   axios.get("http://localhost:3000/books")
  //   .then(response => {
  //     this.setState({ books: response.data.books });
  //   })
  //   .then(this.getAuthor)
  // }

  // getAuthors = () => {
  //   fetch("http://localhost:3000/authors")
  //   .then(response => {
  //   this.setState({ authors: response.data.authors });
  //   });
  // }

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

  studentHandler = () => {
    const doesShow = this.state.showMainCards;
    this.setState({
      showMainCards: !doesShow
    });
    console.log(this.state.showStudent);
  };

  teacherHandler = () => {
    const doesShow = this.state.showMainCards;
    this.setState({
      showMainCards: !doesShow
    });
  };

  render() {
    console.log("books", this.state.books);
    console.log("authors", this.state.authors);
    return (
      <Router>
        <React.Fragment>
          <NavBar 
          books={this.state.books}
          authors={this.state.authors} />

          {this.state.showMainCards ? (
            <div>
              <Message warning>
                <Message.Header>Welcome to Greatreads!</Message.Header>
                <p>Please choose your login</p>
              </Message>
              <StudentsCard
                studentHandler={this.studentHandler}
                books={this.state.books}
              />
              <TeacherCard teacherHandler={this.teacherHandler} />
            </div>
          ) : (
            <BookCard books={this.state.books} />
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
