import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class BookAddForm extends Component {
  state = {
    bookList: [],
    title: "",
    genre: "",
    authors: "",
    description: "",
    coverUrl: ""
  };

  titleListener = e => {
    this.setState({ title: e.target.value });
  };

  genreListener = e => {
    this.setState({ genre: e.target.value });
  };

  authorsListener = e => {
    this.setState({ authors: e.target.value });
  };

  descriptionListener = e => {
    this.setState({ description: e.target.value });
  };

  coverUrlListener = e => {
    this.setState({ coverUrl: e.target.value });
  };

  postBook = e => {
    e.preventDefault();
    
    fetch("http://localhost:3000/books", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        authors: this.state.authors,
        description: this.state.description,
        coverUrl: this.state.coverUrl
      })
    }).then(this.props.fetchBooks);
  };

  render() {
    const { fetchBooks } = this.props;
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
        <Form.Button onClick={this.postBook}>Add Book</Form.Button>
      </Form>
    );
  }
}

export default BookAddForm;
