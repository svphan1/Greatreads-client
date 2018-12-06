import React from "react";
import "../style.css";
import image from "../../images/son1.png";
import { Card, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainUserCard = ({ showBooksHandler, books }) => (
  <Card onClick={ showBooksHandler } as={ Link } to="/books" className="user1">
    <Image src={ image } />
    <Card.Content>
      <Card.Header>Son</Card.Header>
    </Card.Content>
  </Card>
);

export default MainUserCard;
