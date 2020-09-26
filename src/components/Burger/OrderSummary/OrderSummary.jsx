import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    render() {
        const ingrs = Object.keys(this.props.ingredients).map((elem) => {
            return (
                <li key={elem}>
                    {elem}: {this.props.ingredients[elem]}
                </li>
            );
        });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingrs}</ul>
                <p>
                    <strong>Total Price: {this.props.price}</strong>
                </p>
                <p>Continue to Checkout?</p>

                <Button btnType="Success" clicked={this.props.purchaseContinue}>
                    CONTINUE
                </Button>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>
                    CANCEL
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
