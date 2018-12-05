import React, { Component } from "react";
import NavBar from "../components/NavBar";
import StudentsCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import BookCard from "../components/Books/BookCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Message } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    showMainCards: true,
  }

  studentHandler = () => {
    const doesShow = this.state.showMainCards
    this.setState({ 
      showMainCards: !doesShow
    })
    console.log(this.state.showStudent)
  }

  teacherHandler = () => {
    const doesShow = this.state.showMainCards
    this.setState({ 
      showMainCards: !doesShow
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          
          { this.state.showMainCards ?
          <div>
          <Message warning>
            <Message.Header>Welcome to Greatreads!</Message.Header>
            <p>Please choose your login</p>
          </Message>
          <StudentsCard studentHandler={this.studentHandler}/>
          <TeacherCard teacherHandler={this.teacherHandler}/> 
          </div> : <BookCard/> }
           
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
