import React from 'react';
import "./style.css";
import image from '../images/teacher.png';
import { Card, Image } from 'semantic-ui-react';

const TeacherCard = ({ teacherHandler }) => (
  <Card onClick={ teacherHandler }>
    <Image src={image} />
    <Card.Content>
      <Card.Header>Teacher</Card.Header>
    </Card.Content>
  </Card>
)

export default TeacherCard;