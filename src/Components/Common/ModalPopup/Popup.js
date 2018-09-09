import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionCreator from "../../../store/action";
import Radium from "radium";
import superClass from "../../../Content/Outline/style.css";
import Logo from '../../../Content/Images/logo.png';

const antModalStyle = {opacity: '1.2'};

const spanStyle = {
    border: 'none', outline: 'none'
};

const closeStyle = {
    color: 'white', cursor: 'pointer', lineHeight: '41px', marginRight: '10px', marginTop: '10px',
    float: 'right', borderRadius: '30px', height: '40px', width: '40px',
    background: '#f16b85',
    ":hover": {
        background: '#ffefc9', color: 'black'
    }
};

class App extends Component {
    state = {
        modalVisible: false,
        select: true
    };

    setModalVisible = () => {
        this.closeAll();
        this.props.loginHandler(false);
        this.props.regHandler(false);
    };
    leave = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "lightgray";
    };

    enter = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "#f95757";
    };

    closeAll = () => {
        this.props.regNameHandler("");
        this.props.regAddressHandler("");
        this.props.regBdayHandler("");
        this.props.regCountryHandler("");
        this.props.regNumberHandler("");
        this.props.regPasswordHandler("");
        this.props.regInstagramHandler("");
        this.props.regFbHandler("");
        this.props.regTwitterHandler("");
        this.props.regEmailHandler("");
        this.props.imageHandler([]);
    }

    render() {

        let modal = null;

        if (this.state.select) {
            modal = <div>

                <div className="ant-modal-mask" style={antModalStyle} onClick={() => this.setModalVisible()}>
                </div>

                <div tabIndex="-1" style={{zIndex: '10000'}} className="ant-modal-wrap vertical-center-modal"
                     role="dialog">

                    <div role="document" className="ant-modal" style={{
                        border: '2px solid #f2654f',
                        fontFamily: 'cursive',
                        height: this.props.height,
                        width: this.props.width ? this.props.width : '60%',
                        transformOrigin: '245px 476px 0px',
                        top: this.props.top ? this.props.top : '5%',
                        borderRadius: '7px',
                        background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'
                    }}>
                        <img src={Logo} style={{position: 'absolute', width: '12%'}}/>
                        <span id="closeBtn"
                              style={closeStyle}
                              className="ant-modal-close-x"
                              onClick={() => this.setModalVisible()}>
                            </span>
                        {/*<div className={superClass.mainDiv}>*/}
                        {this.props.children}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        }

        return modal

    }


};

const customHeader = {
    color: 'black'
};

// style objects add to components

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
        // register process
        regEmailHandler:(data) => dispatch(actionCreator.regEmail(data)),
        regNameHandler: (data) => dispatch(actionCreator.regName(data)),
        regAddressHandler: (data) => dispatch(actionCreator.regAddress(data)),
        regBdayHandler: (data) => dispatch(actionCreator.regBday(data)),
        regCountryHandler: (data) => dispatch(actionCreator.regCountry(data)),
        regNumberHandler: (data) => dispatch(actionCreator.regNumber(data)),
        regPasswordHandler: (data) => dispatch(actionCreator.regPassword(data)),
        regInstagramHandler: (data) => dispatch(actionCreator.regInstagram(data)),
        regFbHandler: (data) => dispatch(actionCreator.regFb(data)),
        regTwitterHandler: (data) => dispatch(actionCreator.regTwitter(data)),
        imageHandler: (image) => dispatch(actionCreator.imageHandler(image))
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
