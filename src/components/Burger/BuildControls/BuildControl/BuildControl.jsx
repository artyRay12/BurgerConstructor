import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = ({ label, added, type, deleted }) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less} onClick={() => deleted(type)}>
                Less
            </button>
            <button className={classes.More} onClick={() => added(type)}>
                More
            </button>
        </div>
    );
};

export default BuildControl;
