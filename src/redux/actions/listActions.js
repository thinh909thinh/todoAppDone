import { LIST_ADD, LIST_ALL, LOGOUT } from '../../constants/ListConstants';
export const addList = (data) => async (dispatch, getState) => {
    console.log('data1', data);
    dispatch({
        type: LIST_ADD,
        payload: data,
    });
};

export const getAll = () => async (dispatch, getState) => {
    await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((res) => res.json())
        .then((result) => {
            dispatch({
                type: LIST_ALL,
                payload: result,
            });
        });
};

// logout
export const handleLogoutUser = (title) => async (dispatch, getState) => {
    dispatch({
        type: LOGOUT,
    });
};
