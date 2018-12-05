import React, { Component } from "react";
import "./style.css";
import logo from "../images/greatreads.jpg";
import { Input, Menu } from "semantic-ui-react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import Authors from "./Authors/Authors";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar2 extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as= { Link }
              name="Books"
              to="/books"
              active={activeItem === "Books"}
              onClick={this.handleItemClick}
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
          <Route path="/books" render={() => <Books />} />
          <Route path="/authors" render={() => <Authors />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default NavBar2;
