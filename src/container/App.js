import React, { Component } from 'react';
import MenuExampleStackable from '../components/NavBar';
import BookCard from '../components/BookCard';
import AuthorCard from '../components/AuthorCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <MenuExampleStackable />
       <BookCard />
       <AuthorCard />
      </React.Fragment>
    );
  }
}

export default App;
