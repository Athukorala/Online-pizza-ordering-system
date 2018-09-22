import React,{Component} from 'react';

class App extends Component{
    render(){
        return(
            <div
                className={this.props.className}
                style={{
                    border: this.props.border,
                    borderRadius: this.props.borderRadius ? this.props.borderRadius : "7px",
                    padding:this.props.padding,
                    height: this.props.height? this.props.height : '250px',
                    background: this.props.background? this.props.background : 'white',
                    overflowX:'hidden'
                }}>
                {this.props.children}

            </div>
        )
    }
}

export default App;