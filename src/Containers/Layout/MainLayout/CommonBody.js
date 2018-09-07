import React, {Component} from 'react';
import pic1 from '../../../Content/Images/3.jpg';
import pic2 from '../../../Content/Images/5.jpg';
import pic3 from '../../../Content/Images/6.jpg';
import pic4 from '../../../Content/Images/4.jpg';
import pic5 from '../../../Content/Images/8.jpg';
import pic6 from '../../../Content/Images/7.jpg';
import RegisterPanel from "./RegisterPanel/RegisterPanel";

const imgStyle={
    height:'600px'
}


class App extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                            <img style={imgStyle} className="d-block w-100" src={pic1} alt="First slide"/>

                        </div>
                        <div className="carousel-item">
                            <img style={imgStyle} className="d-block w-100" src={pic2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={imgStyle} className="d-block w-100" src={pic3} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={imgStyle} className="d-block w-100" src={pic4} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={imgStyle} className="d-block w-100" src={pic5} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={imgStyle} className="d-block w-100" src={pic6} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>WELCOME TO OUR SERVICE</h5>
                                <p>........</p>
                            </div>
                        </div>
                    </div>
                    <a style={{outline: 'none', border: 'none'}} className="carousel-control-prev"
                       href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a style={{outline: 'none', border: 'none'}} className="carousel-control-next"
                       href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/*---- register process ---*/}

                <RegisterPanel/>
            </div>

        );
    }
}

export default App;
