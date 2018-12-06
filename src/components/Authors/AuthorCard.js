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
        <Card style={ style.cardWidth } key={ id }>
          <Image floated="left" size="small" src={ author.portraitUrl } />
          <Card.Content>
            <Card.Header>{ author.firstName } { author.lastName }</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>
                { author.biography }
              </Card.Description> <br />
              <Card.Description>Books: { author.firstName }</Card.Description> 
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="edit" float="right" />
              Edit
            </a>
            <a>
              <Icon name="delete" float="right" />
              Delete
            </a>
          </Card.Content>
        </Card>
      );
    });
};

export default AuthorCard;
