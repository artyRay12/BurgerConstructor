import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={classes.Firsts}>
            <div className={classes.Seconds}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
