import { useSelector, useDispatch } from 'react-redux'
import {addTodo, deleteTodo} from './redux/slices/todoSlice'
import './App.css'

function App() {
  const todo = useSelector((state)=>{state.todo.todos})
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleAddToo = (todo) => {dispatch(addTodo(todo))}
  return (
    <>
    <h1>Redux Todo</h1>
    <form action="">
      <input type="text" name='todo'/>
      <button type='submit'>Add Todo</button>
    </form>
    </>
  )
}

export default App
