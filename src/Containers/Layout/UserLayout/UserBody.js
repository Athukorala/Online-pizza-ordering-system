import React, {Component} from 'react';
import userAxios from "../../../axios/axios-user";
import * as actionCreator from "../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import HeadFooterCard from "../../../Components/Common/Cards/HeadFooterCard/HeadFooterCard";
import NormalCard from "../../../Components/Common/Cards/NormalCard/NormalCard";
import Button from "../../../Components/Common/Button/Button";
import FontAwesome from "../../../Components/Common/FontAwesome/FontAwesome";
import Cookies from "js-cookie";
import * as axiosPublic from '../../../axios/axios-public';
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import asyncComponent from "../../../hoc/asyncComponent/asyncComponent";
// import CreateOrder from "./CreateOrder/CreateOrder";

const userhome = asyncComponent(() => {
    return import ('./UserHome/UserHome');
});
const createorder = asyncComponent(() => {
    return import ('./CreateOrder/CreateOrder');
});


const mainDivStyle = {
    padding: '6% 2% 0%',
    background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'
};

const manage = {
    padding: '5% 0% 2% 15%'
};

class App extends Component {

    componentDidMount() {

        // let id = sessionStorage.getItem("value_id");
        let id = Cookies.get('id');
        userAxios.get(`users/` + id)
            .then(response => {
                this.props.regNameHandler(response.data.name);
                this.props.regAddressHandler(response.data.address);
                this.props.regBdayHandler(response.data.bday);
                this.props.regCountryHandler(response.data.country);
                this.props.regNumberHandler(response.data.number);
                this.props.regPasswordHandler(response.data.password);
                this.props.regInstagramHandler(response.data.instagram);
                this.props.regFbHandler(response.data.fb);
                this.props.regTwitterHandler(response.data.twitter);
                this.props.regEmailHandler(response.data.email);
                this.props.imageHandler(axiosPublic.PUBLIC_URL + "/images/users/" + response.data.number + ".jpg");
                // this.props.imageHandler("images/logo.png");
                setTimeout(this.stopLoading, 2000);

            })
            .catch(error => {
                console.log(error);
            })
    }

    stopLoading = () => {
        this.props.stopLoadHandler();
    };

    createOrderFunc = () => {
        this.props.history.push('/createorder');
    };

    render() {


        return (
            <div style={mainDivStyle}>
                <div className="row">
                    <div className="col-sm-3">
                        <HeadFooterCard head={this.props.regName} footer={this.props.regEmail}>
                            <br/>
                            <div style={manage}>
                                <FontAwesome name="globe"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{this.props.regCountry},{this.props.regAddress}</span>
                            </div>

                            <div style={manage}>
                                <FontAwesome name="mobile"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize: '12px'}}>{this.props.regNumber}</span>
                            </div>

                            <div style={manage}>
                                <FontAwesome name="birthday-cake"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize: '12px'}}>{this.props.regBday}</span>
                            </div>
                            <br/>
                        </HeadFooterCard>
                        <br/>
                        <NormalCard header="Create an order">
                            <small>Contrary to popular belief, Lorem Ipsum is not simply random text.</small>

                                <Button onClick={this.createOrderFunc} borderRadius="30px" fontSize="12px" marginTop="5%">CREATE</Button>

                        </NormalCard>

                    </div>
                    <div className="col-sm-9">
                        {/*user pro pic and social media and order layout*/}
                        <Switch>
                            <Route path="/createorder" component={createorder}/>
                            <Route path="/" exact component={userhome}/>
                            <Route component={userhome}/>
                        </Switch>

                    </div>
                </div>


            </div>
        );
    }
}


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
        regHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
        // register process
        regEmailHandler: (data) => dispatch(actionCreator.regEmail(data)),
        regNameHandler: (data) => dispatch(actionCreator.regName(data)),
        regAddressHandler: (data) => dispatch(actionCreator.regAddress(data)),
        regBdayHandler: (data) => dispatch(actionCreator.regBday(data)),
        regCountryHandler: (data) => dispatch(actionCreator.regCountry(data)),
        regNumberHandler: (data) => dispatch(actionCreator.regNumber(data)),
        regPasswordHandler: (data) => dispatch(actionCreator.regPassword(data)),
        regInstagramHandler: (data) => dispatch(actionCreator.regInstagram(data)),
        regFbHandler: (data) => dispatch(actionCreator.regFb(data)),
        regTwitterHandler: (data) => dispatch(actionCreator.regTwitter(data)),
        imageHandler: (image) => dispatch(actionCreator.imageHandler(image)),

        //stop and start loading
        startLoadHandler: () => dispatch(actionCreator.startLoading()),
        stopLoadHandler: () => dispatch(actionCreator.stopLoading()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(App)));