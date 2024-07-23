import './styles/styles.css'
import Header from "./components/header";
import Form from "./components/form";
import TODOList from "./components/todolist";
import TODOHero from "./components/todohero";

function App() {
  return (
    <div>
      <Header/>
      <TODOHero todos_completed={0} total_todos={0}/>
      <Form />
      <TODOList todos={[]} />
    </div>
  );
}

export default App;
