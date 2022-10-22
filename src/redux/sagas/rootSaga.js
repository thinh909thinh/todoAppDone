import { all, fork } from 'redux-saga/effects';
import postsSaga from './postsSaga/postsSaga';
export default function* rootSaga() {
    yield all([]);
    console.log('rootSaga ');
}
