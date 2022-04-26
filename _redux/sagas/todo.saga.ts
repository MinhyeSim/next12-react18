import { todoActions } from "../reducers/todo.reducer.ts";
import {put, takeLatest} from 'redux-saga/effects'
import { postTodo} from '../api/todoApi.ts'

interface TodoFormType{
    type: string;
    payload: {
        userid:string, task:string, completed:string
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
    userid:string
    }
}

function* todo(todo: TodoFormType){
    try{
        alert('*** 진행 3: saga내부 join 성공 ***' +  JSON.stringify(todo))
        const response: TodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.todoSuccess(response)) 
    }catch(error){
        alert('*** 진행 3: saga내부 join 실패 ***')
        yield put(todoActions.todoFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.todoRequest, todo)
}