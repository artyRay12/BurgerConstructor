import React, { Component } from "react";
import Order from "../../components/Order/Order";
import Axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });
        Axios.get("/orders.json")
            .then((res) => {
                console.log(res);
                const fetched = [];
                for (let key in res.data) {
                    console.log(res.data[key]);
                    fetched.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                this.setState({ orders: fetched });
            })
            .catch((err) => console.log(err))
            .finally(this.setState({ loading: false }));
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => {
                    return (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    );
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, Axios);
