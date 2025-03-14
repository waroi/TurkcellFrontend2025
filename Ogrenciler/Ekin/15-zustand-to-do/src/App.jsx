import { useState, useRef } from "react";
import useToDoStore from "./ToDo";

function App() {
  const { todos, addTodo, removeTodo, editTodoText } = useToDoStore();

  const text = useRef();

  return (
    <main className="pt-5">
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="To Do"
            ref={text}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              addTodo(text.current.value);
              text.current.value = "";
            }}
          >
            Add
          </button>
        </div>
        <div>
          {todos?.map((todo) => (
            <div className="input-group mb-3" key={todo.id}>
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" />
              </div>
              <input
                type="text"
                className="form-control"
                disabled
                defaultValue={todo.text}
              />
              <button
                className="btn btn-warning"
                type="button"
                onClick={(event) => {
                  let parent =
                    event.target.tagName == "BUTTON"
                      ? event.target.parentElement
                      : event.target.parentElement.parentElement;

                  parent.children[1].disabled = false;
                  parent.children[2].classList.add("d-none");
                  parent.children[3].classList.remove("d-none");
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="btn btn-info d-none"
                type="button"
                onClick={(event) => {
                  let parent =
                    event.target.tagName == "BUTTON"
                      ? event.target.parentElement
                      : event.target.parentElement.parentElement;

                  parent.children[1].disabled = true;
                  parent.children[2].classList.remove("d-none");
                  parent.children[3].classList.add("d-none");

                  editTodoText(todo.id, todo.text);
                }}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => removeTodo(todo.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
