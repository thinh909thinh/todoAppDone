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
            const listUser = state.todoList.map((todo, index) => {
                return {
                    name: todo.title,
                    password: todo.id,
                };
            });
            for (var i = 0; i < state.todoList.length; i++) {
                const checkUser =
                    Object.values(listUser[i]).includes(listCheck.password) &&
                    Object.values(listUser[i]).includes(listCheck.title);
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
