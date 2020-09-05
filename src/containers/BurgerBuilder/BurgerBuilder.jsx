import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGR_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 0.5,
    bacon: 0.5,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseble: false,
        purchasing: false,
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        alert("Cont");
    };

    updadatePurchase() {
        const ingredients = {
            ...this.state.ingredients,
        };

        const sum = Object.keys(ingredients)
            .map((elem) => ingredients[elem])
            .reduce((acc, item) => acc + item, 0);

        this.setState((state) => {
            return { purchaseble: sum > 0 };
        });
    }

    addIngredientHandler = (type) => {
        const updated = {
            ...this.state.ingredients,
        };
        updated[type] = this.state.ingredients[type] + 1;

        this.setState(
            {
                totalPrice: this.state.totalPrice + INGR_PRICES[type],
                ingredients: updated,
            },
            this.updadatePurchase
        );
    };

    removeIngredientHandler = (type) => {
        const updated = {
            ...this.state.ingredients,
        };

        if (updated[type] === 0) {
            return;
        }
        updated[type] = this.state.ingredients[type] - 1;

        this.setState(
            {
                totalPrice: this.state.totalPrice - INGR_PRICES[type],
                ingredients: updated,
            },
            this.updadatePurchase
        );
    };

    render() {
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalCloser={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchaseble={this.state.purchaseble}
                    price={this.state.totalPrice}
                    ingrAdd={this.addIngredientHandler}
                    ingrDel={this.removeIngredientHandler}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
