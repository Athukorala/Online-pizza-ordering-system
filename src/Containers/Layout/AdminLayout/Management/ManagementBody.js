import React,{Component} from 'react';
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";
import ChefManagement from "./SubManagement/ChefManagement";
import UserManagement from "./SubManagement/UserManagement";
import ItemManagement from "./SubManagement/ItemManagement";
import Popup from "../../../../Components/Common/ModalPopup/Popup";
import UserDetails from "./UserDetails/UserDetails";
import OrdersManagement from "./SubManagement/OrdersManagement";

class App extends Component{
    render(){

        let modal = null;

        if(this.props.isViewUser){
            modal = <Popup top="15%" width="40%" head="ViewUser" >
                <UserDetails/>
            </Popup>
        }

        let show = null;

        if(this.props.isChef){
            show = <ChefManagement/>;
        }else if(this.props.isUser){
            show = <UserManagement/>;
        }else if(this.props.isItem){
            show = <ItemManagement/>;
        }else if(this.props.isOrders){
            show = <OrdersManagement/>;
        }

        return(
            <div style={mainStyle}>
                {show}
                {modal}
            </div>
        )
    }
}
const mainStyle = {
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
        isOrders:state.isAdminPanel.admin_panel_orders,

        // view users and items
        isViewUser:state.isAdminPanel.admin_panel_user_viewer,
        isViewItem:state.isAdminPanel.admin_panel_item_viewer,
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