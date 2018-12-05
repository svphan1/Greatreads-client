import React from "react";
import "./style.css";
import image from "../images/student.png";
import { Card, Image } from "semantic-ui-react";

const StudentCard = ({ studentHandler }) => (
  <Card onClick={ studentHandler }>
    <Image src={image} />
    <Card.Content>
      <Card.Header>Students</Card.Header>
    </Card.Content>
  </Card>
)

export default StudentCard;