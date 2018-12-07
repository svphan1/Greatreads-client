import React from "react";
import { Message } from "semantic-ui-react";
import MainUserCard from "./MainUserCard";
import GuestUserCard from "./GuestUserCard";

const Home = () => {
  return (
    <React.Fragment>
      <Message warning>
        <Message.Header>Welcome to Greatreads!</Message.Header>
        <p>Please choose your login</p>
      </Message>
      <MainUserCard />
      <GuestUserCard />
    </React.Fragment>
  );
};

export default Home;
