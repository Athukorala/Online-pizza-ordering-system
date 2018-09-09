import React, {Component} from 'react';
import Input from "../../../../Components/Common/TextField/Input";
import password from "../../../../Content/Images/password.png";
import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";

class App extends Component {

    nextPasswordHandler = () => {
        this.props.regSocialMediaHandlerHandler(true);
    };

    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <h5 style={h5Style}>Password details</h5>
                <div className="row" style={{padding: '1%'}}>
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">

                        {/*<i style={{ marginLeft: '35%', marginTop: '-22%',}} className="fa fa-unlock-alt fa-4x"/>*/}

                        {/*<img  src={password} alt="password"/>*/}

                        <div className="form-group">
                            <label htmlFor="userName">User Email</label>
                            <SmartTextfield set="@" placeholder="Enter your email"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">User Password</label>
                            <SmartTextfield set={<i className="fa fa-unlock-alt" aria-hidden="true"/>} placeholder="Enter password"/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="userName">Re-Enter Password</label>
                            <SmartTextfield set={<i className="fa fa-unlock-alt" aria-hidden="true"/>} placeholder="Re-Enter password"/>

                        </div>

                        <Button marginTop="5%" onClick={this.nextPasswordHandler}>NEXT</Button>

                    </div>
                    <div className="col-sm-3"/>

                </div>
            </div>
        );
    }
}

const h5Style = {
    paddingTop: '3%',
    marginLeft: '3%',
    width: '50%',
};
const h1Style = {
    paddingTop: '3%',
    paddingBottom: '2%',
    width: '50%',
    fontSize: '22px',
    borderBottom: '5px solid #FCD1D9'
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data))
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
