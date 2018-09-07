import React, {Component} from 'react';
import MainNav from "../../../Components/Navbar/MainNav/MainNav";
import CommonBody from "./CommonBody";
import Footer from "../../../Components/Common/Footer/Footer";
import Popup from "../../../Components/Common/ModalPopup/Popup";
import {connect} from "react-redux";
import RegistrationPersonalDetails from "./RegisterPanel/RegistrationPersonalDetails";
import Login from "./LoginForm/Login";
import RegistrationPasswordDetails from "./RegisterPanel/RegistrationPasswordDetails";
import RegistrationSocialMediaDetails from "./RegisterPanel/RegistrationSocialMediaDetails";

class App extends Component {

    render() {
        let show = null;

        if (this.props.isLogin) {
            show = <Popup head="Login" top="15%">
                <Login/>
            </Popup>
        }

        if (this.props.isRegPersonDetails) {
            show = <Popup head="Register" top="5%">
                <RegistrationPersonalDetails/>
            </Popup>
        }
        if (this.props.isRegPasswordDetails) {
            show = <Popup head="Register" top="5%">
                <RegistrationPasswordDetails/>
            </Popup>
        }

        if (this.props.isRegSocialMediaDetails) {
            show = <Popup head="Register" top="5%">
                <RegistrationSocialMediaDetails/>
            </Popup>
        }
        return (
            <div>
                <MainNav/>
                <CommonBody/>
                <Footer/>
                {show}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLogin: state.isLoginReducer.login,
        isRegPersonDetails: state.isLoginReducer.registerPersonDetails,
        isRegPasswordDetails: state.isLoginReducer.registerPasswordDetails,
        isRegSocialMediaDetails: state.isLoginReducer.registerSocialMediaDetails,
        // loading changes
        result: state.isLoad.start
    }
};


const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
