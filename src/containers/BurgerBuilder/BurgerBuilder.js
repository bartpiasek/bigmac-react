import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
