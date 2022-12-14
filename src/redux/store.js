import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CreateSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { listReducer } from './reducers/listReducers';

const todoItemsFromStorage = [];

const reducer = combineReducers({
    todoItems: listReducer,
});

const middlewareThunk = [thunk];
const sagaMiddleware = CreateSagaMiddleware();
const initialState = {
    todoItems: {
        todoList: todoItemsFromStorage,
    },
};

const store = {
    ...createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewareThunk, sagaMiddleware))),
    runSaga: sagaMiddleware.run,
};
store.runSaga(rootSaga);
console.log('init: ', initialState);
export default store;
