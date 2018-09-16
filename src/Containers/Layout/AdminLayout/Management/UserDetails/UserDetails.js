import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Radium from "radium";

class App extends Component {
    render() {

        let insta = null;
        let fb = null;
        let twitter = null;

        if (this.props.regInstagram === null || this.props.regInstagram === "") {

        } else {
            insta = <div className="col-sm-4" style={{padding: '0'}}>
                <a style={aStyle} href={"https://www.instagram.com/" + this.props.regInstagram} target="_blank">
                    <small key="1" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-instagram fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regInstagram}</small>
                </a>

            </div>
        }
        if (this.props.regFb === null || this.props.regFb === "") {

        } else {
            fb = <div className="col-sm-4" style={{padding: '0'}}>
                <a style={aStyle} href={"https://www.facebook.com/" + this.props.regFb} target="_blank">
                    <small key="2" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-facebook fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regFb}</small>
                </a>

            </div>
        }
        if (this.props.regTwitter === null || this.props.regTwitter === "") {

        } else {
            twitter = <div className="col-sm-4" style={{padding: '0'}}>
                <a style={aStyle} href={"https://www.twitter.com/" + this.props.regTwitter} target="_blank">
                    <small key="3" style={pStyle}><i style={{fontSize: '15px'}} className="fa fa-twitter fa-2x"
                                                     aria-hidden="true"/>&nbsp;&nbsp;{this.props.regTwitter}</small>
                </a>

            </div>
        }

        let social = <div className="row" style={{marginTop: '3%'}}>
            {insta}
            {fb}
            {twitter}

        </div>;

        return (
            <div>
                <div className="row" style={{margin:'0'}}>
                    <div className="col-sm-12">
                        <center>
                            <img style={imageStyle} src={this.props.image} alt="userimage"/>
                            {social}

                        </center>
                    </div>

                </div>
                <div className="row" style={{marginTop:'5%',marginLeft:'30%'}}>
                    <div className="col-sm-12">
                        <p>Name : <span>{this.props.regName}</span></p>
                        <p>Email : <span>{this.props.regEmail}</span></p>
                        <p>Address : <span>{this.props.regAddress}</span></p>
                        <p>Country : <span>{this.props.regCountry}</span></p>
                        <p>Birthday : <span>{this.props.regBday}</span></p>
                        <p>Number : <span>{this.props.regNumber}</span></p>

                    </div>

                </div>

            </div>
        )
    }
}

const imageStyle = {
    marginTop:'1%',
    width: '120px',
    height: '110px',
    objectFit: 'contain',
    border: '1px solid gray',

    borderRadius: '6px'
};

const aStyle = {outline: 'none', textDecoration: 'none', color: 'gray'};

const pStyle = {
    padding: '3% 9%', borderRadius: '10px', textAlign: 'center', border: '1px solid gray', cursor: 'pointer',
    ":hover": {
        border: '1px solid #f58573', color: '#f58573'
    }
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

export default connect(mapStateToProps, null)(Radium(App));