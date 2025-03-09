import { useState } from 'react'
import './App.css'
import useTodoStore from './store'

function App() {
  const [input, setInput] = useState('')
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore((state) => state)

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
    }
  }
  return (
    <>
      <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={handleAddTodo}>Ekle</button>

      {todos && todos.map(todo => (
        <li className={`${todo.completed ? 'line-through' : ''}`} key={todo.id} onClick={() => {
          toggleTodo(todo.id)
          console.log(todo)
        }}>
          {todo.text}

          <button
            onClick={() => removeTodo(todo.id)}
          >sil</button>
        </li>
      ))}
    </>
  )
}

export default App
