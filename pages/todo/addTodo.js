import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../../styles/Table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
export default function AddTodo() {
    const [todo, setTodo] = useState({ task:''})
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]: value})
    }
  return (
      <form onSubmit={ e => {
          e.preventDefault()
          alert(JSON.stringify(todo))
          dispatch(todoActions.addTodoRequest(todo))
          setTodo({
             task: ''
          })
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td><label>할일등록</label></td>
                <td>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="task"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
          Add
        </button></td >
            </tr>
            
                </tbody>
            </table>
            </form>
     
  );
}