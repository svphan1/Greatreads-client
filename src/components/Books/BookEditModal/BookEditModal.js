import React, { Component } from "react";
import "./Modal.css";
import { Card, Image, Divider, Form } from "semantic-ui-react";

class BookEditModal2 extends Component {
  state = {
    title: "",
    genre: "",
    authors: "",
    description: "",
    coverUrl: ""
  };

  componentDidMount() {
    if (this.props.book) {
      this.setState(
        {
          id: this.props.book.id,
          title: this.props.book.title,
          genre: this.props.book.genre,
          authors: this.props.book.authors,
          description: this.props.book.description,
          coverUrl: this.props.book.coverUrl
        },
        () => {
          console.log("state", this.state);
        }
      );
    }
    console.log(this.props.book.title);
  }

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
    const id = e.target.id;
    fetch(`http://localhost:3000/books/${id}`, {
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
              <input
                value={this.state.title}
                onChange={this.titleListener}
                placeholder="Title"
                id={book.id}
              />
              <Divider />
              <Card.Content>
                <Card.Description>Authors:</Card.Description> <br />
                <input
                  value={this.state.authors}
                  onChange={this.authorsListener}
                  placeholder="Authors"
                />
                <Card.Description>Genre:</Card.Description> <br />
                <input
                  value={this.state.genre}
                  onChange={this.genreListener}
                  placeholder="Genre"
                />
                <Card.Description>Description:</Card.Description> <br />
                <input
                  value={this.state.description}
                  onChange={this.descriptionListener}
                  placeholder="Description"
                />
                <Card.Description>CoverUrl:</Card.Description> <br />
                <input
                  value={this.state.coverUrl}
                  onChange={this.coverUrlListener}
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
