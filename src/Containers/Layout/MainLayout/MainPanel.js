import React, { Component } from 'react';
import MainNav from "../../../Components/Navbar/MainNav/MainNav";
import CommonBody from "./CommonBody";
import Footer from "../../../Components/Common/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <CommonBody/>
                <Footer/>
            </div>
        );
    }
}

export default App;
