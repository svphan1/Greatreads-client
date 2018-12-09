import React, { Component } from "react";
import ReactDOM from "react-dom";
import BookEditModal from "./Modal";

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <BookEditModal show={this.state.show} hideModal={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </BookEditModal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

export default Dashboard;
