import * as actionTypes from "./actionTypes";

export const adminItemHandler = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL_ITEM,
        value: data
    }
};

export const adminChefHandler = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL_CHEF,
        value: data
    }
};

export const adminUserHandler = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL_USER,
        value: data
    }
};

export const adminOrdersHandler = (data) => {
    return {
        type: actionTypes.ADMIN_PANEL_ORDERS,
        value: data
    }
};

export const adminViewUserHandler = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL_USER_VIEWER,
        value: data
    }
};

export const adminViewItemHandler = (data) => {

    return {
        type: actionTypes.ADMIN_PANEL_ITEM_VIEWER,
        value: data
    }
};




