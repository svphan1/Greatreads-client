import React, { Component } from 'react';
import "./Modal.css";
import { Card, Image, Divider, Form, TextArea } from "semantic-ui-react";

class BookEditModal2 extends Component {
  state = {
    title: this.props.location.state.book.title,
    genre: this.props.location.state.book.genre,
    authors: this.props.location.state.book.description,
    description: this.props.location.state.book.description,
    coverUrl: this.props.location.state.book.coverURL,
    currentBook: undefined
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
    console.log(this.props.location.state.currentBook.id)

      fetch(`http://localhost:3333/books/${this.props.location.state.currentBook.id}`, {
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
        .then(window.location.replace("http://localhost:3000/books/"))
  };


  render() {
    const { books, hideModal, show, children }

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const style = {
      cardWidth: {
        width: "50%"
      }
    };
    return (
      <React.Fragment className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Card style={style.cardWidth}>
          <Image floated="left" size="small" className="authorbook" />
          <Card.Content>
            <Card.Header onClick={this.titleListener} >Title</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description onClick={this.authorsListener} >Authors:</Card.Description> <br />
              <Card.Description onClick={this.genreListener}>Genre:</Card.Description> <br />
              {/* <Form> */}
              <Card.Description onClick={this.descriptionListener} >Description:</Card.Description> <br />
                <TextArea autoHeight placeholder="Description" />
              <Card.Description onClick={this.coverUrlListener} >CoverUrl:</Card.Description> <br />
                <TextArea autoHeight placeholder="Cover Url" />
              {/* </Form> */}
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <button onClick={hideModal}>Close</button>
            <button onClick={hideModal}>Update</button>
          </Card.Content>
        </Card>
      </section>
    </React.Fragment>
    )
  }
};

export default BookEditModal2;
