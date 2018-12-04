import React from 'react';
import "./style.css";
import image from '../images/books.jpg';
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = (props) => (
  <Card onclick={props.clicked}>
    <Image src={image} />
    <Card.Content>
      <Card.Header>Books</Card.Header>
    </Card.Content>
  </Card>
)

export default BookCard;