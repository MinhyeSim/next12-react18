import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import tableStyles from '../../styles/Table.module.css'

export default function GetTodos(){
    const columns = ["할일"]
    const [data, setData] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/get').then(res=>{
            setData(res.data.todos)
    }).catch(err=>{})
},[])
    return(
        <table className={TableStyle.table}>
            <thead>
                <tr>
                    <td>
                        할일목록
                    </td>
                </tr>
            </thead>
            <tbody>
                    {data.length == 0 ? 
                    <div>현재 등록된 일정이 없습니다</div>          
                    :data.map((todo) => (
                        <tr>
                        <td key={todo.task}>
                            <input type="checkbox"></input>
                            <a>{todo.task}</a>
                        </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}