import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './redux/slice/todoSlice'

function App() {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  const handleDelete = id => dispatch(removeTodo(id))
  const handleAddTodo = todo => dispatch(addTodo(todo))


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        const todo = e.target.elements.todo.value
        handleAddTodo({
          id: self.crypto.randomUUID(),
          todo: todo
        })
      }
      }>
        <input type="text" name='todo' />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todo}

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
