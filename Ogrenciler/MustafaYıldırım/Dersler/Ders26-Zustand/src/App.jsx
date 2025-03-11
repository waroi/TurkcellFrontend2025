import { useState } from "react";
import useTodoStore from "./store";

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <>
      <h1>Todo Listesi</h1>
      <div>
        <input
          type="text"
          placeholder="Todo ekle..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Ekle</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
