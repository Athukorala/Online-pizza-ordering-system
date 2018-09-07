import * as actionTypes from '../action/actionTypes';

const initialState = {
    login:false,
    registerPersonDetails:false,
    registerPasswordDetails:false,
    registerSocialMediaDetails:false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.LOGIN_HANDLER:
            return {
                ...state,
                login:action.value,
                registerPersonDetails:false,
                registerPasswordDetails:false,
                registerSocialMediaDetails:false
            };

        case actionTypes.REGISTER_PERSONDETAILS_HANDLER:
            return {
                ...state,
                registerPersonDetails:action.value,
                login:false,
                registerPasswordDetails:false,
                registerSocialMediaDetails:false
            };

        case actionTypes.REGISTER_PASSWORDDETAILS_HANDLER:
            return {
                ...state,
                registerPasswordDetails:action.value,
                login:false,
                registerPersonDetails:false,
                registerSocialMediaDetails:false
            };

        case actionTypes.REGISTER_SOCIALMEDIA_HANDLER:
            return {
                ...state,
                registerSocialMediaDetails:action.value,
                login:false,
                registerPersonDetails:false,
                registerPasswordDetails:false
            };

        default:
            return state;
    }
};

export default reducer;