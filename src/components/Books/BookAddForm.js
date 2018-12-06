import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import BookHeader from './BookHeader';

class BookAddForm extends Component {
  state = {
    isHidden: true
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  };

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Book Name' placeholder='Book name' />
          <Form.Input fluid label='Author Name' placeholder='Author name' />
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Book description...' />
        <Form.Input fluid label='Image Url' placeholder='Image Url' />
        <Form.Button>Add Book</Form.Button>
      </Form>
    )
  }
}

export default BookAddForm