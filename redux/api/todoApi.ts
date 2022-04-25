import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface Todotype{
    
}

const addTask = data => axios.post(`${SERVER}/api/todo/add-task`,data.task, { headers})

export default {
    addTask
}