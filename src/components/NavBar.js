import React, { Component } from "react";
import "./style.css";
import logo from "../images/greatreads.jpg";
import { Input, Menu } from "semantic-ui-react";
import BookCard from "./Books/BookCard";
import AuthorCard from "./Authors/AuthorCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = ({ books, authors }) => {
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
              onClick={window.location.reload}
            />
            <Menu.Item
              as= { Link }
              name="Books"
              to="/books"
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              as={ Link }
              name="Authors"
              to="/authors"
              // onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                as={ Link }
                name="logout"
                to="/"
                onClick={window.location.reload}
              />
            </Menu.Menu>
          </Menu>
          <Route path="/books" render={() => <BookCard books={books}/>} />
          <Route path="/authors" render={() => <AuthorCard authors={authors}/>} />
        </Router>
      </React.Fragment>
    );
  }

export default NavBar;
