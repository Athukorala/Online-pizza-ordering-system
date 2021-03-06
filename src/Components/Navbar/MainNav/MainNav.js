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
                                    <a href="#whychooseus" onClick={this.item} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;WHY CHOOSE US&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a href="#howitworks" onClick={this.item} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;HOW IT WORKS&nbsp;</a>
                                </li>
                                &nbsp;

                                <li className="nav-item" style={{float: 'right'}}>
                                    <a href="#reg" onClick={this.item} className="nav-link js-scroll-trigger"  style={astyle}>
                                        &nbsp;&nbsp;&nbsp;REGISTER&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a /*href="#home"*/ onClick={this.login} className="nav-link js-scroll-trigger" style={astyle}>
                                        &nbsp;&nbsp;&nbsp;LOGIN&nbsp;</a>
                                </li>


                                <li className="nav-item" style={{float: 'right'}}>
                                    {/*<i className="nav-link js-scroll-trigger"*/}
                                       {/*style={{cursor: 'pointer', color: "pink", fontSize: '12px'}}>*/}
                                        {/*<a href="https://www.linkedin.com/in/tharinduathukorala" target="_blank">*/}
                                            {/*<img height="30px" style={{borderRadius: '20px'}}*/}
                                                 {/*src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/40143726_1000077100153006_6694312692435386368_n.jpg?_nc_cat=0&oh=1eb11266b0cc87e535e6ba7a8d42e84e&oe=5BFD3168"*/}
                                                 {/*alt="user"/>*/}
                                        {/*</a>*/}
                                    {/*</i>*/}
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
