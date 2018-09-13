import React, {Component} from 'react';
import ImageCard from "../../../../Components/Common/Cards/ImageCard/ImageCard";
import classes from './Scrollable.css';
import Radium from "radium";

const rowtyle = {borderBottom: '1px solid rgb(249, 177, 150)',margin: '1% 0 0 0'};
const colStyle = {
    marginTop: '-1%',paddingTop:'2%',borderRight:'1px solid rgb(249, 177, 150)',cursor:'pointer',background:'#FAC1AB',
    ":hover":{
        color:'blueviolet'
    }
};

class App extends Component {

    componentDidMount(){
        this.pending();
    }

    render() {
        return (
            <div style={orderStyle}>
                <div className="row" style={rowtyle}>
                    <div key="1" onClick={this.pending} id="pending" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>PENDING ORDER</p>
                    </div>

                    <div key="2" onClick={this.ongoing} id="ongoing" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>ONGOING ORDER</p>
                    </div>

                    <div key="3" onClick={this.complete} id="complete" className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>COMPLETE ORDER</p>
                    </div>
                </div>
                <div className={classes.Scroll}>
                    <div className="row" style={{padding: '4%'}}>
                    <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                               image="images/6.jpg" button1="VIEW" button2="TRACK ORDER"/>
                    <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                               image="images/3.jpg" button1="VIEW" button2="TRACK ORDER"/>
                    <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                               image="images/4.jpg" button1="VIEW" button2="TRACK ORDER"/>
                    <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                               image="images/5.jpg" button1="VIEW" button2="TRACK ORDER"/>
                    <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                               image="images/5.jpg" button1="VIEW" button2="TRACK ORDER"/>
                </div>
                </div>
            </div>
        );
    }

    pending = () => {
        this.clear();
        document.getElementById("pending").style.background="wheat";
        document.getElementById("pending").style.borderRadius="6px 0px 0px 0px";
    };

    ongoing = () => {
        this.clear();
        document.getElementById("ongoing").style.background="wheat";
    };

    complete = () => {
        this.clear();
        document.getElementById("complete").style.background="wheat";
        document.getElementById("complete").style.borderRadius="0px 6px 0px 0px";
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
    background: 'rgb(255, 249, 245)',
    border: '1px solid rgb(249, 177, 150)',
    borderRadius: '6px'
};

const pStyle = {
    textAlign: 'center', fontSize: '13px'
}

export default Radium(App);
