import React,{useState} from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../redux/reducers/boardReducer.ts"

export default function addArticle(){
    const [value,setValue] = useState({})
    const dispatch = useDispatch()
    return (
        <div className="boardapp stack-large">
        <h1>게시글 등록 </h1>        
            <form onSubmit={e => {
                e.preventDefault()
                alert('확인?'+value)
                if(value) dispatch(addTask({task:value}))
            }}>

            <input 
                    type="text"
                    id="new-board-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    onChange={e=>{
                        e.preventDefault()
                        setValue(e.target.value)
                    }}                
                    />
                    <button style={{marginLeft:"20px"}}type="submit" className="btn btn__primary btn__lg">
                        확인
                    </button> <br></br>
                <input
                    type="text"                 
                    id="new-board-input__lg"
                    name="text"
                    autoComplete="off"
                    onCange={e => {
                        e.preventDefault()
                        setValue(e.target.value)                        
                    }}/>
                    <button style={{marginLeft:'20px'}}type="submit"className="btn btn__primarty btn__lg">확인</button>
                

            </form>
        </div>
    )
}