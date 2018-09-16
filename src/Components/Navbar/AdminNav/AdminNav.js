import React, {Component} from 'react';
import classes from './Navbar.css';
import Logo from '../../../Content/Images/logo.png';
import connect from "react-redux/es/connect/connect";
import * as actionCreator from '../../../store/action/index';
import sweet from "sweetalert";
import Cookies from "js-cookie";

class App extends Component {
    state = {
        customerDetails: [],
        itemDetails: [],
        count: 0
    };

    componentDidMount() {

    };
    logout = () => {

        sweet("Do you want sign out!", {
            buttons: {
                cancel: "NO",
                catch: {
                    text: "YES",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                // alert(value)
                switch (value) {
                    case "catch":
                        this.props.mainPanelHandler(true);
                        this.clearRedux();
                        break;

                    case "normal":

                        break;

                    default:
                        break;
                }
            });
    };
    clearRedux = () => {

        this.props.startLoadHandler();

        // Cookies.set('id',"");
        Cookies.remove('id');

        this.props.regNameHandler("");
        this.props.regAddressHandler("");
        this.props.regBdayHandler("");
        this.props.regCountryHandler("");
        this.props.regNumberHandler("");
        this.props.regPasswordHandler("");
        this.props.regInstagramHandler("");
        this.props.regFbHandler("");
        this.props.regTwitterHandler("");
        this.props.regEmailHandler("");
        this.props.imageHandler([]);

    };

    login = () => {
        this.props.loginHandler(true);
    };

    render() {
        return (
            <div className={classes.Nav} style={{
                width: '100%', zIndex: '50', borderBottom: '1px solid  rgb(255, 237, 188',
                position: 'fixed'
            }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a style={{color: 'gray', width: '10%', textAlign: 'center', border: '1px solid transparent'}}
                       className="navbar-brand">

                        <img src={Logo} alt="user"
                             style={{width: '35%',transform:'scale(1.8)'}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: 'right'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link"> <span className="sr-only">(current)</span></a>
                            </li>
                            {/*<li className="nav-item active">*/}
                            {/*<a id="cusNav" onClick={this.cus} style={aStyle} className="nav-link active">*/}
                            {/*CUSTOMER*/}
                            {/*</a>*/}
                            {/*</li>*/}

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav" style={{float: 'right'}}>

                                <li className="nav-item" style={{float: 'right'}}>
                                    <a href="#pending" onClick={this.item} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;CUSTOMER&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a href="#ongoing" onClick={this.item} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;CHEFS&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a href="#complete" onClick={this.item} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;ORDERS&nbsp;</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a onClick={this.logout} className="nav-link js-scroll-trigger" style={logoOutStyle}>
                                        <i className="fa fa-sign-out" aria-hidden="true"/>
                                    </a>

                                </li>


                                <li className="nav-item" style={{float: 'right'}}>
                                </li>
                            </ul>

                        </form>
                    </div>
                </nav>
            </div>
        )
    }

    hideColor = () => {
        document.getElementById("cusNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("itemNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("orderNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("placeNav").style.color = "rgb(189, 189, 189)";
        //  rgb(255, 237, 188
    }
}


const astyle = {
    color: "white",
    marginLeft: '0px',
    fontSize: '14px',
    border: '1px solid transparent',
    fontFamily:'cursive'
};
const logoOutStyle = {
    width: '30px', height: '30px',
    borderRadius: '30px', border: '1px solid',
    paddingTop: '8%', color: "white", marginTop:'20%'
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLoginReducer.login,
        isReg: state.isLoginReducer.register,
        // loading changes
        result: state.isLoad.start
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
        // panel
        mainPanelHandler: (data) => dispatch(actionCreator.mainPanelHandle(data)),
        userPanelHandler: (data) => dispatch(actionCreator.userPanelHandle(data)),
        adminPanelHandler: (data) => dispatch(actionCreator.adminPanelHandle(data)),

        // register process
        regEmailHandler:(data) => dispatch(actionCreator.regEmail(data)),
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


export default connect(mapStateToProps, mapDispatchToProps) (App);
