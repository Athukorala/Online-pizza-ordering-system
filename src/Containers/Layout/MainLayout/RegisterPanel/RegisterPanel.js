import React, {Component} from 'react';
import Radium from 'radium';
import Button from "../../../../Components/Common/Button/Button";
import ScrollableAnchor, {removeHash} from 'react-scrollable-anchor';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";

const circleStyle = {
    height: '150px',
    textAlign: 'center', fontSize: '18px', background: '#f58573',
    width: '150px', borderRadius: '90px', padding: '15%',
    ":hover": {
        background: '#fcdfc0'
    }
};

const colStyle = {
    paddingLeft: '5%',
    cursor: 'pointer'
};

const h5Style = {marginLeft: '15%'};

class App extends Component {


    render() {
        return (
            <div>

                <div
                    style={{background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'}}>

                    <ScrollableAnchor id={'whychooseus'}>
                        <section style={{
                            padding: '70px 0',
                            overflow: 'hidden',
                            // background: 'white'
                        }}>
                            <center><h1 style={h1Style}>WHY CHOOSE US</h1></center>
                            <div className="row" style={{margin: '0'}}>

                                <div className="col-sm-3">

                                </div>

                                <div className="col-sm-6" style={{marginTop:'3%'}}>
                                    <h5>here are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form, by injected humour, or randomised words which
                                        don't
                                        look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                        you
                                        need to be sure there isn't anything embarrassing hidden in the middle of text.
                                        All
                                        the
                                        Lorem Ipsum generators
                                    </h5>

                                </div>

                                <div className="col-sm-3">

                                </div>

                            </div>
                        </section>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'howitworks'}>
                        <section style={{
                            padding: '70px 0',
                            overflow: 'hidden',
                        }}>
                            <center><h1 style={h1Style}>HOW IT WORKS</h1></center>
                            <div className="row" style={{marginTop: '8%'}}>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 01</h5>
                                    <h1 key="1" style={circleStyle}>

                                        <i style={{marginBottom: '5%'}} className="fa fa-assistive-listening-systems">
                                        </i>
                                        CREATE ORDER
                                    </h1>

                                </div>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 02</h5>
                                    <h1 key="2" style={circleStyle}>
                                        <i style={{marginBottom: '5%'}} className="fa fa-assistive-listening-systems">
                                        </i>CREATE ORDER
                                    </h1>

                                </div>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 03</h5>
                                    <h1 key="3" style={circleStyle}>
                                        <i style={{marginBottom: '5%'}} className="fa fa-assistive-listening-systems">
                                        </i>
                                        CREATE ORDER
                                    </h1>

                                </div>
                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 04</h5>
                                    <h1 key="4" style={circleStyle}>
                                        <i style={{marginBottom: '5%'}} className="fa fa-assistive-listening-systems">
                                        </i>
                                        CREATE ORDER</h1>

                                </div>
                            </div>
                        </section>
                    </ScrollableAnchor>
                </div>

                <ScrollableAnchor id={'reg'}>
                    <section style={{
                        padding: '70px 0',
                        overflow: 'hidden',
                        // background: 'white'
                    }}>
                        <center><h1 style={h1Style}>REGISTRATION</h1></center>
                        <div className="row" style={{margin: '0'}}>
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <h5 style={{marginBottom: '10%'}}>Established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point of using Lorem
                                    Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                    using 'Content here, content here', making it look like readable English</h5>

                                <div className="row" style={{margin: '0'}}>
                                    <div className="col-sm-8">
                                        <SmartTextfield set="@" placeholder="Enter Your email"/>

                                    </div>
                                    <div className="col-sm-4">
                                        <Button href="#home"
                                                onClick={() => this.props.regPersonDetailsHandler(true)}>REGISTER</Button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-3">
                            </div>

                        </div>
                    </section>
                </ScrollableAnchor>

            </div>
        );
    }
}

const h1Style = {marginTop: '3%', marginBottom: '5%', width: '50%', borderBottom: '5px solid #FCD1D9'};


const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPersonDetailsHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));

