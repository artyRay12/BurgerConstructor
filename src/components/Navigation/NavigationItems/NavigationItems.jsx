import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem active={false} link={"/"}>
                Link
            </NavigationItem>
            <NavigationItem active={false} link={"/"}>
                Second Link
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;
