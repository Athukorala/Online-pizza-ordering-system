import React,{Component} from 'react';
import Radium from "radium";

class App extends Component{
    render(){
        return(
            <div className="card" style={divStyle}>
                <img className="card-img-top" style={imageStyle} src={this.props.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 style={{fontSize:'15px'}} className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.context}
                        </p>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <small>{this.props.first}</small>
                    </li>

                </ul>
                    <div className="card-body">
                        <a className="card-link"><small style={{color:'green'}}>{this.props.button1}</small></a>
                        <a className="card-link"><small style={{color:'orange'}}>{this.props.button2}</small></a>
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
    height:'150px', objectFit:'contain',background:'antiquewhite',

};

export default Radium(App);