import React, { Component } from "react";
import BookCard2 from "./BookCard2";

class BookList extends Component {
  state = {
    books: []
  };

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books });
      });
  };

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    return (
      <div>
        {this.state.books.map(book => (
          <BookCard2 key={book.id} book={book} fetchBooks={this.fetchBooks} />
        ))}
      </div>
    );
  }
}

export default BookList;
