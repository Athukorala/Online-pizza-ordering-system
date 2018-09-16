import React, {Component} from 'react';
import ImageUpload from "../../../../../../Components/Common/ImageUpload/ImagUpload";
import SmartTextfield from "../../../../../../Components/Common/TextField/SmartTextfield/SmartTextfield";
import Button from "../../../../../../Components/Common/Button/Button";
import classes from "./Scrollable.css";
import Radium from "radium";
import * as actionCreator from "../../../../../../store/action";
import connect from "react-redux/es/connect/connect";
import ReactTooltip from "react-tooltip";
import sweet from "sweetalert";
import itemAxios from "../../../../../../axios/axios-item";
import uploadAxios from "../../../../../../axios/axios-imageupload";

const optionStyle = { boxShadow:'none' };
const bodyFormData = new FormData();

class App extends Component {

    state = {
        comboItems: [
            {"id":1,"itemName":"Classic"},{"id":2,"itemName":"Signature"},{"id":3,"itemName":"Favourite"},{"id":4,"itemName":"Supreme"}
        ],
        disable: true
    };

    componentWillUnmount(){
        this.props.itemTypeHandler("none");
        this.props.imageHandler([]);
    }

    componentDidUpdate(){
        // console.log("image: "+this.props.image);
        // console.log("name: "+this.props.itemName);
        // console.log("des: "+this.props.itemDescription);
        // console.log("type: "+this.props.itemType);
        // console.log("medium: "+this.props.itemMedium);
        // console.log("small: "+this.props.itemSmall);
        // console.log("large: "+this.props.itemLarge);

        if(this.props.image.length !==0 && this.props.itemType !== 'none' &&
            this.props.itemName !=='' && this.props.itemDescription !==''
            && this.props.itemMedium !=='' && this.props.itemSmall !=='' && this.props.itemLarge !==''){

            this.setState({
                disable:false
            })

        }else{
            this.setState({
                disable:true
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            (this.props.itemName !== nextProps.itemName) ||
            (this.props.itemDescription !== nextProps.itemDescription) ||
            (this.props.itemMedium !== nextProps.itemMedium) ||
            (this.props.itemSmall !== nextProps.itemSmall) ||
            (this.props.image !== nextProps.image) ||
            (this.props.itemType !== nextProps.itemType) ||
            (this.state.disable !== nextState.disable) ||
            (this.props.itemLarge !== nextProps.itemLarge))
    }

    // imageSave = () => {
    //
    //     bodyFormData.set("file", this.props.image);
    //     const obj = {
    //         "file":bodyFormData,
    //         "name":
    //     };
    //     uploadAxios.post(`/item`, obj)
    //         .then(response => {
    //             console.log(response)
    //         })
    //
    //         .catch(error => {
    //             console.log("error: " + error)
    //         });
    //
    // };

    sumbit = () => {
        bodyFormData.set("file", this.props.image);

        uploadAxios.post(`/item/`+this.props.itemName, bodyFormData)
            .then(response => {
                console.log(response)
            })

            .catch(error => {
                console.log("error: " + error)
            });
        if(!this.state.disable){
            const itemObj={
                "code": 0,
                "name": this.props.itemName,
                "description": this.props.itemDescription,
                "type": this.props.itemType,
                "small": this.props.itemSmall,
                "medium": this.props.itemMedium,
                "large": this.props.itemLarge
            };

            itemAxios.put(`items`, itemObj)
                .then(response => {

                    if (response.status === 200) {

                        this.clearRedux();

                        sweet("Item Added!","", {
                            icon: "success",
                            buttons: {

                                catch: {
                                    text: "Okay",
                                    value: "catch",
                                }
                            },
                        })
                            .then((value) => {
                                switch (value) {
                                    case "catch":
                                        break;
                                }
                            });


                    } else {
                        sweet({
                            text: "Failed!",
                            icon: "warning",
                            button: "Okay!",
                        });
                    }
                    ``
                })
                .catch(error => {
                    console.log(error)
                    sweet({
                        text: "Failed!",
                        icon: "warning",
                        button: "Okay!",
                    });
                });

        }else{
            sweet({
                text: 'Please fill all fields, select item type and choose image',
                icon: "warning",
                button: "Okay!",
            })
        }
    };

    clearRedux = () => {
        this.props.itemNameHandler("");
        this.props.itemDesHandler("");
        this.props.itemSmallHandler("");
        this.props.itemMediumHandler("");
        this.props.itemLargeHandler("");
    };

    render() {
        let icon = <i className="fa fa-pencil" aria-hidden="true"/>;

        let options = this.state.comboItems.map((row, index) => (
            <option style={optionStyle} key={index}>
                {row.itemName}
            </option>
        ));

        return (
            <div className={classes.Scroll}>
                <div className="row">

                    {/*image viewer ---*/}
                    <div className="col-sm-4">
                        <label style={{marginLeft: '32%'}} htmlFor="userName">Choose image</label>
                        <ImageUpload white={true}/>

                    </div>

                    <div className="col-sm-6">
                        <div className="form-group" style={{marginTop: '1%'}}>

                            <label htmlFor="userName">Item Name</label>
                            <SmartTextfield set={icon}
                                            value={this.props.itemName}
                                            onChange={(event) => this.props.itemNameHandler(event.target.value)}
                                            id="itemName"
                                            placeholder="Item name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Description</label>
                            <textarea onChange={(event) => this.props.itemDesHandler(event.target.value)}
                                      value={this.props.itemDescription}
                                      className="form-control"
                                      style={{boxShadow: 'none', border: '1px solid #f58573', color: 'black'}}
                                      placeholder="Description" id="description" rows="2">
                            </textarea>
                        </div>

                        <label htmlFor="userName">Enter prices</label>
                        <div className="row">

                            <div className="col-sm-4">
                                <div className="form-group">

                                    <SmartTextfield
                                        type="number"
                                        fontSize="12px"
                                        set={"s"}
                                        value={this.props.itemSmall}
                                        onChange={(event) => this.props.itemSmallHandler(event.target.value)}
                                        id="userName"
                                        placeholder="Small price"/>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">

                                    <SmartTextfield
                                        type="number"
                                        fontSize="12px"
                                        set={"m"}
                                        value={this.props.itemMedium}
                                        onChange={(event) => this.props.itemMediumHandler(event.target.value)}
                                        id="userName"
                                        placeholder="Medium"/>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">

                                    <SmartTextfield
                                        type="number"
                                        fontSize="12px"
                                        set={"l"}
                                        value={this.props.itemLarge}
                                        onChange={(event) => this.props.itemLargeHandler(event.target.value)}
                                        id="largePrice"
                                        placeholder="Large price"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">Select type</label>
                            <select onChange={(event) => this.idChange(event)} className="form-control" id="example1"
                                    style={selectStyle}>
                                <option style={selectStyle} key="none">
                                    none
                                </option>
                                {options}

                            </select>
                        </div>
                        <Button
                            tooltip="submitButton"
                            marginTop="2%"
                            width="50%"
                            onClick={this.sumbit}>CREATE ITEM</Button>
                    </div>

                    <div className="col-sm-2"/>
                </div>
                <ReactTooltip id='submitButton' type='error' disable={!this.state.disable}>
                    <span>Please fill all fields, select item type and choose your image</span>
                </ReactTooltip>
            </div>
        )
    }

    idChange = (event) => {
        console.log(event.target.value);
        this.props.itemTypeHandler(event.target.value);

    };
}
const selectStyle = {
    width: '50%',
    height: '34px',
    boxShadow:'none',
    border:'1px solid rgb(245, 133, 115)'
};

const h4Style = {
    padding: '1%', borderBottom: '3px solid #FDDAE1'
};

const mapStateToProps = (state) => {

    return {
        image: state.isImageReducer.image,
        itemName: state.isItemHandle.itemname,
        itemDescription: state.isItemHandle.itemdescription,
        itemType: state.isItemHandle.itemtype,
        itemMedium: state.isItemHandle.itemmedium,
        itemSmall: state.isItemHandle.itemsmall,
        itemLarge: state.isItemHandle.itemlarge,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // items handle
        itemNameHandler: (data) => dispatch(actionCreator.itemName(data)),
        itemDesHandler: (data) => dispatch(actionCreator.itemDescription(data)),
        itemTypeHandler: (data) => dispatch(actionCreator.itemType(data)),
        itemSmallHandler: (data) => dispatch(actionCreator.itemSmallPrice(data)),
        itemMediumHandler: (data) => dispatch(actionCreator.itemMediumPrice(data)),
        itemLargeHandler: (data) => dispatch(actionCreator.itemLargePrice(data)),

        imageHandler: (image) => dispatch(actionCreator.imageHandler(image)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));