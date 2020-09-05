import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalCloser}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-10vh)",
                        opacity: this.props.show ? "1" : "0",
                        zIndex: this.props.show ? "500" : "-1500",
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
