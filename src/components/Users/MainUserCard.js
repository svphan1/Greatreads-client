import React from "react";
import "../style.css";
import image from "../../assets/son1.png";
import { Card, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainUserCard = ({ changeNavBar }) => (
  <Card as={ Link } to="/books" className="user2" onClick={changeNavBar}>
    <Image src={ image } />
    <Card.Content>
      <Card.Header>Son</Card.Header>
    </Card.Content>
  </Card>
);

export default MainUserCard;
