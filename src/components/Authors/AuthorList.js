import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
import AuthorHeader from "./AuthorHeader";

class AuthorList extends Component {
  state = {
    authors: []
  };

  fetchAuthors = () => {
    fetch("http://localhost:3000/authors")
      .then(response => response.json())
      .then(data => {
        this.setState({ authors: data.authors });
      });
  };

  componentDidMount() {
    this.fetchAuthors();
  }

  filterAuthors = () => {
    this.setState({
      authors: this.state.authors.sort((a, b) => {
        let nameA = a.firstName.toLowerCase(),
          nameB = b.firstName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      })
    });
  };

  render() {
    return (
      <div>
        <AuthorHeader
          filterAuthors={this.filterAuthors}
          fetchAuthors={this.fetchAuthors}
        />
        {this.state.authors.map(author => (
          <AuthorCard
            author={author}
            id={author.id}
            fetchAuthors={this.fetchAuthors}
          />
        ))}
      </div>
    );
  }
}

export default AuthorList;
