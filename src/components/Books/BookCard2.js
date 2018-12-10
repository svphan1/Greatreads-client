import React, { Component } from "react";

class BookCard2 extends Component {
  render() {
    return (
      <Card style={style.cardWidth} key={book.id}>
        <Image
          floated="left"
          size="small"
          src={book.coverUrl}
          className="authorbook"
        />
        <Card.Content>
          <Card.Header className="card-header">{book.title}</Card.Header>
          <Divider />
          <Card.Content>
            <Card.Description>Author(s): {book.authors}</Card.Description>{" "}
            <br />
            <Card.Description>Genre: {book.genre}</Card.Description> <br />
            <Card.Description>
              Description: <br />
              {book.description}
            </Card.Description>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
          <BookEditModal2
            book={book}
            show={this.state.show}
            hideModal={this.hideModal}
          />
          <a className="edit" onClick={this.showModal} id={book.id}>
            <Icon name="edit" float="right" />
            Edit
          </a>
          <a href="/" className="delete" onClick={deleteBook} id={book.id}>
            <Icon name="delete" float="right" />
            Delete Book
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default BookCard2;
