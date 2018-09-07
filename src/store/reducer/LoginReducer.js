import * as actionTypes from '../action/actionTypes';

const initialState = {
    login:false,
    register:false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.LOGIN_HANDLER:
            return {
                ...state,
                login:action.value,
                register:false
            };

        case actionTypes.REGISTER_HANDLER:
            return {
                ...state,
                login:false,
                register:action.value
            };

        default:
            return state;
    }
};

export default reducer;