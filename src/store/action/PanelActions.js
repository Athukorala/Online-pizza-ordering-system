import * as actionTypes from "./actionTypes";

export const mainPanelHandle = (data) => {

    return {
        type: actionTypes.MAIN_PANEL,
        value: data
    }
};

export const adminPanelHandle = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL,
        value: data
    }
};

export const userPanelHandle = (data) => {

    return {
        type: actionTypes.USER_PANEL,
        value: data
    }
};
