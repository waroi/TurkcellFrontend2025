import { useState } from "react"
import { useTodo } from "./store/index"
import './App.css'


function App() {
  const { todos, addTodo, deleteTodo } = useTodo();
  const [input, setInput] = useState("");

  const handleTodo = (e) => {
    if (input.trim()) {
      e.preventDefault();
      addTodo(input);
      setInput("");
    }

  }

  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={handleTodo}>
        <input type="text"
          placeholder="add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button type="submit">
          Ekle
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>Sil</button>
            </li>

          </div>
        ))}
      </ul>
    </>
  )
}
//buton formun dışındaysa bu şekilde id ile yap
// export default App
// import { useState } from "react"
// import { useTodo } from "./store/index"
// import './App.css'


// function App() {
//   const { todos, addTodo, deleteTodo } = useTodo();
//   const [input, setInput] = useState("");

//   const handleTodo = (e) => {
//     if (input.trim()) {
//       e.preventDefault();
//       addTodo(input);
//       setInput("");
//     }

//   }

//   return (
//     <>
//       <h1>Todo list</h1>
//       <form onSubmit={handleTodo} id="x">
//         <input type="text"
//           placeholder="add todo"
//           value={input}
//           onChange={(e) => setInput(e.target.value)} />
        
//       </form>
//       <button type="submit" form="x">
//           Ekle
//         </button>
//       <ul>
//         {todos.map((todo) => (
//           <div key={todo.id}>
//             <li>
//               {todo.text}
//               <button onClick={() => deleteTodo(todo.id)}>Sil</button>
//             </li>

//           </div>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App
