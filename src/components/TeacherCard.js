import React from 'react';
import "./style.css";
import image from '../images/teacher.png';
import BookCard from "../components/Books/BookCard";
import { Card, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const TeacherCard = ({ showBooksHandler, books }) => (
  <Card onClick={ showBooksHandler } as={Link} to="/books">
    <Image src={image} />
    <Card.Content>
      <Card.Header>Guest</Card.Header>
    </Card.Content>
    <Route path="/books" render={() => <BookCard books={books} />} />
  </Card>
)

export default TeacherCard;