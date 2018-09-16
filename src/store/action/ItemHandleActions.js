import * as actionTypes from "./actionTypes";

export const itemName = (data) => {
    return {
        type: actionTypes.ITEM_NAME,
        value: data
    }
};

export const itemDescription = (data) => {

    return {
        type: actionTypes.ITEM_DESCRIPTION,
        value: data
    }
};

export const itemType = (data) => {

    return {
        type: actionTypes.ITEM_TYPE,
        value: data
    }
};

export const itemMediumPrice = (data) => {

    return {
        type: actionTypes.ITEM_MEDIUM_PRICE,
        value: data
    }
};

export const itemSmallPrice = (data) => {

    return {
        type: actionTypes.ITEM_SMALL_PRICE,
        value: data
    }
};

export const itemLargePrice = (data) => {

    return {
        type: actionTypes.ITEM_LARGE_PRICE,
        value: data
    }
};
