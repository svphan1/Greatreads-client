import React, { Component } from "react";
import "./Modal.css";
import { Card, Image, Divider, Form, TextArea } from "semantic-ui-react";

class BookEditModal2 extends Component {
  state = {
    title: "",
    genre: "",
    authors: "",
    description: "",
    coverUrl: ""
  };

  titleListener = e => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  };

  genreListener = e => {
    this.setState({ genre: e.target.value });
    console.log(this.state.genre);
  };

  authorsListener = e => {
    this.setState({ authors: e.target.value });
    console.log(this.state.authors);
  };

  descriptionListener = e => {
    this.setState({ description: e.target.value });
    console.log(this.state.description);
  };

  coverUrlListener = e => {
    this.setState({ coverUrl: e.target.value });
    console.log(this.state.coverUrl);
  };

  updateBook = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/books/`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // id: this.props.location.state.currentBook.id,
        title: this.state.title,
        genre: this.state.genre,
        authors: this.state.authors,
        description: this.state.description,
        coverUrl: this.state.coverUrl
      })
    })
      .then(data => console.log(data))
      .then(window.location.replace("http://localhost:3000/books/"));
  };

  render() {
    const { book, hideModal, show, children } = this.props;

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
              <Card.Header>Title</Card.Header>
              <TextArea
                onChange={this.titleListener}
                autoHeight
                placeholder="Title"
              />
              <Divider />
              <Card.Content>
                <Card.Description>Authors:</Card.Description> <br />
                <TextArea
                  onChange={this.authorsListener}
                  autoHeight
                  placeholder="Authors"
                />
                <Card.Description>Genre:</Card.Description> <br />
                <TextArea
                  onChange={this.genreListener}
                  autoHeight
                  placeholder="Genre"
                />
                <Card.Description>Description:</Card.Description> <br />
                <TextArea
                  onChange={this.descriptionListener}
                  autoHeight
                  placeholder="Description"
                />
                <Card.Description>CoverUrl:</Card.Description> <br />
                <TextArea
                  onChange={this.coverUrlListener}
                  autoHeight
                  placeholder="Cover Url"
                />
              </Card.Content>
            </Card.Content>
            <Card.Content extra>
              <button onClick={hideModal}>Close</button>
              <button onClick={this.updateBook}>Update</button>
            </Card.Content>
          </Card>
        </section>
      </div>
    );
  }
}

export default BookEditModal2;
