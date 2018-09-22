import React , {Component} from 'react';
import Radium from "radium";

class App extends Component{

    viewItem = () => {
        if(this.props.validation){
            alert("view item!")
        }
    };

    render(){
        return(
            <div onClick={this.viewItem} key={this.props.key} className="card" style={divStyle}>
                <img key={this.props.imgId} className="card-img-top" style={imageStyle}  src={this.props.image} alt="Card image cap"/>
                <div className="card-body" style={bodyStyle}>
                    <h5 style={{fontSize:'15px'}} className="card-title"><u>{this.props.title}</u></h5>
                    <small className="card-text">
                        {this.props.description}
                    </small>
                    <br/>
                    <small className="card-text">

                    </small>
                    <br/>
                    <small className="card-text">

                    </small>
                    <p className="card-text">

                    </p>
                </div>

            </div>
        )
    }
}
const bodyStyle = {
    background:'white',
    // ":hover":{
    //     boxShadow:'rgb(201, 201, 201) 0px 0px 20px 2px'
    // }
}

const imageStyle = {
    height:'150px', objectFit:'contain',background:'white'
};


const divStyle = {
    width: '12rem',marginLeft:'2%',marginBottom:'1%', cursor:'pointer',background:'white',
    ":hover":{
        boxShadow:'rgb(201, 201, 201) 0px 0px 20px 2px'
    }
};

export default Radium(App);