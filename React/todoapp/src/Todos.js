const Todos = ({ todos, setTodos }) => {
  function deleteTodo(id) {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  }
  function markAsCompleted(id) {
    const updatedItems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTodos(updatedItems);
  }
  return (
    <ul>
      {todos.map((cv) => {
        return (
          <li key={cv.id}>
            <span className={cv.completed ? "completed" : ""}>{cv.todo}</span>
            <button onClick={() => markAsCompleted(cv.id)}>Done</button>
            <button onClick={() => deleteTodo(cv.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
