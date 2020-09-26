import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import { REMOVE_INGREDIETNS, ADD_INGREDIETNS } from "../../store/actions";

const INGR_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 0.5,
    bacon: 0.5,
};

class BurgerBuilder extends Component {
    state = {
        totalPrice: 4,
        purchaseble: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        /* Axios.get("https://react-burger-b190a.firebaseio.com/ingredients.json")
            .then((res) => {
                this.setState({
                    ingredients: res.data,
                });
            })
            .catch((err) => {
                this.setState({ error: true });
            }); */
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(
                encodeURIComponent(i) +
                    "=" +
                    encodeURIComponent(this.state.ingredients[i])
            );
        }
        queryParams.push("price" + this.state.totalPrice);

        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search: "?" + queryString,
        });
    };

    updatePurchasebleStatus() {
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
        this.props.onIngredientAdded(type);
    };

    removeIngredientHandler = (type) => {
        const updated = {
            ...this.props.ingrs,
        };

        if (updated[type] === 0) {
            return;
        }
        this.props.onIngredientRemove(type);
    };

    render() {
        let order = this.state.loading && <Spinner />;

        let burger = this.state.error ? (
            <p>ingredients can't be loaded</p>
        ) : (
            <Spinner />
        );

        if (this.state.ingredients) {
            burger = <></>;
            order = (
                <OrderSummary
                    ingredients={this.props.ingrs}
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                />
            );
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalCloser={this.purchaseCancelHandler}
                >
                    {order}
                </Modal>
                <Burger ingredients={this.props.ingrs} />
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

const mapStateToProps = (state) => ({
    ingrs: state.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
    onIngredientAdded: (name) =>
        dispatch({ type: ADD_INGREDIETNS, ingredientName: name }),
    onIngredientRemove: (name) =>
        dispatch({ type: REMOVE_INGREDIETNS, ingredientName: name }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(BurgerBuilder, Axios));
