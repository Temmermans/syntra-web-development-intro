import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");

  function addTodo() {
    setTodos([...todos, { todo: input, completed: false, id: uuidv4() }]);
    setInput("");
  }
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={addTodo}>Submit</button>
    </div>
  );
};

export default AddTodo;
