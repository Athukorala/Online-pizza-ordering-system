import React, {Component} from 'react';
import HeadFooterCard from "../../../Components/Common/Cards/HeadFooterCard/HeadFooterCard";
import FontAwesome from "../../../Components/Common/FontAwesome/FontAwesome";
import Radium from 'radium';
import ManagementBody from "./Management/ManagementBody";
import * as actionCreator from "../../../store/action";
import connect from "react-redux/es/connect/connect";

const manage = {

    cursor: 'pointer',
    color: 'black',
    ":hover": {
        color: 'orange'
    }
}

const mainDivStyle = {
    padding: '6% 2% 0%',
    background: 'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'

};

class App extends Component {

    item = () => {
        this.props.adminItemHandler(true);
    };

    user = () => {
        this.props.adminUserHandler(true);
    };

    chef = () => {
        this.props.adminChefHandler(true);
    };

    componentDidMount() {

    }

    render() {
        return (
            <div style={mainDivStyle}>
                <div className="row">
                    <div className="col-sm-3">
                        <HeadFooterCard head="admin" footer="admin@pizza.com">
                            <FontAwesome name="globe"/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={this.item} key="1" style={manage}> ITEM MANAGEMENT</span>
                            <br/><br/>
                            <FontAwesome name="globe"/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={this.chef} key="2" style={manage}> CHEFS MANAGEMENT</span>
                            <br/><br/>
                            <FontAwesome name="globe"/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={this.user} key="3" style={manage}> VIEW USERS</span>
                            <br/><br/>

                        </HeadFooterCard>

                    </div>
                    <div className="col-sm-9">
                        <ManagementBody/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // admin panel
        adminItemHandler: (data) => dispatch(actionCreator.adminItemHandler(data)),
        adminChefHandler: (data) => dispatch(actionCreator.adminChefHandler(data)),
        adminUserHandler: (data) => dispatch(actionCreator.adminUserHandler(data)),

    }
};


export default connect(null, mapDispatchToProps)(Radium(App));
