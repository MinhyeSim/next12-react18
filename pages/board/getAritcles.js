import { useEffect, useState } from "react";
import style from 'board/styles/board-form.module.css'
import axios from "axios";

const Table = ({columns, colspan, data}) => {
    return(
        <table className={style.table}>
        <thead>
            <tr className={style.tr}>
            {columns.map((column) => (
                <th key={column.passengerId} className={style.td}>{column}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>데이터가 없습니다.</td>
                                    </tr>
                                    :data.map((board) => (
                                    <tr className={style.tr} key={board.passengerId}>
                                        <td className={style.td}>{board.passengerId}</td>
                                        <td className={style.td}>{board.name}</td>
                                        <td className={style.td}>{board.teamId}</td>
                                        <td className={style.td}>{board.subject}</td>
                                        </tr>
                ))}

            </tbody>
        </table>
    );
}

export default function BoardList() {
    const columns = ["PassengerId", "Name", "TeamId", "Subject"];
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/boardlist')
        .then(res=>{setData(res.data.boards)}).catch(err=>{})
    },[])


    return (<>
        <h1>Board List</h1>
        <div className={style.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}