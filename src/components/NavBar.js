import React, { Component } from "react";
import "./style.css";
import logo from "../images/greatreads.jpg";
import { Input, Menu } from "semantic-ui-react";
import BookCard from "./Books/BookCard";
import AuthorCard from "./Authors/AuthorCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, books } = this.state;

    return (
      <React.Fragment>
        <Router>
          <Menu secondary stackable>
            <Menu.Item>
              <img src={logo} />
            </Menu.Item>

            <Menu.Item
              as= { Link }
              name="home"
              to="/"
              active={activeItem === "home"}
              onClick={window.location.reload}
            />
            <Menu.Item
              as= { Link }
              name="Books"
              to="/books"
              active={activeItem === "Books"}
              onClick={this.hideLogin}
            />
            <Menu.Item
              as={ Link }
              name="Authors"
              to="/authors"
              active={activeItem === "Authors"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                as={ Link }
                name="logout"
                to="/"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
          <Route path="/books" render={() => <BookCard books={books}/>} />
          <Route path="/authors" render={() => <AuthorCard />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default NavBar;
