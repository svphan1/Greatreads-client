import React from "react";
import { Message } from "semantic-ui-react";
import MainUserCard from "./MainUserCard";
import GuestUserCard from "./GuestUserCard";

const Home = ({ changeNavBar }) => {
  return (
    <React.Fragment>
      <Message warning>
        <Message.Header>Welcome to Greatreads!</Message.Header>
        <p>Please choose your login</p>
      </Message>
      <MainUserCard changeNavBar={changeNavBar}/>
      <GuestUserCard changeNavBar={changeNavBar}/>
      <Message className="signup">
        New to us? <a href="#">Sign Up</a>
      </Message>
    </React.Fragment>
  );
};

export default Home;
