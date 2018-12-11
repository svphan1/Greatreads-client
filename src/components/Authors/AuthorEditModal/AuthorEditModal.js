import React, { Component } from "react";
import "./Modal.css";
import { Card, Image, Divider, Form } from "semantic-ui-react";

class AuthorEditModal extends Component {
  state = {
    firstName: "",
    lastName: "",
    biography: "",
    portraitUrl: ""
  };

  componentDidMount() {
    if (this.props.author) {
      this.setState(
        {
          firstName: this.props.author.firstName,
          lastName: this.props.author.lastName,
          biography: this.props.author.biography,
          portraitUrl: this.props.author.portraitUrl
        }
      );
    }
  }

  firstNameListener = e => {
    this.setState({ firstName: e.target.value });
    console.log(this.state.firstName);
  };

  lastNameListener = e => {
    this.setState({ lastName: e.target.value });
    console.log(this.state.lastName);
  };

  biographyListener = e => {
    this.setState({ biography: e.target.value });
    console.log(this.state.biography);
  };

  portraitUrlListener = e => {
    this.setState({ portraitUrl: e.target.value });
    console.log(this.state.portraitUrl);
  };

  updateAuthor = e => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`http://localhost:3000/authors/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        authors: this.state.authors,
        description: this.state.description,
        coverUrl: this.state.coverUrl
      })
    }).then();
  };

  render() {
    const { author, hideModal, show, children } = this.props;

    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    const style = {
      cardWidth: {
        width: "50%"
      }
    };

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <Card style={style.cardWidth}>
            <Image floated="left" size="small" className="authorbook" />
            <Card.Content>
              <Card.Header>First Name</Card.Header>
              <input
                value={this.state.firstName}
                onChange={this.firstNameListener}
                placeholder="First Name"
              />
              <Card.Header>First Name</Card.Header>
              <input
                value={this.state.lastName}
                onChange={this.lastNameListener}
                placeholder="Last Name"
              />
              <Divider />
              <Card.Content>
                <Card.Description>Biography:</Card.Description> <br />
                <input
                  value={this.state.biography}
                  onChange={this.biographyListener}
                  placeholder="Biography"
                />
                <Card.Description>Portrait Url:</Card.Description> <br />
                <input
                  value={this.state.portraitUrl}
                  onChange={this.portraitUrlListener}
                  placeholder="Portrait Url"
                />
              </Card.Content>
            </Card.Content>
            <Card.Content extra>
              <button onClick={hideModal}>Close</button>
              <button onClick={this.updateAuthor}>Update</button>
            </Card.Content>
          </Card>
        </section>
      </div>
    );
  }
}

export default AuthorEditModal;
