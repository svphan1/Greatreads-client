import React from "react";
import "./Modal.css";
import { Card, Image, Divider, Form, TextArea } from "semantic-ui-react";

const BookEditModal = ({ hideModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const style = {
    cardWidth: {
      width: "50%"
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Card style={style.cardWidth}>
          <Image floated="left" size="small" className="authorbook" />
          <Card.Content>
            <Card.Header>Title</Card.Header>
            <Divider />
            <Card.Content>
              <Card.Description>Authors:</Card.Description> <br />
              <Card.Description>Genre:</Card.Description> <br />
              {/* <Form> */}
              <Card.Description>Description:</Card.Description> <br />
                <TextArea autoHeight placeholder="Description" />
              {/* </Form> */}
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <button onClick={hideModal}>Close</button>
            <button onClick={hideModal}>Update</button>
          </Card.Content>
        </Card>
      </section>
    </div>
  );
};

export default BookEditModal;
