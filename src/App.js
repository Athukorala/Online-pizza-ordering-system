import React, {Component} from 'react';
import MainBody from "./Containers/LayoutBody/LayoutBody";
import Cookies from 'js-cookie';
import * as actionCreator from "./store/action";
import connect from "react-redux/es/connect/connect";
import SpinGIF from "./Components/Common/SpinGIF/SpinGIF";
import {withRouter} from "react-router-dom";

class App extends Component {

    componentWillMount() {
        let id = Cookies.get('id');
        console.log(id);
        this.props.allUsersHandler();
        this.props.allItemsHandler();

        if (id !== undefined) {
            if (id === "admin") {
                this.props.adminPanelHandler(true);
            } else {
                this.props.userPanelHandler(true);
            }
        }
    }

    render() {
        return (
            <div>
                <MainBody/>
                <SpinGIF/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        mainPanelHandler: (data) => dispatch(actionCreator.mainPanelHandle(data)),
        userPanelHandler: (data) => dispatch(actionCreator.userPanelHandle(data)),
        adminPanelHandler: (data) => dispatch(actionCreator.adminPanelHandle(data)),

        // all users and items get ,
        allUsersHandler: () => dispatch(actionCreator.allUsers()),
        allItemsHandler: () => dispatch(actionCreator.allItems())
    }
};


export default withRouter(connect(null, mapDispatchToProps)(App));
