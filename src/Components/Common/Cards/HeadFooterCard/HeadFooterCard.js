import React,{Component} from 'react';

const headStyle={background:'#F9B196'}
const bodyStyle = {
    background: '#FFF9F5', paddingLeft:'20%', textAlign:'left', fontSize:'14px'
};

const footerStyle = {color:'black',fontSize: '12px'};

export default class App extends Component{
    state={

    }
    render(){
        return(
            <div className="card text-center"  style={{width: '18rem'}}>
                <div className="card-header" style={headStyle}>
                    {this.props.head}
                </div>
                <div className="card-body" style={bodyStyle}>
                    {this.props.children}
                </div>
                <div className="card-footer text-muted" style={headStyle}>
                    <span style={footerStyle}>{this.props.footer}</span>
                </div>
            </div>
        )
    }
}