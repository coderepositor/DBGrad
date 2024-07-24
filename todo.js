import React,{useState} from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTodo,toggleComplete,deleteTodo } from "./todoSlice"

const Todo = () =>{
    const [text,setText] = useState("")
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const handleInputChange=(e)=>{
        
        setText(e.target.value)
    }
    const handleAddTodo = () =>{
        if(text){
            console.log(text)
            dispatch(addTodo(text));
            setText("");
        }
    }
    const handleToggleComplete = (id)=>{
        dispatch(toggleComplete(id));
    }
    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
    }
    return (

        <div>
            <input type="text" value={text} onChange={handleInputChange} /> {" "}
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {" "}
                {todos.map((todo)=>(
                    <li key={todo.id} style={{textDecoration:todo.complete?"line-through":"none"}}>
                        {todo.text}{" "}
                    <button onClick={()=>handleToggleComplete(todo.id)}>
                        {" "}
                        {todo. completed ? "Mark Incomplete ": "Mark Complete"} 
                    </button>
                    {" "}
                    <button onClick={()=>handleDeleteTodo(todo.id)}>Delete Todo </button>
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    )
    
}

export default Todo
