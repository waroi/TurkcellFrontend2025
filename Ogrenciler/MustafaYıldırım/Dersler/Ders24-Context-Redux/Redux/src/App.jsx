import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletedTodo } from "./slice/todoSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deletedTodo(id));
  const handleAddTodo = (todo) => dispatch(addTodo(todo));
  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elements.todo.value;
          handleAddTodo({
            id: self.crypto.randomUUID(),
            title: todo,
          });
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
