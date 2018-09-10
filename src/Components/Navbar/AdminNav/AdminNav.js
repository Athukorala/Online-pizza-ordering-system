import React, {Component} from 'react';
import classes from './Navbar.css';
import Logo from '../../../Content/Images/logo.png';
import connect from "react-redux/es/connect/connect";
import * as actionCreator from '../../../store/action/index';

class App extends Component {
    state = {
        customerDetails: [],
        itemDetails: [],
        count: 0
    };

    componentDidMount() {

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
                             style={{width: '50%',transform:'scale(1.8)'}}/>
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
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (App);
