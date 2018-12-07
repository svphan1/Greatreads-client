import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import BookHeader from "./BookHeader";

class BookAddForm extends Component {
  state = {
    title: "",
    authors: "",
    description: "",
    coverUrl: ""
  };
  // handleChange = (e, { value }) => this.setState({ value })
  titleListener = event => {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  };

  authorsListener = event => {
    this.setState({ authors: event.target.value });
    console.log(this.state.authors);
  };

  descriptionListener = event => {
    this.setState({ description: event.target.value });
    console.log(this.state.description);
  };

  coverUrlListener = event => {
    this.setState({ coverUrl: event.target.value });
    console.log(this.state.coverUrl);
  };

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Book Name"
            placeholder="Book name"
            onChange={this.titleListener}
          />
          <Form.Input
            fluid
            label="Authors"
            placeholder="Author name"
            onChange={this.authorsListener}
          />
        </Form.Group>
        <Form.TextArea
          label="Description"
          placeholder="Book description..."
          onChange={this.descriptionListener}
        />
        <Form.Input
          fluid
          label="Image Url"
          placeholder="Image Url"
          onChange={this.coverUrlListener}
        />
        <Form.Button>Add Book</Form.Button>
      </Form>
    );
  }
}

export default BookAddForm;
