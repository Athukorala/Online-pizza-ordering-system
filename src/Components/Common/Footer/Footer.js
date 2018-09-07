import React, {Component} from 'react';
import classes from './Footer.css';
import { Container,  Footer } from 'mdbreact';
class FooterPage extends Component{


    render(){
        return(
            <div className={classes.ftrDiv}>
                <Footer color="blue" className="font-small pt-4 mt-4">
                    <Container className="text-left">

                    </Container>

                    <div className="footer-copyright text-center" style={{marginTop:'-1%'}}>
                        <a target="_blank" rel="noopener noreferrer"  style={footerCopyrightStyle}> PIZZA (SPRING | REACT)</a><a style={{color:'white'}}> © 2018 All Rights Reserved</a>

                    </div>
                    <div style={{height:'20px'}}>

                    </div>
                </Footer>
            </div>
        );
    }
}


const footerCopyrightStyle = {color:'white'};



export default FooterPage;