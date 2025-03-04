import { useSelector } from 'react'
import './App.css'

function App() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  const handleDelete = (id) => dispatch(deleteTodo(id))
  const handleAddTodo = (todo) => dispatch(addTodo(todo))
  

  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={handleSubmit}></form>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
 
    </>
  )
}

export default App
