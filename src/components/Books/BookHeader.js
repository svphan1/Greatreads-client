import React from "react";
import { Message, Button } from "semantic-ui-react";

const BookHeader = () => (
  <React.Fragment>
    <Message warning>
      <Message.Header>My Bookshelf</Message.Header>
    </Message>
    <Button content='Add Book' basic />
  </React.Fragment>
);

export default BookHeader;
