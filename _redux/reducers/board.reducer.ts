import { createSlice } from "@reduxjs/toolkit"

export interface BoardType{
    userid: string,
    title: string,
    name: string,
    teamId: string,
    subject: string
}

export interface BoardState{
    loading: boolean;
    data: BoardType[];
    error: any;
}

const initialState: BoardState = {
    loading: false,
    data: [],
    error: null
}

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{
        boardRequest(state: BoardState, payload){
            alert('진행 2 : 리듀서 내부')
            state.loading = true;
        },
        boardSuccess(state: BoardState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false
        },
        boardFailure(state: BoardState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false
        }
        }
})    


const {actions, reducer} = boardSlice
export const boardActons = actions
export default reducer