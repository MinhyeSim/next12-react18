import { createRequire } from "module"
import { HYDRATE } from "next-redux-wrapper"

const USER_JOIN = 'user/USER_JSON'
const USER_JOIN_SUCCESS = 'user_SER_JOIN'
const USER_LOGIN = 'user/USER_LOGIN'
const USER_LOGIN_SUCCESS = 'user/USEF_LOISNH'
// 1. 타입(=액션)

export const userJoin = ceateAction(USER_JOIN, payload => payload)
const userJoinSaga = createRequestSaga(USER_JOIN, api.userJoin)
// 2. 액션 생성


const user = handleActions({
    [HYDRATE]: (state, aciton) => ({
        ...state,
        post: action.payload
    })
})
// 3. (SSR) [ ] 동적으로 키를 할당

export default user;