import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngedient/BurgerIngedient";

const Burger = ({ ingredients }) => {
    let transIng = Object.keys(ingredients)
        .map((elem) =>
            [...Array(ingredients[elem])].map((_, index) => (
                <BurgerIngredient key={elem + index} type={elem} />
            ))
        )
        .flat();

    if (transIng.length === 0) transIng = <p>Please add ingredients</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transIng}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
