import * as actionTypes from '../action/actionTypes';

const initialState = {

    regEmail: '',
    regName: '',
    regAddress: '',
    regBday: '',
    regCountry: '',
    regNumber: '',
    regPassword: '',
    regInstagram: '',
    regTwitter: '',
    regFb: ''

};

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.REG_EMAIL:
            return {
                ...state,
                regEmail: action.value,
            };
        case actionTypes.REG_NAME:
            return {
                ...state,
                regName: action.value,
            };
        case actionTypes.REG_ADDRESS:
            return {
                ...state,
                regAddress: action.value,
            };
        case actionTypes.REG_BDAY:
            return {
                ...state,
                regBday: action.value,
            };
        case actionTypes.REG_COUNTRY:
            return {
                ...state,
                regCountry: action.value,
            };
        case actionTypes.REG_NUMBER:
            return {
                ...state,
                regNumber: action.value,
            };
        case actionTypes.REG_PASSWORD:
            return {
                ...state,
                regPassword: action.value,
            };
        case actionTypes.REG_INSTAGRAM:
            return {
                ...state,
                regInstagram: action.value,
            };
        case actionTypes.REG_FB:
            return {
                ...state,
                regFb: action.value,
            };
        case actionTypes.REG_TWITTER:
            return {
                ...state,
                regTwitter: action.value,
            };

        default:
            return state;
    }
};

export default reducer;