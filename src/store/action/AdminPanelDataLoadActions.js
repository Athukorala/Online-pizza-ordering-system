import * as actionTypes from "./actionTypes";
import userAxios from '../../axios/axios-user';
import itemAxios from '../../axios/axios-item';

export const allUsers = () => {
    return dispatch => {

        userAxios.get(`users`)
            .then(response => {
                console.log(response);

                const usersArray = [];

                if (response.data.length >= 0) {
                    const array = response.data;
                    dispatch(setUserValues(array))
                }

            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(setUserValues(arr))
                console.log("error occured : " + error);

            });
    }
}


export const setUserValues = (data) => {

    return {
        type: actionTypes.ALL_USERS,
        value: data
    }
};

export const setItemsValues = (data) => {

    return {
        type: actionTypes.ALL_ITEMS,
        value: data
    }
};

export const allItems = () => {
    return dispatch => {

        itemAxios.get(`items`)
            .then(response => {
                console.log(response);

                if (response.data.length >= 0) {
                    const array = response.data;
                    dispatch(setItemsValues(array))
                }

            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(setItemsValues(arr))
                console.log("error occured : " + error);

            });
    }
};
