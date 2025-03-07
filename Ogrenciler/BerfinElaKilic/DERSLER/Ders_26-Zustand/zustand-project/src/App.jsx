import { useEffect, useState } from "react";
import { useTodoStore } from "./store/index";

import "./App.css";

function App() {
  const { todos, addTodo, toggleComplete } = useTodoStore();
  const [todo, setTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (e.key === "Enter") {
      addTodo(todo);
      setTodo(" ");
      console.log(todos);
    }
  };
  useEffect(() => {
    console.log(todos);
  } , [todo])
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleSubmit}
          className="form-control"
          aria-label="Text input with checkbox"
        />
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="d-flex justify-content-center">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value={todo.isCompleted}
                onChange={toggleComplete}
                aria-label="Checkbox for following text input"
              />
            </div>
            {todo.text}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
