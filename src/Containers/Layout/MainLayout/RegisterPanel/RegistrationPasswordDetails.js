import React, {Component} from 'react';
import Input from "../../../../Components/Common/TextField/Input";
import password from "../../../../Content/Images/password.png";
import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";

class App extends Component {

    nextPasswordHandler = () => {
        this.props.regSocialMediaHandlerHandler(true);
    };

    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <h5 style={h5Style}>Password details</h5>
                <div className="row" style={{padding: '3%'}}>
                    <div className="col-sm-3">


                    </div>
                    <div className="col-sm-6">

                        <img style={{
                            width: '20%',
                            marginLeft: '35%',
                            // padding: '10%',
                            borderRadius: '100px',
                            marginTop: '-10%',
                        }} src={password} alt="password"/>

                        <div className="form-group">
                            <label htmlFor="userName">User Email</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={{
                                        background: '#F16883',
                                        border: '1px solid #F16883',
                                        color: 'white'
                                    }}>@

                                    </div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup"
                                       placeholder="Enter your email"
                                       style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">User Password</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={{
                                        background: '#F16883',
                                        border: '1px solid #F16883',
                                        color: 'white'
                                    }}><i className="fa fa-unlock-alt" aria-hidden="true">
                                    </i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup"
                                       placeholder="Enter password"
                                       style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="userName">Re-Enter Password</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={{
                                        background: '#F16883',
                                        border: '1px solid #F16883',
                                        color: 'white'
                                    }}><i className="fa fa-unlock-alt" aria-hidden="true">
                                    </i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup"
                                       placeholder="Re-Enter password"
                                       style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                            </div>
                        </div>

                        <Button marginTop="3%" onClick={this.nextPasswordHandler}>NEXT</Button>


                    </div>
                    <div className="col-sm-3">


                    </div>


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

const mapStateToProps = (state) => {


};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
