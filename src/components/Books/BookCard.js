import React from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import student from '../../images/student.png';

const BookCard = () => (
  <Card>
  <Image src={student} />
  <Card.Content>
    <Card.Header>Matthew</Card.Header>
    <Card.Meta>
      <h3 className='date'>Joined in 2015</h3>
    </Card.Meta>
    <Card.Description>Genre</Card.Description>
    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='info' />
      Details
    </a>
  </Card.Content>
</Card>
)


export default BookCard;
