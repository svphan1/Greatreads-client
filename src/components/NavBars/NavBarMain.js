import React from "react";
import "../style.css";
import logo from "../../images/greatreads.jpg";
import { Input, Menu } from "semantic-ui-react";
import BookCard from "../Books/BookCard";
import AuthorCard from "../Authors/AuthorCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = ({ books, authors, showBooksHandler, deleteBook}) => {
  return (
    <React.Fragment>
        <Menu secondary stackable>
          <Menu.Item>
            <img src={ logo } />
          </Menu.Item>
          <Menu.Item
            as={ Link }
            name="home"
            to="/"
            onClick={ window.location.reload }
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              as={ Link }
              name="logout"
              to="/"
              onClick={ window.location.reload }
            />
          </Menu.Menu>
        </Menu>
        <Route path="/books" render={() => <BookCard books={ books } deleteBook={ deleteBook }/>} />
        <Route
          path="/authors"
          render={() => <AuthorCard authors={ authors } />}
        />
    </React.Fragment>
  );
};

export default NavBar;