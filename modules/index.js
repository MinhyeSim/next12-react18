import { all } from "redux-saga/effects";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    counter,
    user,
    loading
});

export function* rootSaga(){
    yield all([counterSaga(),userSaga()])
}

export default rootReducer