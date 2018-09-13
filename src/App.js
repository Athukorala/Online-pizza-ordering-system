import React, { Component } from 'react';
import MainBody from "./Containers/LayoutBody/LayoutBody";
import Cookies from 'js-cookie';
import * as actionCreator from "./store/action";
import connect from "react-redux/es/connect/connect";
import Scroll from "./Components/Navbar/MainNav/Scroll";

class App extends Component {

  componentWillMount(){
      let id=Cookies.get('id');
      console.log(id);
      this.props.allUsersHandler();

      if(id !== undefined){
          if(id === "admin"){
              this.props.adminPanelHandler(true);
          }else{
              this.props.userPanelHandler(true);
          }

      }else{

      }
  }

  render() {
    return (
      <div>
          {/*<Scroll/>*/}
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
        // all users get
        allUsersHandler:() =>dispatch(actionCreator.allUsers())
    }
};


export default connect(null, mapDispatchToProps) (App);
