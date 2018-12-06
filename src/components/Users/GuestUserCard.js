import React from 'react';
import "../style.css";
import image from '../../images/teacher.png';
import NavBar from "../NavBars/NavBar";
import BookCard from "../Books/BookCard";
import { Card, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GuestUserCard = ({ showBooksHandler, books }) => (
  <Card onClick={ showBooksHandler } as={ Link } to="/books" className="user2">
    <Image src={ image } />
    <Card.Content>
      <Card.Header>Guest</Card.Header>
    </Card.Content>
    <Route path="/books" render={() => <BookCard books={books} />} />
  </Card>
)

export default GuestUserCard;