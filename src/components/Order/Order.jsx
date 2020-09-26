import React from "react";
import classes from "./Order.module.css";

const Order = ({ ingredients, price }) => {
    const keys = Object.keys(ingredients).map(
        (elem) => elem + ": " + ingredients[elem]
    );

    return (
        <div className={classes.Order}>
            <p>Ingredient:</p>
            {keys.map((elem) => (
                <p>{elem}</p>
            ))}

            <p>Price {price}</p>
        </div>
    );
};

export default Order;
