import React, { Component } from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";

class BookEditForm extends Component {
  render() {
    return (
      <Card style={style.cardWidth} key={book.id}>
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
          <Card.Description>Authors: {book.title}</Card.Description> <br />
          <Card.Description>Genre: {book.genre}</Card.Description> <br />
          <Card.Description>
            Description: {book.description}
          </Card.Description>
        </Card.Content>
      </Card.Content>
      <Card.Content extra>
        <a href="/" className="edit" onClick={editBook} id={book.id}>
          <Icon name="edit" float="right" />
          Edit
        </a>
        <a href="/" className="delete" onClick={deleteBook} id={book.id}>
          <Icon name="delete" float="right" />
          Delete Book
        </a>
      </Card.Content>
    </Card>
    )
  }
}

export default BookEditForm;
