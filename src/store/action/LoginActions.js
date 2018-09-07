import * as actionTypes from "./actionTypes";

export const loginHandler = (data) => {

    return {
        type: actionTypes.LOGIN_HANDLER,
        value: data
    }
};

export const registerPersonDetailsHandler = (data) => {

    return {
        type: actionTypes.REGISTER_PERSONDETAILS_HANDLER,
        value: data
    }
};

export const registerSocialMediaHandler = (data) => {

    return {
        type: actionTypes.REGISTER_SOCIALMEDIA_HANDLER,
        value: data
    }
};


export const registerPasswordHandler = (data) => {

    return {
        type: actionTypes.REGISTER_PASSWORDDETAILS_HANDLER,
        value: data
    }
};
