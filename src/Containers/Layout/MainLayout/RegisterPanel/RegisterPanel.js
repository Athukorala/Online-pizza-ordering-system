import React, {Component} from 'react';
import Radium from 'radium';
import Button from "../../../../Components/Common/Button/Button";
import ScrollableAnchor, {removeHash} from 'react-scrollable-anchor';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";

const circleStyle = {
    height: '150px',
    textAlign: 'center', fontSize: '18px', background: '#F48893',
    width: '150px', borderRadius: '90px', padding: '15%',
    ":hover": {
        background: '#fcdfc0'
    }
};

const colStyle = {
    paddingLeft: '5%'
};

const h5Style = {marginLeft: '15%'};

class App extends Component {


    render() {
        return (
            <div>

                <div
                    style={{background: 'linear-gradient(180deg,rgba(255,255,255,0) 60%, #fff),linear-gradient(70deg, #FCD1D9 32%, #ebfff0)'}}>
                    <section style={{
                        padding: '70px 0',
                        overflow: 'hidden',
                        // background: 'white'
                    }}>
                        <center><h1 style={h1Style}>WHY CHOOSE US</h1></center>
                        <div className="row" style={{margin: '0'}}>

                            <div className="col-sm-3">

                            </div>

                            <div className="col-sm-6">
                                <h5>here are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle of text. All
                                    the
                                    Lorem Ipsum generators
                                </h5>

                            </div>

                            <div className="col-sm-3">

                            </div>

                        </div>
                    </section>

                    <ScrollableAnchor id={'howitworks'}>
                        <section style={{
                            padding: '70px 0',
                            overflow: 'hidden',
                        }}>
                            <center><h1 style={h1Style}>HOW IT WORKS</h1></center>
                            <div className="row" style={{margin: '0'}}>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 01</h5>
                                    <h1 key="1" style={circleStyle}>CREATE ORDER</h1>

                                </div>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 02</h5>
                                    <h1 key="2" style={circleStyle}>GET DELIVERED</h1>

                                </div>

                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 03</h5>
                                    <h1 key="3" style={circleStyle}>CREATE ORDER</h1>

                                </div>
                                <div className="col-sm-3" style={colStyle}>
                                    <h5 style={h5Style}>STEP 04</h5>
                                    <h1 key="4" style={circleStyle}>CREATE ORDER</h1>

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
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" style={{
                                                    background: '#F16883',
                                                    border: '1px solid #F16883',
                                                    color: 'white'
                                                }}>@
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                                   placeholder="Enter Your email"
                                                   style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                                            {/*<Input placeholder="Your email"/>*/}
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <Button href="#home"  onClick={()=>this.props.regPersonDetailsHandler(true)}>REGISTER</Button>
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

const mapStateToProps = (state) => {


};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPersonDetailsHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));

