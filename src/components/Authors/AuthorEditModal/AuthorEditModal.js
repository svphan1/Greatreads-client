import React, { Component } from "react";
import "./AuthorModal.css";
import { Card, Image, Divider, Button } from "semantic-ui-react";

class AuthorEditModal extends Component {
  state = {
    firstName: "",
    lastName: "",
    biography: "",
    portraitUrl: ""
  };

  componentDidMount() {
    if (this.props.author) {
      this.setState({
        firstName: this.props.author.firstName,
        lastName: this.props.author.lastName,
        biography: this.props.author.biography,
        portraitUrl: this.props.author.portraitUrl
      });
    }
  }

  firstNameListener = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameListener = e => {
    this.setState({ lastName: e.target.value });
  };

  biographyListener = e => {
    this.setState({ biography: e.target.value });
  };

  portraitUrlListener = e => {
    this.setState({ portraitUrl: e.target.value });
  };

  updateAuthor = e => {
    e.preventDefault();
    const id = e.target.id;
    console.log(e.target.id);
    fetch(`https://sleepy-dawn-91272.herokuapp.com/authors/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        biography: this.state.biography,
        portraitUrl: this.state.portraitUrl
      })
    })
      .then(res => res.json())
      .then(this.props.fetchAuthors)
      .then(this.props.hideModal);
  };

  render() {
    const { author, hideModal, show, fetchAuthors, children } = this.props;

    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    const style = {
      cardWidth: {
        width: "50%"
      }
    };

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <Card style={style.cardWidth}>
            <Image
              floated="left"
              size="small"
              src={this.props.author.portraitUrl}
              className="authorbook-modal"
            />
            <Card.Content>
              <Card.Header className="modal-header">First Name</Card.Header>
              <input
                className="input-header-modal"
                value={this.state.firstName}
                onChange={this.firstNameListener}
                placeholder="First Name"
              />
              <Card.Header className="modal-header">Last Name</Card.Header>
              <input
                className="input-header-modal"
                value={this.state.lastName}
                onChange={this.lastNameListener}
                placeholder="Last Name"
              />
              <Divider />
              <Card.Content>
                <h5>About:</h5>
                <textarea
                  className="input-body"
                  value={this.state.biography}
                  onChange={this.biographyListener}
                  placeholder="Biography"
                />
                <h5>Portrait Url:</h5>
                <input
                  className="input-body"
                  value={this.state.portraitUrl}
                  onChange={this.portraitUrlListener}
                  placeholder="Portrait Url"
                />
              </Card.Content>
            </Card.Content>
            <Card.Content extra>
              <Button className="modal-btn" onClick={hideModal}>
                Close
              </Button>
              <Button
                className="modal-btn"
                id={author.id}
                onClick={this.updateAuthor}
              >
                Update
              </Button>
            </Card.Content>
          </Card>
        </section>
      </div>
    );
  }
}

export default AuthorEditModal;
