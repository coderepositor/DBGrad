import React from "react";
import './styles/styles.css';
import Header from "./components/header";
import Form from "./components/form";
import TODOList from "./components/todolist";
import TODOHero from "./components/todohero";

function App() {
  const [todos,setTodos] = React.useState([]);
  React.useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos){
    setTodos(storedTodos)
    }
  },[])

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true).length
  const total_todos = todos.length;

  return (
    <div className="Wrapper">
      <Header/>
      <TODOHero todos_completed={todos_completed} total_todos={total_todos}/>
      <Form todos = {todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
