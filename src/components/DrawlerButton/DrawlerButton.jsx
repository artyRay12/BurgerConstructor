import React from "react";
import classes from "./DrawlerButton.module.css";

const DrawlerButton = ({ clicked }) => {
    return (
        <div className={classes.DrawerToggle} onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawlerButton;
