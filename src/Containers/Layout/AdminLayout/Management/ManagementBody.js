import React,{Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import ChefManagement from "./SubPanel/ChefManagement";
import UserManagement from "./SubPanel/UserManagement";
import ItemManagement from "./SubPanel/ItemManagement";

class App extends Component{
    render(){

        let show = null;

        if(this.props.isChef){
            show = <ChefManagement/>;
        }else if(this.props.isUser){
            show = <UserManagement/>;
        }else if(this.props.isItem){
            show = <ItemManagement/>;
        }

        return(
            <div style={mainStyle}>
                {show}
            </div>
        )
    }
}
const mainStyle = {
    marginTop: '1%',
    height:'500px',
    background: 'rgb(255, 249, 245)',
    border: '1px solid rgb(249, 177, 150)',
    borderRadius: '6px'
};

const mapStateToProps = (state) => {

    return {
        isChef:state.isAdminPanel.admin_panel_chef,
        isUser:state.isAdminPanel.admin_panel_user,
        isItem:state.isAdminPanel.admin_panel_item,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        regEmailHandler:(data) => dispatch(actionCreator.regEmail(data)),
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        regPersonDetailsHandler: (data) => dispatch(actionCreator.registerPersonDetailsHandler(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));