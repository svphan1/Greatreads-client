import React from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

const AuthorCard = ({ authors }) => {
    return authors.map((author, id) => {
      return (
        <Card style={style.cardWidth} key={id}>
          <Image floated="left" size="small" src={author.coverUrl} />
          <Card.Content>
            <Card.Header>{author.firstName} {author.lastName}</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Authors: {author.firstName}</Card.Description> <br />
              <Card.Description>
                {author.biography}
              </Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="info" float="right" />
              Details
            </a>
          </Card.Content>
        </Card>
      );
    });
};

export default AuthorCard;
