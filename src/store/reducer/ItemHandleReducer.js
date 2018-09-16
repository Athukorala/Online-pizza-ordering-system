import * as actionTypes from '../action/actionTypes';

const initialState = {
    itemname:'',
    itemdescription:'',
    itemtype:'none',
    itemsmall:'',
    itemmedium:'',
    itemlarge:'',
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.ITEM_NAME:
            return {
                ...state,
                itemname: action.value
            };

        case actionTypes.ITEM_DESCRIPTION:
            return {
                ...state,
                itemdescription: action.value
            };

        case actionTypes.ITEM_TYPE:
            return {
                ...state,
                itemtype: action.value
            };

        case actionTypes.ITEM_MEDIUM_PRICE:
            return {
                ...state,
                itemmedium: action.value
            };
        case actionTypes.ITEM_SMALL_PRICE:
            return {
                ...state,
                itemsmall: action.value
            };
        case actionTypes.ITEM_LARGE_PRICE:
            return {
                ...state,
                itemlarge: action.value
            };

        default:
            return state;
    }
};

export default reducer;