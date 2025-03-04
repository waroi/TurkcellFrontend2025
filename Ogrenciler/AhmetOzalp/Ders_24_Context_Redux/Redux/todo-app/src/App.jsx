import { useState } from 'react'

import './App.css'

function App() {
const todos =useSelector((state) =>state.todo.todos);
const dispatch =useDispatch();
const handleDelete=(id)=>dispatch(deleteTodo(id));
const handleAddTodo=(todo) =>dispatch(addTodo(todo));
  return (
    <>
     <h1>Redux todo</h1>
     <form>
      
     </form>
    </>
  )
}

export default App
