import React,{Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import {withRouter} from "react-router-dom";


class App extends Component{
    render(){

        let insta = null;
        let fb = null;
        let twitter = null;

        if (this.props.regInstagram === null || this.props.regInstagram === "") {

        } else {
            insta = <div className="col-sm-4">
                <a style={aStyle} href={"https://www.instagram.com/" + this.props.regInstagram} target="_blank">
                    <small key="1" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-instagram fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regInstagram}</small>
                </a>

            </div>
        }
        if (this.props.regFb === null || this.props.regFb === "") {

        } else {
            fb = <div className="col-sm-4">
                <a style={aStyle} href={"https://www.facebook.com/" + this.props.regFb} target="_blank">
                    <small key="2" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-facebook fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regFb}</small>
                </a>

            </div>
        }
        if (this.props.regTwitter === null || this.props.regTwitter === "") {

        } else {
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


        return(
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <img style={imageStyle} src={this.props.image} alt="userimage"/>
                    </div>
                    <div className="col-sm-8">

                        {social}
                    </div>

                </div>

            </div>
        )
    }
}

const aStyle = {outline: 'none', textDecoration: 'none', color: 'gray'};


const pStyle = {
    padding: '3% 18%', borderRadius: '10px', textAlign: 'center', border: '1px solid gray', cursor: 'pointer',
    ":hover": {
        border: '1px solid #f58573', color: '#f58573'
    }
};


const imageStyle = {
    width: '120px',
    height: '110px',
    objectFit: 'contain',
    border: '1px solid gray',
    padding: '2%',
    borderRadius: '6px'
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Radium(App)));