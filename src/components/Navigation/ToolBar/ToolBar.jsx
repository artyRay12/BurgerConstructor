import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawlerButton from "../../DrawlerButton/DrawlerButton";

const ToolBar = ({ isOpen, close, open }) => {
    return (
        <header className={classes.Toolbar}>
            <DrawlerButton clicked={isOpen ? close : open} />
            <Logo height="100%" />
            <nav className={classes.DesctopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default ToolBar;
