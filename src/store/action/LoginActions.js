import * as actionTypes from "./actionTypes";

export const loginHandler = (data) => {

    return {
        type: actionTypes.LOGIN_HANDLER,
        value: data
    }
};

export const registerHandler = (data) => {

    return {
        type: actionTypes.REGISTER_HANDLER,
        value: data
    }
};
