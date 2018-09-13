import React,{Component} from 'react';
import SmartTextfield from "../../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import FontAwesome from "../../../../../Components/Common/FontAwesome/FontAwesome";
import classes from "./Scroll.css";
import ImageNormalCard from "../../../../../Components/Common/Cards/ImageNormalCard/ImageNormalCard";
import * as actionCreator from "../../../../../store/action";
import connect from "react-redux/es/connect/connect";

let value= 0;
class App extends Component{
    componentDidMount(){
        console.log(this.props.isAllUsers);
    }

    render(){
        let cards = null;
        const array = this.props.isAllUsers;
        cards = array.map((users, index) => {

            value=index;
            return <ImageNormalCard
                imgId={index} key={index}
                title={users.name}
                image={"http://localhost:8081/images/users/" + users.email + ".jpg"}
                first={users.email}
                second={users.country}
                third={users.number}
            />
        });

        return(
            <div>
                <div className="row">
                    <div className="col-sm-8">
                        <h5 style={h4Style}>View Users  <span className="badge badge-light" style={spanStyle}>{value+1}</span></h5>

                    </div>
                    <div className="col-sm-4" style={colStyle}>
                        <SmartTextfield
                            value={this.props.isRegEmail}
                            set={<FontAwesome name="search"/>} placeholder="Search User"
                            onChange={(event) => this.props.regEmailHandler(event.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.Scroll}>
                    <div className="row" style={{padding: '4%'}}>

                        {cards}
                    </div>
                </div>

            </div>
        )
    }
}
const spanStyle = {color: 'white',background:'cadetblue'}

const h4Style = {
    padding:'1%', borderBottom:'3px solid #FDDAE1'
};

const colStyle = {
    margin: '1% 0% 0% -1%'
};

const mapStateToProps = (state) => {
    return {
        isAllUsers:state.isAdminPanel.allUsers,
        isAllItems:state.isAdminPanel.allItems,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        regEmailHandler:(data) => dispatch(actionCreator.regEmail(data)),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);