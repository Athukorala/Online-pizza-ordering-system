import React, {Component} from 'react';

const circleStyle = {
    height: '150px',
    textAlign: 'center', fontSize: '18px', backgroundColor: '#ed4264',
    width: '150px', borderRadius: '90px', padding: '15%'
};

const colStyle = {
    paddingLeft: '5%'
};

const h5Style={marginLeft:'15%'};

class App extends Component {
    render() {
        return (
            <div>
                <section style={{padding:'70px 0',overflow:'hidden',background: 'linear-gradient(180deg, rgba(255,255,255,0) 60%, #fff),linear-gradient(70deg,    #FCD1D9 32%, #ebfff0)'}}>
                    <center><h1 style={{marginTop: '3%', marginBottom: '2%',width:'50%',borderBottom:'5px solid #FCD1D9'}}>WHY CHOOSE US</h1></center>
                    <div className="row" style={{margin: '0'}}>

                        <div className="col-sm-3">

                        </div>

                        <div className="col-sm-6">
                            <h5>here are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators
                            </h5>

                        </div>

                        <div className="col-sm-3">
                            <h1></h1>

                        </div>

                    </div>
                </section>
                <section  style={{padding:'70px 0',overflow:'hidden'}}>
                    <center><h1 style={{marginTop: '3%', marginBottom: '5%',width:'50%',borderBottom:'5px solid #FCD1D9'}}>HOW IT WORKS</h1></center>
                    <div className="row" style={{margin: '0'}}>

                        <div className="col-sm-3" style={colStyle}>
                            <h5 style={h5Style}>STEP 01</h5>
                            <h1 style={circleStyle}>CREATE ORDER</h1>

                        </div>

                        <div className="col-sm-3" style={colStyle}>
                            <h5 style={h5Style}>STEP 02</h5>
                            <h1 style={circleStyle}>GET DELIVERED</h1>

                        </div>

                        <div className="col-sm-3" style={colStyle}>
                            <h5 style={h5Style}>STEP 03</h5>
                            <h1 style={circleStyle}>CREATE ORDER</h1>

                        </div>
                        <div className="col-sm-3" style={colStyle}>
                            <h5 style={h5Style}>STEP 04</h5>
                            <h1 style={circleStyle}>CREATE ORDER</h1>

                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default App;
