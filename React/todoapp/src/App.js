import { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App">
      <AddTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
