import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { listReducer } from './reducers/listReducers';

const reducer = combineReducers({
  todoItems: listReducer,
});

const todoItemsFromStorage = [
  {
    id: 1,
    name: 'test',
    complete: false,
  },
  {
    id: 2,
    name: 'test2',
    complete: false,
  },
];

const middleware = [thunk];

const initialState = {
  todoItems: { todoList: todoItemsFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;