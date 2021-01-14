import React, { Component } from "react";
import Button from "../../../../components/UI/Button/Button";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../../axios-orders";
import Input from "../../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });
    // alert("Continue!");
    // axios as instance - link
    const order = {
      // ingredients, price from Checkout.js (ingredients, totalPrice)
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Bart",
        address: {
          street: "asdf 2",
          zipCode: "102030",
          country: "Poland",
        },
        email: "asdf@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputType="input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Your street"
        />
        <Input
          inputType="input"
          type="text"
          name="postal"
          placeholder="Your postal code"
        />
        <Button btnType="success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
