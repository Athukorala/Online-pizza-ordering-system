import React, {Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import Button from "../../../../Components/Common/Button/Button";

class App extends Component {
    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <h5 style={h5Style}>Social media account details</h5>
                <div className="row" style={{padding: '3%'}}>
                    <div className="col-sm-3">


                    </div>
                    <div className="col-sm-6">



                        {/*instagram---*/}
                        <div className="form-group">
                            <label htmlFor="userName">Enter instagram username</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text" style={{
                                    background: '#F16883',
                                    border: '1px solid #F16883',
                                    color: 'white'
                                }}><i className="fa fa-instagram" aria-hidden="true">
                                </i>
                                </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Instagram username  (Ex: John)"
                                   style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                        </div>
                        </div>
                        {/*Facebook---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter facebook username</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text" style={{
                                    background: '#F16883',
                                    border: '1px solid #F16883',
                                    color: 'white'
                                }}><i style={{fontSize:'24px'}} className="fa fa-facebook fa-2x" aria-hidden="true">
                                </i>
                                </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Facebook username  (Ex: John)"
                                   style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                        </div>
                        </div>

                        {/*twitter---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter twitter username</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text" style={{
                                    background: '#F16883',
                                    border: '1px solid #F16883',
                                    color: 'white'
                                }}><i style={{fontSize:'15px'}} className="fa fa-twitter fa-2x" aria-hidden="true">
                                </i>
                                </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Twitter username  (Ex: John)"
                                   style={{boxShadow: 'none', border: '1px solid rgb(241, 104, 131)'}}/>

                        </div>
                        </div>

                        <Button marginTop="5%" onClick={()=>this.props.regPasswordHandlerHandler(false)}>FINISH</Button>

                    </div>

                    <div className="col-sm-3">

                    </div>

                </div>
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


};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
