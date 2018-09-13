import React, {Component} from 'react';
import userAxios from "../../../axios/axios-user";
import * as actionCreator from "../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import HeadFooterCard from "../../../Components/Common/Cards/HeadFooterCard/HeadFooterCard";
import NormalCard from "../../../Components/Common/Cards/NormalCard/NormalCard";
import Button from "../../../Components/Common/Button/Button";
import FontAwesome from "../../../Components/Common/FontAwesome/FontAwesome";
import OrderLayout from "./OrderLayout/OrderLayout";
import Cookies from "js-cookie";

const mainDivStyle = {
    padding: '6% 2% 0%',
    background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'
};

class App extends Component {

    componentDidMount() {
        // let id = sessionStorage.getItem("value_id");
        let id=Cookies.get('id');
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
                this.props.imageHandler("http://localhost:8081/images/users/" + response.data.email + ".jpg");
                // this.props.imageHandler("images/logo.png");
            })
            .catch(error => {
                console.log(error);
            })

    }


    render() {

        let insta = null;
        let fb = null;
        let twitter = null;

        if (this.props.regInstagram === null || this.props.regInstagram === "") {

        }else{
            insta = <div className="col-sm-4">
                <a style={aStyle} href={"https://www.instagram.com/" + this.props.regInstagram} target="_blank">
                    <small key="1" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-instagram fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regInstagram}</small>
                </a>

            </div>
        }
        if (this.props.regFb === null || this.props.regFb === "") {

        }else{
            fb = <div className="col-sm-4">
                <a style={aStyle} href={"https://www.facebook.com/" + this.props.regFb} target="_blank">
                    <small key="2" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-facebook fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regFb}</small>
                </a>

            </div>
        }
        if (this.props.regTwitter === null || this.props.regTwitter === "") {

        }else{
            twitter = <div className="col-sm-4">
                <a style={aStyle} href={"https://www.twitter.com/" + this.props.regTwitter} target="_blank">
                    <small key="3" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-twitter fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regTwitter}</small>
                </a>

            </div>
        }

        let social = <div className="row" style={{marginTop: '8%'}}>
            {insta}
            {fb}
            {twitter}

        </div>;


        return (
            <div style={mainDivStyle}>
                <div className="row">
                    <div className="col-sm-3">
                        <HeadFooterCard head={this.props.regName} footer={this.props.regEmail}>
                            <FontAwesome name="globe"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{this.props.regCountry},{this.props.regAddress}</span>
                            <br/><br/>
                            <FontAwesome name="mobile"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize: '12px'}}>{this.props.regNumber}</span>
                            <br/>

                            <FontAwesome name="birthday-cake"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize: '12px'}}>{this.props.regBday}</span>
                        </HeadFooterCard>
                        <br/>
                        <NormalCard header="Create an order">
                            <small>Contrary to popular belief, Lorem Ipsum is not simply random text.</small>
                            <Button borderRadius="30px" fontSize="12px" marginTop="5%">CREATE</Button>
                        </NormalCard>

                    </div>
                    <div className="col-sm-9">

                        {/*user pro pic and social media*/}

                        <div className="row">
                            <div className="col-sm-2">
                                <img style={imageStyle} src={this.props.image} alt="userimage"/>
                            </div>
                            <div className="col-sm-8">

                                {social}
                            </div>

                        </div>

                        {/*order layout*/}

                        <OrderLayout/>


                    </div>
                </div>


            </div>
        );
    }
}

const imageStyle = {
    width: '120px',
    height: '110px',
    objectFit: 'contain',
    border: '1px solid gray',
    padding: '2%',
    borderRadius: '6px'
};
const pStyle = {
    padding: '3% 18%', borderRadius: '10px', textAlign: 'center', border: '1px solid gray', cursor: 'pointer',
    ":hover": {
        border: '1px solid #f58573', color: '#f58573'
    }
};

const aStyle = {outline: 'none', textDecoration: 'none', color: 'gray'};

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
        imageHandler: (image) => dispatch(actionCreator.imageHandler(image))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));