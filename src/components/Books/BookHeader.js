import React, { Component } from "react";
import { Message, Button } from "semantic-ui-react";
import BookAddForm from "./BookAddForm";

class BookHeader extends Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { fetchBooks } = this.props;
    return (
      <React.Fragment>
        <Message warning>
          <Message.Header>My Bookshelf</Message.Header>
        </Message>
        <Button content="Add Book" basic onClick={this.toggleHidden} />
        {!this.state.isHidden && <BookAddForm fetchBooks={fetchBooks} toggleHidden={this.toggleHidden}/>}
      </React.Fragment>
    );
  }
}

export default BookHeader;
