import { useSelector } from 'react'
import './App.css'

function App() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  const handleDelete = (id) => dispatch(deleteTodo(id))
  const handleAddTodo = (todo) => dispatch(addTodo(todo))
  

  return (
    <>
 
    </>
  )
}

export default App
