import React from "react";
import { Card, Icon, Image, Divider, Message } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

const BookCard = ({ books, deleteBook }) => {
    return books.map((book, id) => {
      return (
        <Card style={style.cardWidth} key={id}>
          <Image floated="left" size="small" src={book.coverUrl} />
          <Card.Content>
            <Card.Header>{book.title}</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Authors: {book.title}</Card.Description> <br />
              <Card.Description>
                Description: {book.description}.
              </Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="edit" float="right" />
              Edit
            </a>
            <a>
              <Icon name="delete" float="right" onClick={deleteBook}/>
              Delete Book
            </a>
          </Card.Content>
        </Card>
      );
    });
};

export default BookCard;
