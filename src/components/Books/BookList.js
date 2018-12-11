import React, { Component } from "react";
import BookCard from "./BookCard";
import BookHeader from "./BookHeader";

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

  render() {
    return (
      <div>
        <BookHeader
          filterBooks={this.filterBooks}
          fetchBooks={this.fetchBooks}
        />
        {this.state.books.map(book => (
          <BookCard book={book} key={book.id} fetchBooks={this.fetchBooks} />
        ))}
      </div>
    );
  }
}

export default BookList;
