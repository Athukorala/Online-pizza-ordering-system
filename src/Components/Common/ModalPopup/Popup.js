import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionCreator from "../../../store/action";
import Radium from "radium";
import superClass from "../../../Content/Outline/style.css";

const antModalStyle = {opacity: '1.2'};

const spanStyle = {
   border:'none',outline:'none'
};

const closeStyle = {
    color:'white',cursor:'pointer',lineHeight:'41px',marginRight:'10px',marginTop:'10px',
    float:'right',borderRadius:'30px',height:'40px',width:'40px',
    background:'#f16b85',
    ":hover":{
        background:'#ffefc9',color:'black'
    }
};

class App extends Component {
    state = {
        modalVisible: false,
        select: true
    };

    setModalVisible = () => {
        this.props.loginHandler(false);
        this.props.regHandler(false);
    };
    leave = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "lightgray";
    };

    enter = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "#f95757";
    };

    render() {

        let modal = null;

        if (this.state.select) {
            modal = <div>

                <div className="ant-modal-mask" style={antModalStyle} onClick={() => this.setModalVisible()}>
                </div>

                <div tabIndex="-1" style={{zIndex: '10000'}} className="ant-modal-wrap vertical-center-modal" role="dialog">

                    <div role="document" className="ant-modal" style={{
                        fontFamily:'cursive',
                        height:this.props.height,
                        width:this.props.width? this.props.width: '60%',
                        transformOrigin: '245px 476px 0px',
                        top:this.props.top? this.props.top: '5%',
                        borderRadius: '7px',
                        background: 'linear-gradient(180deg,rgba(255,255,255,0) 60%, #fff),linear-gradient(70deg, #FCD1D9 32%, #ebfff0)'
                    }}>
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
        regHandler: (data) => dispatch(actionCreator.registerHandler(data)),
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));