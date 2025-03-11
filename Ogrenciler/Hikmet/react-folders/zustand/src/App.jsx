import { useState } from "react";
import "./App.css";
import { useTodoStore } from "./store/store";

function App() {
	const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
	const [input, setInput] = useState("");

	function handleAddTodo() {
		if (input.trim()) {
			addTodo(input);
			setInput("");
		}
	}

	return (
		<>
			<h1>To-Do List</h1>
			<h3>Add some to-do 😼</h3>
			<div className="add-todo">
				<input
					type="text"
					placeholder="I will do..."
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<button onClick={handleAddTodo}>I Will Do 💪</button>
			</div>

			<ul className="todos-list">
				{todos.map((todo) => (
					<li key={todo.id}>
						<span
							onClick={() => toggleTodo(todo.id)}
							style={{
								textDecoration: todo.completed ? "line-through" : "none",
								cursor: "pointer",
								marginRight: "10px",
							}}>
							{todo.text}
						</span>
						<button onClick={() => deleteTodo(todo.id)}>❌</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
