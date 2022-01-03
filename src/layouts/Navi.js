import React from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />

          <Menu.Menu position="right">
            <CartSummary/>

            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
