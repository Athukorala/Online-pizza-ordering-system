import React, {Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import Button from "../../../../Components/Common/Button/Button";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";

class App extends Component {
    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <h5 style={h5Style}>Social media account details</h5>
                <div className="row" style={{padding: '1%'}}>
                    <div className="col-sm-3">


                    </div>
                    <div className="col-sm-6">

                        {/*instagram---*/}
                        <div className="form-group">
                            <label htmlFor="userName">Enter instagram username</label>
                            <SmartTextfield set={<i className="fa fa-instagram" aria-hidden="true"/>} placeholder="Instagram username  (ex: john)"/>

                        </div>
                        {/*Facebook---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter facebook username</label>
                            <SmartTextfield set={<i style={{fontSize:'24px'}} className="fa fa-facebook fa-2x" aria-hidden="true"/>} placeholder="Facebook username  (ex: john)"/>

                        </div>

                        {/*twitter---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter twitter username</label>
                            <SmartTextfield set={<i style={{fontSize: '15px'}} className="fa fa-twitter fa-2x" aria-hidden="true"/>} placeholder="Twitter username  (ex: john)"/>

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


const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPasswordHandlerHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data))
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
