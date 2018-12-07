import React, { Component } from "react";
import BookHeader from "./BookHeader";
import BookCard2 from "./BookCard2";

class BookList extends Component {
  state = {
    bookList: []
  };

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        this.setState({ bookList: data.books })
      })
  };

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    return (
      <React.Fragment>
        <BookHeader />
        {this.state.bookList.map(book => (
          <BookCard2 
            key={book.id} 
            book={book} 
            fetchBooks={this.fetchBooks} 
          />
        ))}
        />
      </React.Fragment>
    );
  }
}

export default BookList;
