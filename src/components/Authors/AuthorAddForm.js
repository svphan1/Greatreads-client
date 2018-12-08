import React, { Component } from "react";
import { Form, Message } from "semantic-ui-react";
import "../style.css";

class AuthorAddForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    biography: "",
    portraitUrl: ""
  };

  firstNameListener = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameListener = e => {
    this.setState({ lastName: e.target.value });
  };

  biographyListener = e => {
    this.setState({ biography: e.target.value });
  };

  portraitUrlListener = e => {
    this.setState({ portraitUrl: e.target.value });
  };

  postAuthor = e => {
    e.preventDefault();

    fetch("http://localhost:3000/authors", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        biography: this.state.biography,
        portraitUrl: this.state.portraitUrl
      })
    })
      .then(this.props.fetchAuthors)
      .then(this.props.toggleHidden);
  };

  render() {
    const { fetchAuthors } = this.props;
    return (
      <Form onSubmit={this.postAuthor}>
        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="First name"
            placeholder="First name"
            onChange={this.firstNameListener}
          />
          <Form.Input
            required
            fluid
            label="Last name"
            placeholder="Last name"
            onChange={this.lastNameListener}
          />
        </Form.Group>
        <Form.TextArea
          label="Biography"
          placeholder="Biography of author..."
          onChange={this.biographyListener}
        />
        <Form.Input
          fluid
          label="Image Url"
          placeholder="Image Url"
          onChange={this.portraitUrlListener}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default AuthorAddForm;
