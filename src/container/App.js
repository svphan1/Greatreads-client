import React, { Component } from 'react';
import MenuExampleStackable from '../components/NavBar';
import CardExampleImageCard from '../components/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <MenuExampleStackable />
       <CardExampleImageCard />
       <CardExampleImageCard />
      </React.Fragment>
    );
  }
}

export default App;
