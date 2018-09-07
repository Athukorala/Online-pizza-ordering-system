import React, {Component} from 'react';
import Radium from 'radium';

class App extends Component {
    render() {
        return (
            <div>
                <a type={this.props.btnType} className="btn btn-primary" onClick={this.props.onClick}
                        data-toggle={this.props.toggle} data-target={this.props.target}
                        href={this.props.href}
                        style={{
                            width: this.props.width ? this.props.width : '100%',
                            // borderRadius: '25px',
                            height: this.props.height ? this.props.height : '40px',
                            // backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#00C853',
                            background: this.props.background ? this.props.background : 'linear-gradient(to left, #ed4264, #ffedbc)',
                            // borderColor: this.props.backgroundColor ? '#abebab' : '#00C853',
                            color: this.props.color ? this.props.color : 'white',
                            borderColor: this.props.backgroundColor ? '#abebab' : 'white',
                            outline: 'none',
                            marginBottom: '5%',
                            boxShadow:'none',
                            border:'none',
                            ":hover": {
                                background: '#FFEFC9',color:'black',border:'1px solid #F16A84'
                            }

                        }} >{this.props.children}</a>
            </div>

        )
    }

}

export default Radium(App);