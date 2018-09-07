import React, { Component } from 'react';
import superClass from "../../../../Content/Outline/style.css";
import passwordPic from "../../../../Content/Images/3.png";

import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";

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


const mapStateToProps = (state) => {


};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps) (App);
