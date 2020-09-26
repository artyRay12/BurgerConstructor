import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ onContinueClick, onCancelClick, ingredients }) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taster well!</h1>
            <div style={{ width: "100%", height: "300px", margin: "auto" }}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Success" clicked={onCancelClick}>
                Continue
            </Button>
            <Button btnType="Danger" clicked={onContinueClick}>
                Cancel
            </Button>
        </div>
    );
};

export default CheckoutSummary;
