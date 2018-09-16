import React, {Component} from 'react';
import classes from './Scrollable.css';
import Radium from "radium";
import CompleteOrders from "./OrderState/CompleteOrders";
import PendingOrders from "./OrderState/PendingOrders";
import OngoingOrders from "./OrderState/OngoingOrders";

const rowtyle = {borderBottom: '1px solid rgb(249, 177, 150)',margin: '1% 0 0 0'};
const colStyle = {
    marginTop: '-1%',paddingTop:'2%',borderRight:'1px solid rgb(249, 177, 150)',cursor:'pointer',background:'#FAC1AB',
    ":hover":{
        color:'blueviolet'
    }
};

class App extends Component {

    state = {
        pending: true,
        ongoing: false,
        complete: false
    };

    componentDidMount(){
        this.pending();
    }

    render() {

        let showOrders = null;

        if(this.state.complete){
            showOrders = <CompleteOrders/>
        }
        if(this.state.pending){
            showOrders = <PendingOrders/>
        }
        if(this.state.ongoing){
            showOrders = <OngoingOrders/>
        }

        return (
            <div style={orderStyle}>
                <div className="row" style={rowtyle}>
                    <div key="1" onClick={this.pending} id="pending" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>PENDING ORDERS</p>
                    </div>

                    <div key="2" onClick={this.ongoing} id="ongoing" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>ONGOING ORDERS</p>
                    </div>

                    <div key="3" onClick={this.complete} id="complete" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>COMPLETE ORDERS</p>
                    </div>
                </div>
                <div className={classes.Scroll}>

                        {showOrders}


                </div>
            </div>
        );
    }

    pending = () => {
        this.clear();
        document.getElementById("pending").style.background="wheat";
        document.getElementById("pending").style.borderRadius="6px 0px 0px 0px";

        this.setState({
            pending: true,
            ongoing: false,
            complete: false
        })
    };

    ongoing = () => {
        this.clear();
        document.getElementById("ongoing").style.background="wheat";

        this.setState({
            pending: false,
            ongoing: true,
            complete: false
        })
    };

    complete = () => {
        this.clear();
        document.getElementById("complete").style.background="wheat";
        document.getElementById("complete").style.borderRadius="0px 6px 0px 0px";

        this.setState({
            pending: false,
            ongoing: false,
            complete: true
        })
    };

    clear = () => {
        document.getElementById("pending").style.background="#FAC1AB";
        document.getElementById("pending").style.borderRadius="6px 0px 0px 0px";
        document.getElementById("pending").style.borderRight="1px solid rgb(249, 177, 150)";

        document.getElementById("ongoing").style.background="#FAC1AB";
        document.getElementById("ongoing").style.borderRight="1px solid rgb(249, 177, 150)";

        document.getElementById("complete").style.background="#FAC1AB";
        document.getElementById("complete").style.borderRadius="0px 6px 0px 0px";
        document.getElementById("complete").style.borderRight="1px solid rgb(249, 177, 150)";
    };


}

const orderStyle = {
    marginTop: '1%',
    // height: '300px',
    // background: 'rgb(255, 249, 245)',
    background:'white',
    border: '1px solid rgb(249, 177, 150)',
    borderRadius: '6px'
};

const pStyle = {
    textAlign: 'center', fontSize: '13px'
}

export default Radium(App);
