import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import '../style.css';

class AuthorAddForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.TextArea label='Biography' placeholder='Biography of author...' />
        <Form.Button>Add Author</Form.Button>
      </Form>
    )
  }
}

export default AuthorAddForm;