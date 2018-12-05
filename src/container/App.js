import React, { Component } from "react";
import NavBar from "../components/NavBar";
import StudentsCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <StudentsCard />
          <TeacherCard />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
