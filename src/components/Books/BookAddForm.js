import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class BookAddForm extends Component {
  state = {}

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
        <Form.Button>Add Book</Form.Button>
      </Form>
    )
  }
}

export default BookAddForm