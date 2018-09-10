import React, { Component } from 'react';

const mainDivStyle = {
    padding:'10% 2% 2%',
    background:'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255)), linear-gradient(70deg, #ffe0cc 32%, rgb(235, 255, 240))'

};

class App extends Component {
    render() {
        return (
            <div style={mainDivStyle}>
                <h5>Admin body</h5>

            </div>
        );
    }
}

export default App;
