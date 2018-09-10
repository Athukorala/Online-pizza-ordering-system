import React,{Component} from 'react';

const headStyle={background:'#FDD9B7',textAlign:'center'};

 export  default  class App extends Component{
    state ={

    }
    render(){
        return(
            <div className="card" style={{width: '18rem',background:'rgb(255, 249, 245)'}}>
                <div className="card-header" style={headStyle}>
                    {this.props.header}
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

}