import React from 'react';
import "../style.css";
import image from '../../assets/guest.png';
import { Card, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GuestUserCard = ({changeNavBar}) => (
  <Card as={ Link } to="/books" className="users" onClick={changeNavBar}>
    <Image src={ image } />
    <Card.Content>
      <Card.Header>Guest</Card.Header>
    </Card.Content>
  </Card>
)

export default GuestUserCard;