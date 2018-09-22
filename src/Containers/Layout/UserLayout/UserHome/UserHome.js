import React,{Component} from 'react';
import UserProfile from "../UserProfile/UserProfile";
import OrderLayout from "../OrderLayout/OrderLayout";
import {withRouter} from "react-router-dom";

class App extends Component{
    render(){
        return(
            <div>
                <UserProfile/>
                <OrderLayout/>
            </div>
        )
    }
}
export default withRouter(App);