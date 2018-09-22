import React, {Component} from 'react';
import ScrollableDiv from "../../../../Components/Common/ScrollableDiv/ScrollableDiv";
import * as actionCreator from "../../../../store/action";
import connect from "react-redux/es/connect/connect";
import notFound from "../../../../Content/Images/notFound.png";
import * as axiosPublic from "../../../../axios/axios-public";
import ItemCard from "../../../../Components/Common/Cards/ItemCard/ItemCard";

let classicNo = -1;
let signatureNo = -1;
let favouriteNo = -1;
let supremeNo = -1;

class App extends Component {
    state = {
        classicPizza: [],
        signaturePizza: [],
        favouritPizza: [],
        supremePizza: []
    };

    componentDidMount() {
        this.forceUpdate();
        this.fillingData();
    }

    shouldComponentUpdate(nextProps, nextState) {

        return (
            (this.props.isAllItems !== nextProps.isAllItems) ||
            (this.state.classicPizza === nextState.classicPizza) ||
            (this.state.signaturePizza === nextState.signaturePizza) ||
            (this.state.favouritPizza === nextState.favouritPizza) ||
            (this.state.supremePizza === nextState.supremePizza)
        )
    }

    componentDidUpdate() {
        this.fillingData();
    }

    fillingData = () => {

        const array = this.props.isAllItems;
        const classicArray = [];
        const signArray = [];
        const favourArray = [];
        const supremeArray = [];
        array.map((pizza, index) => {

            if (pizza === "Can't load...Network Error!") {
                console.log("error")
            } else {
                if (pizza.type === "Classic") {
                    classicArray.push(pizza)
                }
                if (pizza.type === "Signature") {
                    signArray.push(pizza)
                }
                if (pizza.type === "Favourite") {
                    favourArray.push(pizza)
                }
                if (pizza.type === "Supreme") {
                    supremeArray.push(pizza)
                }
            }
            this.setState({
                classicPizza: classicArray,
                signaturePizza: signArray,
                favouritPizza: favourArray,
                supremePizza: supremeArray
            })
        });
    };

    render() {

        // classic
        const classicArray = this.state.classicPizza;
        let classicCard = classicArray.map((pizza, index) => {
            if (pizza === "Can't load...Network Error!") {
                classicNo = -1;
                return <ItemCard
                    validation={false}
                    imgId={index} key={index}
                    image={notFound}
                    title="Can't load...Network Error!"/>
            } else {
                classicNo = index;
                return <ItemCard
                    validation={true}
                    itemObj={pizza}
                    imgId={index} key={index}
                    title={pizza.name}
                    image={axiosPublic.PUBLIC_URL + "/images/items/" + pizza.name + ".jpg"}
                    description={pizza.description}
                />
            }

        });

        //signature
        const signArray = this.state.signaturePizza;
        let signatureCard = signArray.map((pizza, index) => {
            if (pizza === "Can't load...Network Error!") {
                signatureNo = -1;
                return <ItemCard
                    validation={false}
                    imgId={index} key={index}
                    image={notFound}
                    title="Can't load...Network Error!"/>
            } else {
                signatureNo = index;
                return <ItemCard
                    validation={true}
                    itemObj={pizza}
                    imgId={index} key={index}
                    title={pizza.name}
                    image={axiosPublic.PUBLIC_URL + "/images/items/" + pizza.name + ".jpg"}
                    description={pizza.description}
                />
            }

        });

        //favourite
        const favouriteArray = this.state.favouritPizza;
        let favouriteCard = favouriteArray.map((pizza, index) => {
            if (pizza === "Can't load...Network Error!") {
                favouriteNo = -1;
                return <ItemCard
                    validation={false}
                    imgId={index} key={index}
                    image={notFound}
                    title="Can't load...Network Error!"/>
            } else {
                favouriteNo = index;
                return <ItemCard
                    validation={true}
                    itemObj={pizza}
                    imgId={index} key={index}
                    title={pizza.name}
                    image={axiosPublic.PUBLIC_URL + "/images/items/" + pizza.name + ".jpg"}
                    description={pizza.description}
                />
            }

        });


        //supreme
        const supremeArray = this.state.supremePizza;
        let supremeCard = supremeArray.map((pizza, index) => {
            if (pizza === "Can't load...Network Error!") {
                supremeNo = -1;
                return <ItemCard
                    validation={false}
                    imgId={index} key={index}
                    image={notFound}
                    title="Can't load...Network Error!"/>
            } else {
                supremeNo = index;
                return <ItemCard
                    validation={true}
                    itemObj={pizza}
                    imgId={index} key={index}
                    title={pizza.name}
                    image={axiosPublic.PUBLIC_URL + "/images/items/" + pizza.name + ".jpg"}
                    description={pizza.description}
                />
            }

        });

        return (
            <div>
                <h6>Classic
                    <span className="badge badge-light" style={badgeStyle}>{classicNo + 1}</span>
                </h6>

                <ScrollableDiv border="1px solid #E5C69F" padding="0% 0% 0% 4%" className="row" background="transparent">
                    {classicCard}
                </ScrollableDiv>

                <h6 style={h6Styel}>Signature
                    <span className="badge badge-light" style={badgeStyle}>{signatureNo + 1}</span>
                </h6>

                <ScrollableDiv border="1px solid #E5C69F" padding="0% 0% 0% 4%" className="row" background="transparent">
                    {signatureCard}
                </ScrollableDiv>

                <h6 style={h6Styel}>Favourite
                    <span className="badge badge-light" style={badgeStyle}>{favouriteNo + 1}</span>
                </h6>

                <ScrollableDiv border="1px solid #E5C69F" padding="0% 0% 0% 4%" className="row" background="transparent">
                    {favouriteCard}
                </ScrollableDiv>

                <h6 style={h6Styel}>Supreme
                    <span className="badge badge-light" style={badgeStyle}>{supremeNo + 1}</span>
                </h6>

                <ScrollableDiv border="1px solid #E5C69F" padding="0% 0% 0% 4%" className="row" background="transparent">
                    {supremeCard}
                </ScrollableDiv>
            </div>
        )
    }
}
const badgeStyle ={color: 'red'};
const h6Styel = {marginTop:'4%'};

const mapStateToProps = (state) => {
    return {
        isAllItems: state.isAdminPanel.allItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        regEmailHandler: (data) => dispatch(actionCreator.regEmail(data)),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);