import React, {Component} from 'react';
import Footer from "../../../Components/Common/Footer/Footer";
import UserNav from "../../../Components/Navbar/UserNav/UserNav";
import UserBody from "./UserBody";

class App extends Component {
    render() {
        return (
            <div>
                <UserNav/>
                <UserBody/>
                <Footer/>

            </div>
        );
    }
}

export default App;
