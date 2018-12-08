import React from "react";
import BookHeader from "./BookHeader";
import { Card, Icon, Image, Divider } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

const BookCard = ({ books, fetchBooks, deleteBook }) => {
  const bookList = books => {
    return books.map((book) => {
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
              <Card.Description>Description: {book.description}</Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a href="/" className="edit">
              <Icon name="edit" float="right" />
              Edit
            </a>
            <a href="/" className="delete" onClick={deleteBook} id={book.id}>
              <Icon name="delete" float="right"/>
              Delete Book
            </a>
          </Card.Content>
        </Card>
      );
    });
  };
  return (
    <React.Fragment>
      <BookHeader fetchBooks={fetchBooks}/>
      <section>{bookList(books)}</section>
    </React.Fragment>
  );
};

export default BookCard;
