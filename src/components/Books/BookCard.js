import React from 'react';
import BookHeader from './BookHeader';
import BookAddForm from './BookAddform';
import { Card, Icon, Image, Divider, Message } from 'semantic-ui-react';

const style = {
  cardWidth: {
    width: '50%'
  }
};

const BookCard = ({ books, deleteBook }) => {
  const bookList = books => {
    return books.map((book, id) => {
      return (
        <Card style={style.cardWidth} key={id}>
          <Image
            floated='left'
            size='small'
            src={book.coverUrl}
            className='authorbook'
          />
          <Card.Content>
            <Card.Header>{book.title}</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Authors: {book.title}</Card.Description> <br />
              <Card.Description>
                Description: {book.description}.
              </Card.Description>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <a href='/'>
              <Icon name='edit' float='right' />
              Edit
            </a>
            <a href='/'>
              <Icon name='delete' float='right' onClick={deleteBook} />
              Delete Book
            </a>
          </Card.Content>
        </Card>
      );
    });
  };
  return (
    <React.Fragment>
      <BookHeader />
      <BookAddForm />
      <section>{bookList(books)}</section>
    </React.Fragment>
  );
};

export default BookCard;
