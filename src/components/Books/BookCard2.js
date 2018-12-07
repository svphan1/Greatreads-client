import React, { Component } from "react";
import BookHeader from "./BookHeader";
import { Card, Icon, Image, Divider, Message } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

class BookCard2 extends Component {

  state = {
    books: []
  };

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books })
      })
  };

  componentDidMount() {
    this.fetchBooks();
  }

  bookList = () => {
    return this.state.books.map((book, id) => {
      return (
        <Card style={style.cardWidth} key={id}>
          <Image
            floated="left"
            size="small"
            src={book.coverUrl}
            className="authorbook"
          />
          <Card.Content>
            <Card.Header>{book.title}</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Authors: {book.title}</Card.Description>{" "}
              <br />
              <Card.Description>Genre: {book.genre}</Card.Description> <br />
              <Card.Description>
                Description: {book.description}
              </Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a href="/">
              <Icon name="edit" float="right" />
              Edit
            </a>
            <a href="/">
              <Icon name="delete" float="right" />
              Delete Book
            </a>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    
console.log("dis books", this.state.books)
    
    return (
      <React.Fragment>
        <BookHeader />
        {this.state.books ? <section>{this.bookList}</section> : null}
      </React.Fragment>
    );
  }
}

export default BookCard2;
