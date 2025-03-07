import { useState } from "react"
import {useTodo} from "./store/index"
import './App.css'


function App() {
  const { todos, addTodo, deleteTodo } = useTodo((state) => state);
  const [input, setInput] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  }

  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={handleTodo}>
        <input type="text"
          placeholder="add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
      </form>

      <button type="submit">
        Ekle
      </button>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>
              {todo.text}
            </li>
            <button onClick={deleteTodo(todo.id)}>Sil</button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
