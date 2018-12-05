import React, { Component } from "react";
import NavBar from "../components/NavBar";
import StudentsCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Message } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Message warning>
            <Message.Header>Welcome to Greatreads!</Message.Header>
            <p>Please choose your login</p>
          </Message>
          <StudentsCard />
          <TeacherCard />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
