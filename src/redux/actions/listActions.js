import { LIST_ADD, LIST_ALL, LOGOUT } from '../../constants/ListConstants';
export const addList = (data) => async (dispatch, getState) => {
    console.log('data1', data);
    dispatch({
        type: LIST_ADD,
        payload: data,
    });
    // save to local storage as listItems
    // localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};

// export const setItemList = (data) => async (dispatch, getState) => {
//     console.log('DATA: ', data);
//     await fetch('https://jsonplaceholder.typicode.com/users/1/todos', data)
//         .then((res) => res.json())

//         .then((result) => {
//             console.log('RESULT: ', result);
//             dispatch({
//                 type: ITEM_ADD,
//                 payload: {
//                     userId: result.userId,
//                     id: result.id,
//                     title: result.title,
//                     completed: false,
//                 },
//             });
//         });
// };

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

//  add
// export const handleEditSubmit = (title) => async (dispatch, getState) => {
//     dispatch({
//         type: LIST_UPDATE_TODO,
//         payload: {
//             title: title,
//             complete: false,
//         },
//     });
//     // localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
// };

// export const handleUpdateEditSubmit = (title) => async (dispatch, getState) => {
//     dispatch({
//         type: LIST_EDIT_TODO,
//         payload: title,
//     });
//     // localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
// };
// logout
export const handleLogoutUser = (title) => async (dispatch, getState) => {
    dispatch({
        type: LOGOUT,
    });
    // localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};
