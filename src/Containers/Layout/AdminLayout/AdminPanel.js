import React, { Component } from 'react';
import AdminNav from "../../../Components/Navbar/AdminNav/AdminNav";
import AdminBody from "./AdminBody";
import Footer from "../../../Components/Common/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <AdminNav/>
                <AdminBody/>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
