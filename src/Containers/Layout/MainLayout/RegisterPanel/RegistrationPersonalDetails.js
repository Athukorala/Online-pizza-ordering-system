import React, {Component} from 'react';
import Input from "../../../../Components/Common/TextField/Input";
import ImageUpload from "../../../../Components/Common/ImageUpload/ImagUpload";
import {DatePicker} from 'antd';
import superClass from "../../../../Content/Outline/style.css";
import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";


const popup = {

    height: '50px',
    zIndex: '10000',
    position: 'fixed'
};
const dark = {
    opacity: '0',
    width: '100%'

};

class App extends Component {

    state = {
        date: "",
    };


    datePicker = (date, stringDate) => {
        this.setState({
            date: stringDate
        })
    };

    nextPasswordHandler = () => {
        this.props.regPasswordHandlerHandler(true);
    };

    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <div className={superClass.mainDiv}>
                    {/*<h5 style={h5Style}>Person details</h5>*/}
                    <div className="row" style={{margin:'5% 0% 0%'}}>

                        {/*image viewer ---*/}
                        <div className="col-sm-6">
                            <label style={{marginLeft: '32%'}} htmlFor="userName">Choose your image</label>
                            <ImageUpload white={true}/>
                            <div className="form-group" style={{marginTop: '9%'}}>

                                <label htmlFor="userName">User name</label>
                                <Input width="100%"
                                       // onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="User name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">User address</label>
                                <textarea className="form-control" style={{boxShadow: 'none', border: '1px solid #f58573',color:'black'}}
                                          placeholder="User address" id="address" rows="2">
                            </textarea>
                            </div>
                        </div>

                        {/*another fields ---*/}
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="userName">Select your Birth day</label>
                                <DatePicker popupStyle={popup} onChange={this.datePicker} style={dark}/>
                                <Input disabled={true} width="100%"
                                       value={this.state.date}
                                       id="userName"
                                       placeholder="Select birthday" marginTop='-10%'/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="userName">Select country</label>
                                <Input width="100%"
                                       // onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="Select country"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userName">Mobile Number</label>
                                <Input width="100%"
                                       // onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="Mobile Number"/>
                            </div>

                            <Button marginTop="28%" onClick={this.nextPasswordHandler}>NEXT</Button>


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
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
