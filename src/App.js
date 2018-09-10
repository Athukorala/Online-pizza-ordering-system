import React, { Component } from 'react';
import MainBody from "./Containers/LayoutBody/LayoutBody";
import Cookies from 'js-cookie';
import * as actionCreator from "./store/action";
import connect from "react-redux/es/connect/connect";

class App extends Component {

  componentWillMount(){
      let id=Cookies.get('id');
      console.log(id);

      if(id !== null && id !== "" && id !== undefined){
          this.props.userPanelHandler(true);
      }else{

      }
  }

  render() {
    return (
      <div>
        <MainBody/>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (data) => dispatch(actionCreator.loginHandler(data)),
        mainPanelHandler:(data) => dispatch(actionCreator.mainPanelHandle(data)),
        userPanelHandler: (data) => dispatch(actionCreator.userPanelHandle(data)),
        adminPanelHandler: (data) => dispatch(actionCreator.adminPanelHandle(data)),
    }
};


export default connect(null, mapDispatchToProps) (App);
