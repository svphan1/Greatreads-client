import React from 'react';
import { Message, Button } from 'semantic-ui-react';

const AuthorHeader = () => (
  <React.Fragment>
    <Message warning>
      <Message.Header>Favorite Authors</Message.Header>
    </Message>
    <Button content='Add Author' basic />
  </React.Fragment>
);

export default AuthorHeader;
