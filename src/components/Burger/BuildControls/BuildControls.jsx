import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheesee", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
];

const BuildControls = ({
    ingrAdd,
    ingrDel,
    price,
    purchaseble,
    purchasing,
}) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: {price}$ </p>
            {controls.map((item) => {
                return (
                    <BuildControl
                        key={item.label}
                        label={item.label}
                        type={item.type}
                        added={ingrAdd}
                        deleted={ingrDel}
                    />
                );
            })}
            <button
                className={classes.OrderButton}
                disabled={!purchaseble}
                onClick={purchasing}
            >
                ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;
