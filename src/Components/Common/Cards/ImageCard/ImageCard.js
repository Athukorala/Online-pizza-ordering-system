import React,{Component} from 'react';

export default class App extends Component{
    render(){
        return(
            <div className="card" style={{width: '12rem',marginLeft:'2%',marginBottom:'1%'}}>
                <img className="card-img-top"  src={this.props.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 style={{fontSize:'15px'}} className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.context}
                        </p>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <small>{this.props.first}</small>
                    </li>

                </ul>
                    <div className="card-body">
                        <a className="card-link"><small style={{color:'green'}}>{this.props.button1}</small></a>
                        <a className="card-link"><small style={{color:'orange'}}>{this.props.button2}</small></a>
                    </div>
            </div>
        )
    }

}