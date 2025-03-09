import { useState } from "react";
import "./App.css";
import useStore from "./store/store";

function App() {
  const [input, setInput] = useState("");
  const { todos, addTodo, deleteTodo, complatedTodo } = useStore();
  const handleAddTodo = () => {
    addTodo(input);
    console.log(todos);
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <p onClick={() => complatedTodo(todo.id)}>{todo.newTodo}</p>
            <button
              type="button"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
