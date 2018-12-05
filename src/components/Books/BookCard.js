import React from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import student from "../../images/student.png";

const style = {
  cardWidth: {
    width: "50%"
  }
};

const BookCard = ({ books }) => {
  const bookList = books => {
    return books.map((book, id) => {
      return (
        <Card style={style.cardWidth}>
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
              <Icon name="info" float="right" />
              Details
            </a>
          </Card.Content>
        </Card>
      );
    });
  };
  return <div>{bookList(books)}</div>;
};

export default BookCard;
