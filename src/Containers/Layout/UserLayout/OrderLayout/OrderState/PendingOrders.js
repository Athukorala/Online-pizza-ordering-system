import React,{Component} from 'react';
import ImageCard from "../../../../../Components/Common/Cards/ImageCard/ImageCard";

class App extends Component{
    render(){
        return(
            <div className="row" style={{padding: '4%'}}>
                <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                           image="images/6.jpg" button1="VIEW" button2="TRACK ORDER"/>
                <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                           image="images/3.jpg" button1="VIEW" button2="TRACK ORDER"/>
                <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                           image="images/4.jpg" button1="VIEW" button2="TRACK ORDER"/>
                <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                           image="images/5.jpg" button1="VIEW" button2="TRACK ORDER"/>
                <ImageCard first="Contrary to popular belief not simply random text" title="2018-10-18"
                           image="images/5.jpg" button1="VIEW" button2="TRACK ORDER"/>
            </div>
        )
    }
}

export default App;