import React from "react";
import "../style.css";
import logo from "../../assets/greatreads.jpg";
import user from "../../assets/user.png";
import { Input, Menu, Image } from "semantic-ui-react";
import BookCard from "../Books/BookCard";
import AuthorCard from "../Authors/AuthorCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = ({
  books,
  authors,
  fetchBooks,
  fetchAuthors,
  deleteBook,
  deleteAuthor,
  filterBooks,
  filterAuthors,
  showModal
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
          <BookCard
            books={books}
            fetchBooks={fetchBooks}
            deleteBook={deleteBook}
            filterBooks={filterBooks}
            showModal={showModal}
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
            filterAuthors={filterAuthors}
          />
        )}
      />
    </React.Fragment>
  );
};

export default NavBar;
