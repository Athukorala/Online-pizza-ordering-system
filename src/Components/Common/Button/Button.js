import React, {Component} from 'react';
import Radium from 'radium';

class App extends Component {
    render() {
        return (
            <div>
                <a type={this.props.btnType}
                   id={this.props.id}
                   className="btn btn-primary"
                   onClick={this.props.onClick}
                   data-toggle={this.props.toggle}
                   data-target={this.props.target}
                   href={this.props.href}
                   disabled={this.props.disabled}
                   data-tip data-for={this.props.tooltip}
                   style={{
                       width: this.props.width ? this.props.width : '100%',
                       height: this.props.height ? this.props.height : '40px',
                       // backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#00C853',
                       background: this.props.background ? this.props.background : 'linear-gradient(to left, #ed4264, #ffedbc)',
                       // borderColor: this.props.backgroundColor ? '#abebab' : '#00C853',
                       color: this.props.color ? this.props.color : 'white',
                       outline: 'none',
                       marginBottom: this.props.marginBottom ? this.props.marginBottom : '0%',
                       marginTop: this.props.marginTop,
                       boxShadow: 'none',
                       border: '1px solid white',
                       ":hover": {
                           background: '#FFEFC9', color: 'black', border: '1px solid #F16A84'
                       }

                   }}>{this.props.children}</a>
            </div>

        )
    }

}

export default Radium(App);