import React from "react";
function TODOList({ todos, setTodos }) {
    //console.log(todos)
    return (
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => (
            <Item key={index} item={item} setTodos={setTodos} todos={todos}/>
          ))
        ) : (
          <p>Seems No Tasks in the todolist, what are you up to?</p>
        )}
      </ol>
    );
  }
  
    
  function Item({ item, setTodos,todos }) {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const completeTodo = () => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id
              ? { ...todo, is_completed: !todo.is_completed }
              : todo
          )
        );

        const updatedTodos = JSON.stringify(todos)
        localStorage.setItem("todos",updatedTodos);
      };
    const handleDelete = ()=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!==item.id));
        const updatedTodos = JSON.stringify(todos.filter((todo)=>todo.id!==item.id));
      localStorage.setItem("todos",updatedTodos)
    } 
    const handleEdit = () => {
      setEditing(true);
    };
    React.useEffect(() => {
      if (editing && inputRef.current) {
        inputRef.current.focus();
        // position the cursor at the end of the text
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }
    }, [editing]);
    const handleInpuSubmit = (event) => {
      event.preventDefault();
      const updatedTodos = JSON.stringify(todos)
      localStorage.setItem("todos",updatedTodos)
      setEditing(false);
    };
    const handleInputBlur = () => {
      const updatedTodos = JSON.stringify(todos)
      localStorage.setItem("todos",updatedTodos)
      setEditing(false);
    };

    const handleInputChange = (e)=>{
        setTodos((prevTodos=>
            prevTodos.map((todo)=>
            todo.id === item.id? {...todo,title:e.target.value}:todo)))
    }
    return (
      <li id={item?.id} className="todo_item">
        {editing ? (
          <form className="edit-form" onSubmit={handleInpuSubmit}>
            <label htmlFor="edit-todo">
              <input
                ref={inputRef}
                type="text"
                name="edit-todo"
                id="edit-todo"
                defaultValue={item?.title}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
            </label>
          </form>
        ) : (
            
            <div className="todo_items_left">
            <input type="Checkbox" checked={item?.is_completed} onClick={completeTodo}/>
            <p>{item?.title}</p>  
            <div className="todo_items_right">
            &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={handleEdit}>Edit</button>&nbsp;&nbsp;
              <button onClick={handleDelete}>Delete</button>
            </div>
            </div>
        )}
      </li>
    );
  }
  
    export default TODOList;