import "./App.css";
import useStore from "./store";
import { useState, useEffect } from "react";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useStore();
  const [input, setInput] = useState({
    text: "",
    completed: false,
  });

  useEffect(() => {
    setInput({ ...input, id: todos.length });
  }, [todos]);

  const handleAddTodo = () => {
    addTodo(input);
    setInput({ ...input, text: "" });
  };

  return (
    <>
      <input
        className="rounded-pill border-0 me-2 shadow-0 px-2"
        value={input.text}
        onChange={(e) => setInput({ ...input, text: e.target.value })}
        type="text"
      />
      <button className="ms-3 rounded-pill" onClick={handleAddTodo}>
        Ekle
      </button>
      <ul style={{ listStyle: "none" }}>
        {todos &&
          todos?.map((todo) => (
            <div className="d-flex align-items-center" key={todo.id}>
              <li
                className="mt-3"
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
                <button
                  className="ms-3 rounded-pill"
                  onClick={() => removeTodo(todo.id)}
                >
                  Remove
                </button>
              </li>
            </div>
          ))}
      </ul>
    </>
  );
}

export default App;
