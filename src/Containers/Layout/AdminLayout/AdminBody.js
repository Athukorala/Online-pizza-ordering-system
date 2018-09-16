import React, {Component} from 'react';
import HeadFooterCard from "../../../Components/Common/Cards/HeadFooterCard/HeadFooterCard";
import FontAwesome from "../../../Components/Common/FontAwesome/FontAwesome";
import Radium from 'radium';
import ManagementBody from "./Management/ManagementBody";
import * as actionCreator from "../../../store/action";
import connect from "react-redux/es/connect/connect";

const manage = {
    padding: '5% 0% 5% 15%',
    cursor: 'pointer',
    color: 'black',
    ":hover": {
        // color: 'rgb(249, 177, 150)'
        border:'1px solid rgb(249, 177, 150)'
    }
}

const mainDivStyle = {
    padding: '6% 2% 0%',
    background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'

};

class App extends Component {

    componentDidMount() {
        this.items();

        //stop loading
        setTimeout(this.stopLoading, 2000);
    }
    stopLoading = () => {
        this.props.stopLoadHandler();
    };
    render() {
        return (
            <div style={mainDivStyle}>
                <div className="row">
                    <div className="col-sm-3">
                        <HeadFooterCard head="admin" footer="admin@pizza.com">
                            <div onClick={this.items} id="itemSpan"  key="keyDiv1" style={manage}>
                                <FontAwesome name="pied-piper"/>&nbsp;&nbsp;
                                <span key="1"> Item Management</span>
                            </div>

                            <div onClick={this.chefs} id="chefSpan" key="keyDiv2" style={manage} style={{display:'none'}}>
                                <FontAwesome name="cutlery"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span key="2"> Chefs Management</span>
                            </div>

                            <div onClick={this.users} id="userSpan" key="keyDiv3" style={manage}>
                                <FontAwesome name="user"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span key="3"> View Users</span>
                            </div>

                            <div onClick={this.orders} id="orderSpan" key="keyDiv4" style={manage}>
                                <FontAwesome name="handshake-o"/>&nbsp;&nbsp;
                                <span key="4"> View Orders</span>
                            </div>

                        </HeadFooterCard>

                    </div>
                    <div className="col-sm-9">
                        <ManagementBody/>
                    </div>
                </div>
            </div>
        );
    }

    items = () => {
        this.clear();
        document.getElementById("itemSpan").style.background = "antiquewhite";
        this.props.adminItemHandler(true);
    };

    users = () => {
        this.clear();
        document.getElementById("userSpan").style.background = "antiquewhite";
        this.props.adminUserHandler(true);
    };

    chefs = () => {
        this.clear();
        document.getElementById("chefSpan").style.background = "antiquewhite";
        this.props.adminChefHandler(true);
    };

    orders = () => {
        this.clear();
        document.getElementById("orderSpan").style.background = "antiquewhite";
        this.props.adminOrderHandler(true);
    };


    clear = () => {
        document.getElementById("itemSpan").style.background = "rgb(255, 249, 245)";
        document.getElementById("chefSpan").style.background = "rgb(255, 249, 245)";
        document.getElementById("userSpan").style.background = "rgb(255, 249, 245)";
        document.getElementById("orderSpan").style.background = "rgb(255, 249, 245)";
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        // admin panel
        adminItemHandler: (data) => dispatch(actionCreator.adminItemHandler(data)),
        adminChefHandler: (data) => dispatch(actionCreator.adminChefHandler(data)),
        adminUserHandler: (data) => dispatch(actionCreator.adminUserHandler(data)),
        adminOrderHandler: (data) => dispatch(actionCreator.adminOrdersHandler(data)),

        //stop and start loading
        startLoadHandler: () => dispatch(actionCreator.startLoading()),
        stopLoadHandler: () => dispatch(actionCreator.stopLoading()),
    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
