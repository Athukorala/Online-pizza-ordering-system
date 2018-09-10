import * as actionTypes from '../action/actionTypes';

const initialState = {
    mainPanel:true,
    adminPanel:false,
    userPanel:false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.MAIN_PANEL:
            return {
                ...state,
                mainPanel:true,
                adminPanel:false,
                userPanel:false
            };

        case actionTypes.ADMIN_PANEL:
            return {
                ...state,
                mainPanel:false,
                adminPanel:true,
                userPanel:false
            };
        case actionTypes.USER_PANEL:
            return {
                ...state,
                mainPanel:false,
                adminPanel:false,
                userPanel:true
            };
        default:
            return state;
    }
};

export default reducer;