import React, { Component } from "react";
import "./style.css";
import logo from '../images/betterlogo.png';
import { Menu } from "semantic-ui-react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import Authors from "./Authors/Authors";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Router>
          <Menu stackable>
            <Menu.Item>
              <img src={logo} />
            </Menu.Item>

            <Menu.Item
              as={Link}
              name="Home"
              to="/"
              active={activeItem === "features"}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>

            <Menu.Item
              as={Link}
              name="Books"
              to="/books"
              active={activeItem === "Books"}
              onClick={this.handleItemClick}
            >
            Books
            </Menu.Item>

            <Menu.Item
              as={Link}
              name="Authors"
              to="/authors"
              active={activeItem === "Authors"}
              onClick={this.handleItemClick}
            >
              Authors
            </Menu.Item>
          </Menu>

          <Route 
            path="/books"
            render={() => <Books/>}
          />
          <Route 
            path="/authors"
            render={() => <Authors/>}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default NavMenu;
