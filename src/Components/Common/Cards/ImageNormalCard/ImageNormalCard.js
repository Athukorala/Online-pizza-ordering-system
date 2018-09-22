import React,{Component} from 'react';
import Radium from "radium";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import * as axiosPublic from '../../../../axios/axios-public';

class App extends Component{

    viewUser = () => {
        if(this.props.validation){
            console.log(this.props.userObj)
            let user = this.props.userObj;

            this.props.regNameHandler(user.name);
            this.props.regAddressHandler(user.address);
            this.props.regBdayHandler(user.bday);
            this.props.regCountryHandler(user.country);
            this.props.regNumberHandler(user.number);
            this.props.regPasswordHandler("");
            this.props.regInstagramHandler(user.instagram);
            this.props.regFbHandler(user.fb);
            this.props.regTwitterHandler(user.twitter);
            this.props.regEmailHandler(user.email);
            this.props.imageHandler(axiosPublic.PUBLIC_URL+"/images/users/" + user.number + ".jpg");

            this.props.userViewerHandler(true);
        }
    };

    render(){
        return(
            <div onClick={this.viewUser} key={this.props.key} className="card" style={divStyle}>
                <img key={this.props.imgId} className="card-img-top" style={imageStyle}  src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 style={{fontSize:'15px'}} className="card-title">{this.props.title}</h5>
                    <small className="card-text">
                        {this.props.first}
                    </small>
                    <br/>
                    <small className="card-text">
                        {this.props.second}
                    </small>
                    <br/>
                    <small className="card-text">
                        {this.props.third}
                    </small>
                    <p className="card-text">
                        {this.props.fourth}
                    </p>
                </div>

            </div>
        )
    }

}
const divStyle = {
    width: '12rem',marginLeft:'2%',marginBottom:'1%', cursor:'pointer',
    ":hover":{
        boxShadow:'rgb(201, 201, 201) 0px 0px 20px 2px'
    }
};

const imageStyle = {
    height:'150px', objectFit:'contain',background:'antiquewhite',borderBottom:'1px solid lightgray'
};

const mapDispatchToProps = (dispatch) => {
    return{
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

        // user view panel
        userViewerHandler: (data) => dispatch(actionCreator.adminViewUserHandler(data)),
    }
}

export default connect(null, mapDispatchToProps)(Radium(App));