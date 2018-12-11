import React, { Component } from "react";
import AuthorEditModal from "./AuthorEditModal/AuthorEditModal";
import { Card, Icon, Image, Divider, Button } from "semantic-ui-react";

const style = {
  cardWidth: {
    width: "50%"
  }
};

class AuthorCard extends Component {
  state = {
    show: false
  };

  showModal = e => {
    e.preventDefault();
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  deleteAuthor = e => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`http://localhost:3000/authors/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      }
    }).then(this.props.fetchAuthors);
  };

  render() {
    const { author, fetchAuthors } = this.props;
    return (
      <Card style={style.cardWidth} id={this.props.author.id}>
        <Image
          floated="left"
          size="small"
          src={this.props.author.portraitUrl}
          className="authorbook"
        />
        <Card.Content>
          <Card.Header className="card-header">
            {author.firstName} {author.lastName}
          </Card.Header>
          <Divider />
          <Card.Content>
            <Card.Description>
              <h4>About:</h4>
              {author.biography}
            </Card.Description>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
          <AuthorEditModal
            author={author}
            show={this.state.show}
            hideModal={this.hideModal}
          />
          <a className="edit" onClick={this.showModal}>
            <Icon name="edit" float="right" />
            Edit
          </a>
          <a
            href="/"
            className="delete"
            onClick={this.deleteAuthor}
            id={author.id}
          >
            <Icon name="delete" float="right" />
            Delete Author
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default AuthorCard;
