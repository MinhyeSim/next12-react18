import {createAction, handleActions} from 'redux-actions'
import {call, delay, put, takeLatest} from 'redux-saga/effects'
import * as api from '@/apis/api'
import createRequestSaga from '@/apis/createRequestSaga'
import {HYDRATE} from "next-redux-wrapper"

const USER_JOIN = 'user/USER_JOIN'
const USER_JOIN_SUCCESS = 'user/USER_JOIN_SUCCESS'
const USER_LOGIN = 'user/USER_LOGIN'
const USER_LOGIN_SUCCESS = 'user/USER_LOGIN_SUCCESS'

export const userJoin = createAction(USER_JOIN, payload => payload)
export const userLogin = createAction(USER_LOGIN, payload => payload)

const userJoinSaga = createRequestSaga(USER_JOIN, api.userJoin)
const userLoginSaga = createRequestSaga(USER_LOGIN, api.userLogin)

export function* userSaga() {
    
    yield takeLatest(USER_JOIN, userJoinSaga)
    yield takeLatest(USER_LOGIN, userLoginSaga)
}

const initialState = {
    users: [],
    loginUser: {
        isLogginIn: false,
        data: null
    }
}

const user = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        post: action.payload
    }),
    [USER_JOIN_SUCCESS]: (state, action) => ({
        ...state,
        post: action.payload
    }),
    [USER_LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        users: action.payload
    })
}, initialState);

export default user;