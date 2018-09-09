import React, { Component } from 'react';
import superClass from "../../../../Content/Outline/style.css";
import passwordPic from "../../../../Content/Images/3.png";

import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";

class App extends Component {


    checkPassword = () => {
        this.props.loginHandler(false);
    };

    render() {
        return (
            <div>
                <center><h1 style={h1Style}>LOGIN</h1></center>
                <div className={superClass.mainDiv}>

                    <div className="row" style={{margin: '0%'}}>


                        <div className="col-sm-6">
                            <img src={passwordPic} alt="user" />
                        </div>

                        {/*another fields ---*/}
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="userName">User Email</label>
                                <SmartTextfield set="@" placeholder="Enter your email"/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="userName">User Password</label>
                                <SmartTextfield set={<i className="fa fa-unlock-alt" aria-hidden="true"/>} placeholder="Enter password"/>

                            </div>
                            <Button marginTop="5%" onClick={this.checkPassword}>LOGIN</Button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const h1Style = {
    paddingTop: '3%',
    paddingBottom: '2%',
    width: '50%',
    fontSize: '22px',
    borderBottom: '5px solid #FCD1D9'
};

const h5Style = {
    paddingTop: '0%',
    marginLeft: '3%',
    width: '50%',
};


const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
    }
};


export default connect(null, mapDispatchToProps) (App);
