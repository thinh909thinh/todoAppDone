import { LIST_ADD, LIST_ALL, LOGOUT } from '../../constants/ListConstants';

export const listReducer = (state = { todoList: [], checkUserLogin: false }, action) => {
    switch (action.type) {
        case LIST_ALL: {
            return {
                ...state,
                todoList: [...action.payload],
            };
        }
        // log out
        case LOGOUT: {
            return {
                ...state,
                checkUserLogin: false,
            };
        }
        // them moi
        case LIST_ADD:
            const listCheck = action.payload;

            for (var i = 0; i < state.todoList.length; i++) {
                console.log('test', typeof state.todoList[i], i);

                const checkUser =
                    Object.values(state.todoList[i]).includes(listCheck.userId) &&
                    Object.values(state.todoList[i]).includes(listCheck.title);
                if (checkUser === true) {
                    console.log('test', checkUser);
                    return {
                        ...state,
                        checkUserLogin: true,
                        repeat: false,
                        notRepeat: true,
                        // todoList: [listCheck, ...state.todoList],
                    };
                }
            }
            return state;

        // ne

        default:
            return state;
    }
};
