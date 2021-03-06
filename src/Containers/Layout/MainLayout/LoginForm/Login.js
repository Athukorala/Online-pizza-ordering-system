import React, { Component } from 'react';
import superClass from "../../../../Content/Outline/style.css";
import passwordPic from "../../../../Content/Images/3.png";

import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import userAxios from "../../../../axios/axios-user";
import sweet from "sweetalert";
import Cookies from 'js-cookie';

class App extends Component {

    state={
        email:'tharinduathukorala1@gmail.com',
        password:'1234567'
    };

    checkPassword = () => {
        if(this.state.email === '' || this.state.password === ''){

                sweet({
                    text: 'Please enter email and password..',
                    icon: "warning",
                    button: "Okay!",
                })
        }else{
            //start loading
            this.props.startLoadHandler();

            if(this.state.email === 'admin' && this.state.password === 'admin'){
                Cookies.set('id',"admin",{ expires: 7 });
                this.props.loginHandler(false);
                this.props.adminPanelHandler(true);
            }else {
                this.backendData();
            }
        }
    };

    backendData = () => {

        const obj={
            "email":this.state.email,
            "password":this.state.password
        };

        // userAxios.get(`users?action1=`+this.state.email+`&action2=`+this.state.password)
        userAxios.post(`users`,obj)
            .then(response => {

                if (response.status === 200) {
                    if(response.data.id){
                        this.props.loginHandler(false);
                        Cookies.set('id',response.data.id,{ expires: 7 });
                        this.props.userPanelHandler(true);
                    }else{
                        this.props.stopLoadHandler();
                        sweet({
                            text: "Try again! Incorrect password or email",
                            icon: "warning",
                            button: "Okay!",
                        });
                    }
                }
            })
            .catch(error => {
                this.props.stopLoadHandler();
                console.log(error)
                sweet({
                    text: "Failed!",
                    icon: "warning",
                    button: "Okay!",
                });
            });

        // this.props.loginHandler(false);
    }

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
                                <SmartTextfield
                                    value={this.state.email}
                                    onChange={(event) => this.setState({email:event.target.value})}
                                    set="@" placeholder="Enter your email"/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="userName">User Password</label>
                                <SmartTextfield
                                    value={this.state.password}
                                    type="password"
                                    onChange={(event) => this.setState({password:event.target.value})}
                                    set={<i className="fa fa-unlock-alt" aria-hidden="true"/>} placeholder="Enter password"/>

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
        mainPanelHandler:(data) => dispatch(actionCreator.mainPanelHandle(data)),
        userPanelHandler: (data) => dispatch(actionCreator.userPanelHandle(data)),
        adminPanelHandler: (data) => dispatch(actionCreator.adminPanelHandle(data)),

        //stop and start loading
        startLoadHandler: () => dispatch(actionCreator.startLoading()),
        stopLoadHandler: () => dispatch(actionCreator.stopLoading()),
    }
};


export default connect(null, mapDispatchToProps) (App);
