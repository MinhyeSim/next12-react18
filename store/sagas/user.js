import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"



function* addUser(action){
    try{
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESS,
            payload: newUser.data
        }) 
    }catch(error){
        yield put({
            type: T.USER_ADD_FAIL,
            payload: error.message
        })
    }
}
export function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUEST, addUser)
}
