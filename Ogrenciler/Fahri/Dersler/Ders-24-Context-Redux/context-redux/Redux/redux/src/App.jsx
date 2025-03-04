import { useState } from "react";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTodo(id));
  const handleAddToDo = (todo) => dispatch(addTodo(todo));
  return (
    <>
      <h1>Redux Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elemets.todo.value;
          handleAddToDo({
            id: Math.random(),
            todo,
          });
        }}
      ></form>
    </>
  );
}

export default App;
