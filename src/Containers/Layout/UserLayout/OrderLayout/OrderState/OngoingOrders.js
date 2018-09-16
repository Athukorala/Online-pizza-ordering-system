import React,{Component} from 'react';
import emptyPng from "../../../../../Content/Images/emptyImage.jpg"

class App extends Component{
    render(){
        return(
            <div className="row" style={{padding: '4%'}}>

                <img key="1" className="card-img-top" style={imageStyle}  src={emptyPng} alt="Card image cap"/>

            </div>
        )
    }
}

const imageStyle = {
    height:'225px',width:'300px',marginLeft:'32%'
};




export default App;