import React, { Component } from "react";
import "./style.css";
import { Menu } from "semantic-ui-react";

class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu stackable>
          <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>

          <Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            Books
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Authors
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default MenuExampleStackable;
