import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTodo(id));
  const handleAddTodo = (todo) => dispatch(addTodo(todo));

  return (
    <>
      <h1>Redux Todo</h1>
      {/* <form onSubmit={}></form> */}
    </>
  );
}

export default App;
