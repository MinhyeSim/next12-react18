import { all } from "redux-saga/effects";
const { combineReducers } = require("redux");
import counter, {counter} from './counter'
import user,{ user } from './user'
import auth, { auth } from './auth'

const rootReducer = combineReducers({
    counter,
    user,
    auth,
    loading
});

export function* rootSaga(){
    yield all([counterSaga(),userSaga(), authSaga()])
}

export default rootReducer