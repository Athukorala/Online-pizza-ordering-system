import React, {Component} from 'react';
import Button from "../../../../Components/Common/Button/Button";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import sweet from "sweetalert";
import ReactTooltip from "react-tooltip";

class App extends Component {

    state={
        firstMatch:false,
        secondMatch:false,
        rePass:'',
        correct:false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (
            (this.state.firstMatch !== nextState.firstMatch) ||
            (this.state.secondMatch !== nextState.secondMatch) ||
            (this.state.rePass !== nextState.rePass) ||
            (this.state.correct !== nextState.correct))
    }

    nextPasswordHandler = () => {

        if(this.state.correct){
            this.props.regPasswordHandler(this.state.rePass);
            this.props.regSocialMediaHandlerHandler(true);
        }else{
            sweet({
                text: 'Please again check your password',
                icon: "warning",
                button: "Okay!",
            })
        }

    };

    componentDidUpdate(){

        if(this.props.image.length !==0 && this.props.regName !=='' && this.props.regAddress !=='' && this.props.regCountry !=='' && this.props.regNumber !=='' && this.props.regBday !==''){
            this.setState({
                disable:false
            })
        }
    }
    passwordCheck = (event) => {
        this.setState({rePass:'',correct:false})
        let val = event;

        if (val.length <=6) {
            this.setState({
                firstMatch:false,
                pass:''
            })
        }else{
            this.setState({
                firstMatch:true,
                pass:event
            })
        }

    };

    passwordCorrect = (event) => {
        this.setState({rePass:event})
        let val = event;

        if (val.length <=6) {
            this.setState({
                secondMatch:false,
                correct:false
            })
            this.forceUpdate();
        }else{
           if(this.state.pass === event){
               this.setState({
                   secondMatch:true,
                   correct:true
               })
               this.forceUpdate();
           }else{
               this.setState({
                   secondMatch:false,
                   correct:false
               })
               this.forceUpdate();
           }
        }
    };

    render() {

        let right= <i style={{marginLeft:'-20px', marginTop:'33px',color:'green',fontSize:'20px'}} className="fa fa-check" aria-hidden="true"/>
        let wrong= <i style={{marginLeft:'-20px',marginTop:'33px',color:'red',fontSize:'20px'}} className="fa fa-times" aria-hidden="true"/>


        let firstMatch=null;
        let secondMatch=null;

        if(this.state.firstMatch){
            firstMatch=right
        }else{
            firstMatch=wrong
        }

        if(this.state.secondMatch ){
            secondMatch=right
        }else{
            secondMatch=wrong
        }

        if(this.state.rePass === ''){
            secondMatch=wrong
        }

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
                            <SmartTextfield set="@" value={this.props.regEmail} disabled={true} placeholder="Enter your email"/>

                        </div>
                        <div className="form-group">

                            <div className="row">
                                <div className="col-sm-11">
                                    <label htmlFor="userName">User Password</label>
                                    <SmartTextfield
                                        type="password"
                                        onChange={(event) => this.passwordCheck(event.target.value)}
                                        set={<i className="fa fa-unlock-alt" aria-hidden="true"/>}
                                        placeholder="Enter password"/>
                                </div>
                                <div className="col-sm-1">
                                    {firstMatch}

                                </div>

                            </div>


                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-11">
                                    <label htmlFor="userName">Re-Enter Password</label>
                                    <SmartTextfield
                                        type="password"
                                        value={this.state.rePass}
                                        onChange={(event) => this.passwordCorrect(event.target.value)}
                                        set={<i className="fa fa-unlock-alt" aria-hidden="true"/>}
                                        placeholder="Re-Enter password"/>
                                </div>
                                <div className="col-sm-1">
                                    {secondMatch}

                                </div>
                            </div>
                        </div>

                        <Button
                            marginTop="5%"
                            tooltip="submitButton"
                            onClick={this.nextPasswordHandler}>NEXT</Button>

                    </div>
                    <div className="col-sm-3"/>

                </div>
                <ReactTooltip id='submitButton' type='error' disable={this.state.correct}>
                    <span>Please again check your password</span>
                </ReactTooltip>

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

        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data)),
        // register process

        regPasswordHandler: (data) => dispatch(actionCreator.regPassword(data)),
        regInstagramHandler: (data) => dispatch(actionCreator.regInstagram(data)),
        regFbHandler: (data) => dispatch(actionCreator.regFb(data)),
        regTwitterHandler: (data) => dispatch(actionCreator.regTwitter(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
