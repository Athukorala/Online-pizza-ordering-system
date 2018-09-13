import React,{Component} from 'react';
import Radium from "radium";

class App extends Component{
    render(){
        return(
            <div key={this.props.key} className="card" style={divStyle}>
                <img key={this.props.imgId} className="card-img-top" style={imageStyle}  src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 style={{fontSize:'15px'}} className="card-title">{this.props.title}</h5>
                    <small className="card-text">
                        {this.props.first}
                    </small>
                    <br/>
                    <small className="card-text">
                        {this.props.second}
                    </small>
                    <br/>
                    <small className="card-text">
                        {this.props.third}
                    </small>
                    <p className="card-text">
                        {this.props.fourth}
                    </p>
                </div>

            </div>
        )
    }

}
const divStyle = {
    width: '12rem',marginLeft:'2%',marginBottom:'1%',
    ":hover":{
        boxShadow:'rgb(201, 201, 201) 0px 0px 20px 2px'
    }
};

const imageStyle = {
    height:'150px', objectFit:'contain',background:'antiquewhite'
};

export default Radium(App);