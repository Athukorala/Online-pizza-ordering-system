import React, {Component} from 'react';
import Input from "../../../../Components/Common/TextField/Input";
import ImageUpload from "../../../../Components/Common/ImageUpload/ImagUpload";
import {DatePicker} from 'antd';
import superClass from "../../../../Content/Outline/style.css";
import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import ReactTooltip from "react-tooltip";
import sweet from "sweetalert";


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
        disable:true
    };

    componentDidUpdate(){
        // console.log("email "+this.props.regEmail);
        // console.log("name "+this.props.regName);
        // console.log("address "+this.props.regAddress);
        // console.log("country "+this.props.regCountry);
        // console.log("number "+this.props.regNumber);
        // console.log("bday "+this.props.regBday);
        // console.log("image "+this.props.image.length);

        if(this.props.image.length !==0 && this.props.regName !=='' && this.props.regAddress !=='' && this.props.regCountry !=='' && this.props.regNumber !=='' && this.props.regBday !==''){
            this.setState({
                disable:false
            })

        }else{
            this.setState({
                disable:true
            })

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            (this.props.regName !== nextProps.regName) ||
            (this.props.regAddress !== nextProps.regAddress) ||
            (this.props.regBday !== nextProps.regBday) ||
            (this.props.regCountry !== nextProps.regCountry) ||
            (this.props.image !== nextProps.image) ||
            (this.state.disable !== nextState.disable) ||
            (this.props.regNumber !== nextProps.regNumber))
    }

    datePicker = (date, stringDate) => {
        this.props.regBdayHandler(stringDate);
        this.setState({
            date: stringDate
        })
    };

    nextPasswordHandler = () => {

        if(!this.state.disable){
            this.props.regPasswordHandlerHandler(true);
        }else{
            sweet({
                text: 'Please fill all fields and choose your image',
                icon: "warning",
                button: "Okay!",
            })
        }

    };

    render() {

        let icon = <i className="fa fa-pencil" aria-hidden="true"/>
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <div className={superClass.mainDiv}>
                    {/*<h5 style={h5Style}>Person details</h5>*/}
                    <div className="row" style={{margin: '5% 0% 0%'}}>

                        {/*image viewer ---*/}
                        <div className="col-sm-6">
                            <label style={{marginLeft: '32%'}} htmlFor="userName">Choose your image</label>
                            <ImageUpload white={true}/>
                            <div className="form-group" style={{marginTop: '9%'}}>

                                <label htmlFor="userName">User name</label>
                                <SmartTextfield set={icon}
                                                onChange={(event) => this.props.regNameHandler(event.target.value)}
                                                id="userName"
                                                placeholder="User name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">User address</label>
                                <textarea onChange={(event) => this.props.regAddressHandler(event.target.value)}
                                          className="form-control"
                                          style={{boxShadow: 'none', border: '1px solid #f58573', color: 'black'}}
                                          placeholder="User address" id="address" rows="2">
                            </textarea>
                            </div>
                        </div>

                        {/*another fields ---*/}
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="userName">Select your Birth day</label>
                                <DatePicker popupStyle={popup} onChange={this.datePicker} style={dark}/>
                                <Input value={this.state.date}
                                       disabled={true}
                                       id="userName"
                                       placeholder="Select birthday" marginTop='-10%' width="70%"/>

                            </div>


                            <div className="form-group">
                                <label htmlFor="userName">Select country</label>
                                <SmartTextfield
                                    set={icon}
                                    onChange={(event) => this.props.regCountryHandler(event.target.value)}
                                    id="userName"
                                    placeholder="Select country"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userName">Mobile Number</label>
                                <SmartTextfield
                                    type="number"
                                    set={icon}
                                    onChange={(event) => this.props.regNumberHandler(event.target.value)}
                                    id="userName"
                                    placeholder="Mobile number"/>
                            </div>

                            <Button
                                tooltip="submitButton"
                                marginTop="28%"
                                onClick={this.nextPasswordHandler}>NEXT</Button>


                        </div>


                    </div>


                </div>
                <ReactTooltip id='submitButton' type='error' disable={!this.state.disable}>
                    <span>Please fill all fields and choose your image</span>
                </ReactTooltip>
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

    return {
        image: state.isImageReducer.image,
        regEmail: state.isRegister.regEmail,
        regName: state.isRegister.regName,
        regAddress: state.isRegister.regAddress,
        regBday: state.isRegister.regBday,
        regCountry: state.isRegister.regCountry,
        regNumber: state.isRegister.regNumber,
        regPassword: state.isRegister.regPassword,
        regInstagram: state.isRegister.regInstagram,
        regFb: state.isRegister.regFb,
        regTwitter: state.isRegister.regTwitter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        // register process
        regNameHandler: (data) => dispatch(actionCreator.regName(data)),
        regAddressHandler: (data) => dispatch(actionCreator.regAddress(data)),
        regBdayHandler: (data) => dispatch(actionCreator.regBday(data)),
        regCountryHandler: (data) => dispatch(actionCreator.regCountry(data)),
        regNumberHandler: (data) => dispatch(actionCreator.regNumber(data)),
        regPasswordHandler: (data) => dispatch(actionCreator.regPassword(data)),
        regInstagramHandler: (data) => dispatch(actionCreator.regInstagram(data)),
        regFbHandler: (data) => dispatch(actionCreator.regFb(data)),
        regTwitterHandler: (data) => dispatch(actionCreator.regTwitter(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
