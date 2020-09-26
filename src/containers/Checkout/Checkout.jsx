import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import Aux from "../../hoc/Auxiliary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
    };

    onCheckoutContinueHandler = () => {
        this.props.history.goBack();
    };

    onCheckoutCancelHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        return (
            <Aux>
                <CheckoutSummary
                    onContinueClick={this.onCheckoutContinueHandler}
                    onCancelClick={this.onCheckoutCancelHandler}
                    ingredients={this.state.ingredients}
                />
                <Route
                    path={this.props.match.path + "/contact-data"}
                    render={(props) => (
                        <ContactData ingredients={this.state.ingredients} {...props}/>
                    )}
                />
            </Aux>
        );
    }
}

export default Checkout;
