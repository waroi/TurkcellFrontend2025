import { useState } from "react";
import "./App.css";
import { useStore } from "./store/index";

function App() {
	const { todo, addTodo, toggleTodo, deleteTodo } = useStore();
	const [inputTodo, setInputTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(inputTodo);
		console.log(todo);
	};
	return (
		<>
			<section>
				<h1>Yapılmışlar Listesi</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={inputTodo}
						onChange={(e) => setInputTodo(e.target.value)}
					/>
					<button>Ekle</button>
				</form>
				<div>
					{todo.map((todo) => (
						<div key={todo.id}>
							<h1>{todo.text}</h1>
							<p>{todo.id}</p>
							<button onClick={() => deleteTodo(todo.id)}>Sil</button>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default App;
