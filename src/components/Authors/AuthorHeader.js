import React, { Component } from "react";
import { Message, Button } from "semantic-ui-react";
import AuthorAddForm from "./AuthorAddForm";

class AuthorHeader extends Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { fetchAuthors } = this.props;
    return (
      <React.Fragment>
        <Message warning>
          <Message.Header>Favorite Authors</Message.Header>
        </Message>
        <Button content="Add Author" basic onClick={this.toggleHidden} />
        {!this.state.isHidden && <AuthorAddForm fetchAuthors={fetchAuthors} />}
      </React.Fragment>
    );
  }
}

export default AuthorHeader;
