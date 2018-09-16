import React,{Component} from 'react';
import Radium from "radium";

const App = (props) => {
    return <i className={"fa fa-"+props.name} style={props.style} aria-hidden="true"/>

};

export default Radium(App);