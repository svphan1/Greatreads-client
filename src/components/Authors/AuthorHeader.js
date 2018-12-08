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
    const { fetchAuthors, filterAuthors } = this.props;
    return (
      <React.Fragment>
        <Message warning>
          <Message.Header>Favorite Authors</Message.Header>
        </Message>
        <Button content="Filter Authors" basic onClick={filterAuthors} />
        <Button content="Add Author" className="addBtn" basic onClick={this.toggleHidden} />
        {!this.state.isHidden && (
          <AuthorAddForm
            fetchAuthors={fetchAuthors}
            toggleHidden={this.toggleHidden}
          />
        )}
      </React.Fragment>
    );
  }
}

export default AuthorHeader;
