import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "Max",
                address: {
                    street: "SomeStreet 12",
                    zipCode: "129314",
                },
                email: "test@test.com",
            },
            deliveryMethod: "fast",
        };

        Axios.post("/orders.json", order)
            .then((res) => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    };

    render() {
        if (this.state.loading) {
            return <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter your Contact data</h3>
                <form action="">
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="text" name="street" placeholder="street" />
                    <Button btnType="Success" clicked={this.orderHandler}>
                        ORDER
                    </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
