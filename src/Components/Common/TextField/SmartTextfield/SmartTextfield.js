import React, {Component} from 'react';

const textStyle={
    background: '#f58573',
    border: '1px solid #f58573',
    color: 'white'
};

class App extends Component {
    render() {
        return (
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text" style={textStyle}>
                        {/*apend icon--*/}
                        {this.props.set}
                    </div>
                </div>
                <input className="form-control"
                       id={this.props.id}
                       placeholder={this.props.placeholder}

                       style={{
                           color: this.props.color ? this.props.color : 'black',
                           width: this.props.width ? this.props.width : '50%',
                           marginTop: this.props.marginTop ? this.props.marginTop : '0%',
                           height: this.props.height ? this.props.height : '38px',
                           border: '1px solid #f58573',
                           boxShadow: 'none',
                           background: this.props.background ? this.props.background : 'white'
                       }}
                       disabled={this.props.disabled}
                       onChange={this.props.onChange}
                       value={this.props.value}
                       type={this.props.type}
                />
            </div>

        )
    }

}

export default App;