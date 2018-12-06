import React from "react";
import "./style.css";
import image from "../images/student.png";
import BookCard from "../components/Books/BookCard";
import { Card, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StudentCard = ({ showBooksHandler, books }) => (
  <Card onClick={showBooksHandler} as={Link} to="/books">
    <Image src={image} />
    <Card.Content>
      <Card.Header>User</Card.Header>
    </Card.Content>
    <Route path="/books" render={() => <BookCard books={books} />} />
  </Card>
);

export default StudentCard;
