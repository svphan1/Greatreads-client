import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class BookAddForm extends Component {
  state = {
    title: "",
    genre: "",
    authors: "",
    description: "",
    coverUrl: ""
  };

  titleListener = e => {
    this.setState({ title: e.target.value })
    console.log('title', this.state.title)
  };

  genreListener = e => {
    this.setState({ genre: e.target.value })
    console.log('genre', this.state.genre)
  };

  authorsListener = e => {
    this.setState({ authors: e.target.value })
    console.log('author',this.state.authors)
  };

  descriptionListener = e => {
    this.setState({ description: e.target.value })
    console.log('description',this.state.description)
  };

  coverUrlListener = e => {
    this.setState({ coverUrl: e.target.value })
    console.log('coverUrl',this.state.coverUrl)
  };

  postBook = e => {
    e.preventDefault()

    fetch("http://localhost:3000/books", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        coverUrl: this.state.coverUrl
      })
  })
}

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            label="Book Name"
            placeholder="Book name"
            onChange={this.titleListener}
          />
          <Form.Input
            required
            fluid
            label="Genre"
            placeholder="Genre"
            onChange={this.genreListener}
          />
          <Form.Input
            required
            fluid
            label="Authors"
            placeholder="Author name"
            onChange={this.authorsListener}
          />
        </Form.Group>
        <Form.TextArea
          required
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
