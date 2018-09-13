import * as actionTypes from '../action/actionTypes';

const initialState = {
    admin_panel_item:true,
    admin_panel_chef:false,
    admin_panel_user:false,

    allItems:[],
    allChefs:[],
    allUsers:[]
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.ADMIN_PANEL_ITEM:
            return {
                ...state,
                admin_panel_item:true,
                admin_panel_chef:false,
                admin_panel_user:false
            };

        case actionTypes.ADMIN_PANEL_USER:
            return {
                ...state,
                admin_panel_item:false,
                admin_panel_chef:false,
                admin_panel_user:true
            };
        case actionTypes.ADMIN_PANEL_CHEF:
            return {
                ...state,
                admin_panel_item:false,
                admin_panel_chef:true,
                admin_panel_user:false
            };
            //----------------------

        case actionTypes.ALL_USERS:
            return {
                ...state,
                allUsers: action.value
            };

        case actionTypes.ALL_ITEMS:
            return {
                ...state,
                allItems: action.value
            };

        default:
            return state;
    }
};

export default reducer;