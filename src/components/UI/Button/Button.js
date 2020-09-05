import React from "react";
import classes from "./Button.module.css";

const Button = ({clicked, children, btnType}) => {
    return (
        <button
            onClick={clicked}
            className={[classes.Button, classes[btnType]].join(" ")}
        >
            {children}
        </button>
    );
};

export default Button;
