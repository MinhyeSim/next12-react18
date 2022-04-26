import { postBoard } from '../api/boardApi.ts'
import { boardActons } from '../reducers/board.reducer.ts';
import { put, takeLatest} from 'redux-saga/effects'

interface BoardType{
    type: string;
    payload: {
        userid: string,
        title: string,
        name: string,
        teamId: string,
        subject: string
    }
}
interface BoardSuccessType{
    type: string
    payload: {
        userid: string
    }
}

function* board(board: BoardType){
    try{
        alert('*** 진행 3: saga내부 join 성공 ***' +  JSON.stringify(board))
        const response: BoardSuccessType = yield postBoard(board.payload)
        yield put(boardActons.boardSuccess(response))
    }catch(error){
        alert('*** 진행 3: saga내부 join 실패 ***')
        yield put(boardActons.boardFailure(error))
    }
}
export function* watchBoard(){
    yield takeLatest(boardActons.boardRequest, board)
}