import React from "react";
import { Message } from "semantic-ui-react";
import NavBar from "../NavBars/NavBar";
import MainUserCard from "./MainUserCard";
import GuestUserCard from "./GuestUserCard";

const Home = () => {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Message warning>
        <Message.Header>Welcome to Greatreads!</Message.Header>
        <p>Please choose your login</p>
      </Message>
      <MainUserCard />
      <GuestUserCard />
      <Message className="signup">
        New to us? <a href="#">Sign Up</a>
      </Message>
    </React.Fragment>
  );
};

export default Home;
