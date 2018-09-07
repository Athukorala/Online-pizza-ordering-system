import React, {Component} from 'react';
import Input from "../../../../Components/Common/TextField/Input";
import ImageUpload from "../../../../Components/Common/ImageUpload/ImagUpload";
import {DatePicker} from 'antd';
import password from "../../../../Content/Images/password.png";
import superClass from "../../../../Content/Outline/style.css";


const popup = {

    height: '50px',
    zIndex: '10000',
    position: 'fixed'
};
const dark = {
    opacity: '0',
    width: '100%'

};

class App extends Component {

    state = {
        date: ""
    };


    datePicker = (date, stringDate) => {
        this.setState({
            date: stringDate
        })
    };

    render() {
        return (
            <div>
                <center><h1 style={h1Style}>REGISTRATION</h1></center>
                <div className={superClass.mainDiv}>
                    <h5 style={h5Style}>Person details</h5>
                    <div className="row" style={{margin: '0%', borderBottom: '1px solid lightgray'}}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="userName">User name</label>
                                <Input width="100%"
                                       onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="User name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">User address</label>
                                <textarea className="form-control" style={{boxShadow: 'none', border: 'none'}}
                                          placeholder="User address" id="address" rows="3">
                            </textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userName">Select country</label>
                                <Input width="100%"
                                       onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="Select country"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userName">Mobile Number</label>
                                <Input width="100%"
                                       onChange={(event) => this.nameInput(event.target.value)}
                                       id="userName"
                                       placeholder="Mobile Number"/>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label style={{marginLeft: '32%'}} htmlFor="userName">Choose your image</label>
                            <ImageUpload white={true}/>
                            <div className="form-group" style={{marginTop: '9%'}}>
                                <label htmlFor="userName">Select your Birth day</label>
                                <DatePicker popupStyle={popup} onChange={this.datePicker} style={dark}/>
                                <Input width="100%"
                                       value={this.state.date}
                                       id="userName"
                                       placeholder="Select birthday" marginTop='-10%'/>
                            </div>
                        </div>
                    </div>

                    <h5 style={h5Style}>Password details</h5>
                    <div className="row" style={{padding: '3%'}}>
                        <div className="col-sm-6">
                            <img style={{
                                width: '50%',
                                marginLeft: '10%',
                                padding: '10%',
                                borderRadius: '100px',
                                border: '1px solid lightgray'
                            }} src={password} alt="password"/>

                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="userName">User Email</label>
                                <Input width="100%"
                                       placeholder="User email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Enter password</label>
                                <Input width="100%"
                                       onChange={(event) => this.nameInput(event.target.value)}
                                       type="password"
                                       placeholder="Enter password"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Re-Enter password</label>
                                <Input width="100%"
                                       onChange={(event) => this.nameInput(event.target.value)}
                                       type="password"
                                       placeholder="Re-Enter password"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

const h1Style = {
    paddingTop: '3%',
    paddingBottom: '2%',
    width: '50%',
    fontSize: '22px',
    borderBottom: '5px solid #FCD1D9'
};

const h5Style = {
    paddingTop: '3%',
    marginLeft: '3%',
    width: '50%',
};

export default App;
