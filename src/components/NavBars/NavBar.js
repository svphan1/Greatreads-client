import React from "react";
import "./NavBar.css";
import logo from "../../assets/greatreads.jpg";
import user from "../../assets/user.png";
import BookList from "../Books/BookList";
import AuthorList from "../Authors/AuthorList";
import { Input, Menu, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = ({
  authors,
  fetchAuthors,
  deleteAuthor,
  filterAuthors,
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
        />
        <Menu.Item
          as={Link}
          name="Books"
          to="/books"
        />
        <Menu.Item
          as={Link}
          name="Authors"
          to="/authors"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Image avatar src={user} size='small' className="avatar"/>
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
          <BookList />
        )}
      />
      <Route
        path="/authors"
        render={() => (
          <AuthorList
            authors={authors}
            fetchAuthors={fetchAuthors}
            deleteAuthor={deleteAuthor}
            filterAuthors={filterAuthors}
          />
        )}
      />
    </React.Fragment>
  );
};

export default NavBar;
