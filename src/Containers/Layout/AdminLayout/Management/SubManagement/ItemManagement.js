// save-token
import React,{Component} from 'react';
import CreateItem from "./CreateItem/CreateItem";

class App extends Component{
    render(){
        let show = null;
        show= <CreateItem/>

        return(
            <div>
                <p style={h4Style}>Item Management</p>

                {show}
            </div>
        )
    }
}
const h4Style = {
    padding:'1%', borderBottom:'3px solid #FDDAE1'
};

export default App;