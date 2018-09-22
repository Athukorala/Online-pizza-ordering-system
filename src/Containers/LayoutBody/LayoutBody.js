import React,{Component} from 'react';
import MainPanel from "../Layout/MainLayout/MainPanel";
import UserPanel from "../Layout/UserLayout/UserPanel";
import AdminPanel from "../Layout/AdminLayout/AdminPanel";
import * as actionCreator from "../../store/action";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

class App extends Component{

    render(){

        let show = null;
        if(this.props.mainPanel){
            show=<MainPanel/>
        }else if(this.props.userPanel){
            show=<UserPanel/>
        }else if(this.props.adminPanel){
            show=<AdminPanel/>
        }


        return(
            <div>
                {show}
            </div>
        )
    }

}


const mapStateToProps = (state) => {

    return {
        mainPanel:state.isPanel.mainPanel,
        adminPanel:state.isPanel.adminPanel,
        userPanel:state.isPanel.userPanel,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        mainPanelHandler:(data) => dispatch(actionCreator.mainPanelHandle(data)),
        userPanelHandler: (data) => dispatch(actionCreator.userPanelHandle(data)),
        adminPanelHandler: (data) => dispatch(actionCreator.adminPanelHandle(data)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));