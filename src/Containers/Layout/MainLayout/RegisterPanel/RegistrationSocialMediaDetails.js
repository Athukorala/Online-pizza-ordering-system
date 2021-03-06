import React, {Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import Button from "../../../../Components/Common/Button/Button";
import SmartTextfield from "../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import userAxios from '../../../../axios/axios-user';
import sweet from 'sweetalert';
import Cookies from "js-cookie";
import uploadAxios from "../../../../axios/axios-imageupload";

const bodyFormData = new FormData();

class App extends Component {


    submit = () => {

        bodyFormData.set("file", this.props.image);

        uploadAxios.post(`/user/`+this.props.regNumber, bodyFormData)
            .then(response => {
                console.log(response)
            })

            .catch(error => {
                console.log("error: " + error)
            });

        console.log("email : "+this.props.regEmail);
        console.log("name : "+this.props.regName);
        console.log("address : "+this.props.regAddress);
        console.log("country : "+this.props.regCountry);
        console.log("number : "+this.props.regNumber);
        console.log("bday : "+this.props.regBday);
        console.log("image : "+this.props.image);

        console.log("password : "+this.props.regPassword);
        console.log("fb : "+this.props.regFb);
        console.log("twitter : "+this.props.regTwitter);
        console.log("instagram : "+this.props.regInstagram);

        const userObj = {
            "id":0,
            "name":this.props.regName,
            "address":this.props.regAddress,
            "email":this.props.regEmail,
            "bday":this.props.regBday,
            "country":this.props.regCountry,
            "number":this.props.regNumber,
            "password":this.props.regPassword,
            "instagram":this.props.regInstagram,
            "fb":this.props.regFb,
            "twitter":this.props.regTwitter,
        };

        userAxios.put(`users`, userObj)
            .then(response => {

                if (response.status === 200) {

                    sweet("Registration Completed!","", {
                        icon: "success",
                        buttons: {

                            catch: {
                                text: "Okay",
                                value: "catch",
                            }
                        },
                    })
                        .then((value) => {
                            switch (value) {
                                case "catch":
                                    this.props.loginHandler(true);
                                    break;

                                default:
                                    this.props.loginHandler(true);
                            }
                        });


                } else {
                    sweet({
                        text: "Failed!",
                        icon: "warning",
                        button: "Okay!",
                    });
                }
``
            })
            .catch(error => {
                console.log(error)
                sweet({
                    text: "Failed!",
                    icon: "warning",
                    button: "Okay!",
                });
            });

    };

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
                            <SmartTextfield
                                onChange={(event) => this.props.regInstagramHandler(event.target.value)}
                                set={<i className="fa fa-instagram" aria-hidden="true"/>}
                                placeholder="Instagram username  (ex: john)"/>

                        </div>
                        {/*Facebook---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter facebook username</label>
                            <SmartTextfield
                                onChange={(event) => this.props.regFbHandler(event.target.value)}
                                set={<i style={{fontSize:'24px'}} className="fa fa-facebook fa-2x" aria-hidden="true"/>}
                                placeholder="Facebook username  (ex: john)"/>

                        </div>

                        {/*twitter---*/}

                        <div className="form-group">
                            <label htmlFor="userName">Enter twitter username</label>
                            <SmartTextfield
                                onChange={(event) => this.props.regTwitterHandler(event.target.value)}
                                set={<i style={{fontSize: '15px'}} className="fa fa-twitter fa-2x" aria-hidden="true"/>}
                                placeholder="Twitter username  (ex: john)"/>

                        </div>

                        <Button marginTop="5%" onClick={this.submit}>FINISH</Button>

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
        regPasswordHandler: (data) => dispatch(actionCreator.registerPasswordHandler(data)),
        regSocialMediaHandlerHandler: (data) => dispatch(actionCreator.registerSocialMediaHandler(data)),

        // register process
        regInstagramHandler: (data) => dispatch(actionCreator.regInstagram(data)),
        regFbHandler: (data) => dispatch(actionCreator.regFb(data)),
        regTwitterHandler: (data) => dispatch(actionCreator.regTwitter(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
