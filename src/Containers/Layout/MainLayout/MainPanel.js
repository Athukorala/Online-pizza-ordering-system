import React, { Component } from 'react';
import MainNav from "../../../Components/Navbar/MainNav/MainNav";
import CommonBody from "./CommonBody";
import Footer from "../../../Components/Common/Footer/Footer";
import Popup from "../../../Components/Common/ModalPopup/Popup";
import {connect} from "react-redux";
import RegistrationPersonalDetails from "./RegisterPanel/RegistrationPersonalDetails";
import Login from "./LoginForm/Login";

class App extends Component {
    render() {
        let show=null;
        if(this.props.isLogin){
            show=<Popup head="Login" top="5%">
                <Login/>
            </Popup>
        }
        if(this.props.isReg){
            show=<Popup head="Register" top="5%">
                <RegistrationPersonalDetails/>
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
        isReg: state.isLoginReducer.register,
        // loading changes
        result: state.isLoad.start
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (App);
