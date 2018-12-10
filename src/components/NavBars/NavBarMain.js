import React from "react";
import "./NavBar.css";
import logo from "../../assets/greatreads.jpg";
import { Input, Menu } from "semantic-ui-react";
import BookCard from "../Books/BookCard";
import AuthorCard from "../Authors/AuthorCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBarMain = ({
  books,
  authors,
  fetchBooks,
  fetchAuthors,
  deleteBook,
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
          <BookCard
            books={books}
            fetchBooks={fetchBooks}
            deleteBook={deleteBook}
          />
        )}
      />
      <Route
        path="/authors"
        render={() => (
          <AuthorCard
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
