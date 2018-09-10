import React, {Component} from 'react';
import ImageCard from "../../../../Components/Common/Cards/ImageCard/ImageCard";
import classes from './Scrollable.css';

const rowtyle = {borderBottom: '1px solid rgb(249, 177, 150)', margin: '0', marginTop: '1%'};
const colStyle = {marginTop: '-1%',paddingTop:'2%',borderRight:'1px solid rgb(249, 177, 150)',cursor:'pointer'};

class App extends Component {
    render() {
        return (
            <div style={orderStyle}>
                <div className="row" style={rowtyle}>
                    <div className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>PENDING ORDER</p>
                    </div>

                    <div className="col-sm-4" style={colStyle}>
                        <p style={pStyle}>ONGOING ORDER</p>
                    </div>

                    <div className="col-sm-4" style={colStyle}>
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

export default App;
