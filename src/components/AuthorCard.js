import React from 'react';
import "./style.css";
import image from '../images/authors.jpg';
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = () => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>Authors</Card.Header>
    </Card.Content>
  </Card>
)

export default BookCard;