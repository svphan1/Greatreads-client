import React from "react";
import "./NavBar.css";
import logo from "../../assets/greatreads.jpg";
import BookList from "../Books/BookList";
import AuthorList from "../Authors/AuthorList";
import { Input, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBarMain = ({
  authors,
  fetchAuthors,
  deleteAuthor
}) => {
  return (
    <React.Fragment>
      <Menu secondary stackable>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>
        <Menu.Item
          as={Link}
          name="home"
          to="/"
          onClick={window.location.reload}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="logout"
            to="/"
            onClick={window.location.reload}
          />
        </Menu.Menu>
      </Menu>
      <Route
        path="/books"
        render={() => (
          <BookList
          />
        )}
      />
      <Route
        path="/authors"
        render={() => (
          <AuthorList
            authors={authors}
            fetchAuthors={fetchAuthors}
            deleteAuthor={deleteAuthor}
          />
        )}
      />
    </React.Fragment>
  );
};

export default NavBarMain;
