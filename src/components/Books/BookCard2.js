import React, { Component } from "react";
import BookEditModal from "./BookEditModal/BookEditModal";
import { Card, Icon, Image, Divider, Button } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

class BookCard2 extends Component {
  state = {
    show: false
  };

  showModal = e => {
    e.preventDefault();
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  deleteBook = e => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      }
    }).then(this.props.fetchBooks);
  };
  
  render() {
    const { book, fetchBooks } = this.props;
    return (
      <Card style={style.cardWidth} key={this.props.book.id}>
        <Image
          floated="left"
          size="small"
          src={this.props.book.coverUrl}
          className="authorbook"
        />
        <Card.Content>
          <Card.Header className="card-header">{book.title}</Card.Header>
          <Divider />
          <Card.Content>
            <Card.Description>Author(s): {book.authors}</Card.Description>{" "}
            <br />
            <Card.Description>Genre: {book.genre}</Card.Description> <br />
            <Card.Description>
              Description: <br />
              {book.description}
            </Card.Description>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
          <BookEditModal
            book={book}
            show={this.state.show}
            hideModal={this.hideModal}
          />
          <a className="edit" onClick={this.showModal} id={book.id}>
            <Icon name="edit" float="right" />
            Edit
          </a>
          <a href="/" className="delete" onClick={this.deleteBook} id={book.id}>
            <Icon name="delete" float="right" />
            Delete Book
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default BookCard2;
