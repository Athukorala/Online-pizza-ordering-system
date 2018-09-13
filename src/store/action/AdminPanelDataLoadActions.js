import * as actionTypes from "./actionTypes";
import userAxios from '../../axios/axios-user';

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

export const allItems = () => {
    return dispatch => {

        axiosAdmin.get(`GetRequestInfluencers`)
            .then(response => {

                const usersArray = [];

                if (response.data.length >= 0) {
                    const array = response.data;
                    array.map((mail, index) => {

                        const obj = {
                            email: mail.Email,
                            date: index,
                        }

                        usersArray.push(obj);

                    });

                }
                dispatch(setItemsValues(usersArray))
            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(setItemsValues(arr))
                console.log("error occured : " + error);

            });
    }
}


export const setItemsValues = (data) => {

    return {
        type: actionTypes.ALL_ITEMS,
        value: data
    }
};
