import React, {Component} from 'react';
import Footer from "../../../Components/Common/Footer/Footer";
import UserNav from "../../../Components/Navbar/UserNav/UserNav";
import UserBody from "./UserBody";
import {withRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <UserNav/>
                <UserBody/>
                <Footer/>

            </div>
        );
    }
}

export default withRouter(App);
