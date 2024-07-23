function Form({todos,setTodos}){
    
    const handleSubmit = (event)=>{
        //localStorage.setItem("counter",0)
        event.preventDefault();
        const value = event.target.todo.value;
        const newTodo = {
            title:value,
            id:todos.length+1,
            is_completed:false
        }
        setTodos((prevTodos)=>[
            ...prevTodos,
            newTodo
       ])
       
       const updatedTodoList = JSON.stringify([...todos,newTodo])
       localStorage.setItem("todos",updatedTodoList)
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
            <input type="text" name="todo" id="todo"
            placeholder="Write your new task" />
            </label>
            <button>
                <span><b>+</b></span>
                {/* <svg>
                    <path d="" />
                
                </svg> */}
            </button>
        </form>
    )
}

export default Form;