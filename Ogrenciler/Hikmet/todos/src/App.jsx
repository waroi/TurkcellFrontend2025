import { useState } from "react";
import "./App.css";
import { useStore } from "./store/index";

function App() {
	const { todo, addTodo, toggleTodo, deleteTodo } = useStore();
	const [inputTodo, setInputTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(inputTodo);
	};
	return (
		<>
			<section>
				<h1>Yapılmışlar Listesi</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" onChange={(e) => setInputTodo(e.target.value)} />
					<button>Ekle</button>
				</form>
				<div>
					{todo.map((todo) => (
						<div key={todo.id}>
							<h1>{todo.text}</h1>
							<p onClick={() => toggleTodo(todo.id)}>{todo.id}</p>
							<button onClick={deleteTodo}>Sil</button>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default App;
