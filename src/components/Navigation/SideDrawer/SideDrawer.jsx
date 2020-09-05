import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ({ close, isOpen, pis }) => {
    const attachedClasses = [
        classes.SideDrawer,
        !isOpen ? classes.Close : classes.Open,
    ];

    return (
        <Aux>
            <Backdrop show={isOpen} clicked={close} />
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
