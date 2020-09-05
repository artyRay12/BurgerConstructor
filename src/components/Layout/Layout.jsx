import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { Component } from "react";

class Layout extends Component {
    state = {
        isSideDrawlerOpen: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({
            isSideDrawlerOpen: false,
        });
    };

    sideDrawerOpenHandler = () => {
        this.setState({
            isSideDrawlerOpen: true,
        });
    };

    render() {
        return (
            <Aux>
                <ToolBar
                    open={this.sideDrawerOpenHandler}
                    close={this.sideDrawerCloseHandler}
                    isOpen={this.state.isSideDrawlerOpen}
                />

                <SideDrawer
                    isOpen={this.state.isSideDrawlerOpen}
                    close={this.sideDrawerCloseHandler}
                    open={this.sideDrawerOpenHandler}
                />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
