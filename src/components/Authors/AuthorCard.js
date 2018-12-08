import React from "react";
import AuthorHeader from "./AuthorHeader";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import BookAddForm from "../Books/BookAddForm";

const style = {
  cardWidth: {
    width: "50%"
  }
};

const AuthorCard = ({ authors, fetchAuthors, deleteAuthor }) => {
  const authorList = authors => {
    return authors.map(author => {
      return (
        <Card style={style.cardWidth} key={author.id}>
          <Image
            floated="left"
            size="small"
            src={author.portraitUrl}
            className="authorbook"
          />
          <Card.Content>
            <Card.Header>
              {author.firstName} {author.lastName}
            </Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Biography: {author.biography}</Card.Description>{" "}
              <br />
              <Card.Description>Books: {author.firstName}</Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a href="/" className="edit">
              <Icon name="edit" float="right" />
              Edit
            </a>
            <a href="/" className="delete" onClick={deleteAuthor} id={author.id}>
              <Icon name="delete" float="right" />
              Delete
            </a>
          </Card.Content>
        </Card>
      );
    });
  };
  return (
    <React.Fragment>
      <AuthorHeader fetchAuthors={fetchAuthors} />
      <section>{authorList(authors)}</section>
    </React.Fragment>
  );
};

export default AuthorCard;
