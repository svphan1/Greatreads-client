import React from "react";
import "./style.css";
import image from "../images/student.png";
import BookCard from "../components/Books/BookCard";
import { Card, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StudentCard = ({ studentHandler, books }) => (
  <Router>
    <Card onClick={studentHandler} as={Link} to="/books">
      <Image src={image} />
      <Card.Content>
        <Card.Header>Students</Card.Header>
      </Card.Content>
    </Card>
    <Route path="/books" render={() => <BookCard books={books} />} />
  </Router>
);

export default StudentCard;
