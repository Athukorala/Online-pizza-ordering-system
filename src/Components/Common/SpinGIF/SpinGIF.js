import React, {Component} from 'react';
import gif from '../../../Content/Images/gif.gif';
import * as actionCreator from "../../../store/action";
import connect from "react-redux/es/connect/connect";
import Radium from "radium";

class App extends Component {
    render() {
        let show=null;
        if (this.props.isaLoad) {
            show=<div>
                <div className="ant-modal-mask">
                </div>

                <div tabIndex="-1" style={{zIndex: '10000'}} className="ant-modal-wrap vertical-center-modal"
                     role="dialog">

                    <div role="document" className="ant-modal">
                        <img src={gif} style={divStyle}/>
                    </div>
                </div>
            </div>
        }

        return show;
    }
}

const divStyle = {
    position: 'absolute', marginLeft: '43%', marginTop: '4%', background: 'transparent'
}

const mapStateToProps = (state) => {

    return {
        isaLoad: state.isLoad.start
    }
};


export default connect(mapStateToProps, null)(Radium(App));