import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";
import styles from "./styles/ButtonStyle.module.css";

function App() {
	const students = ["ali", "veli", "hikmet", "varol"];
	const [count, setCount] = useState(0);

	const Button = styled.button`
		background-color: red;
		color: white;
		font-size: 20px;
		padding: 10px;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		&:hover {
			background-color: blue;
		}
	`;

	return (
		<>
			<Deneme yas={22} isim={"hikmet"} />
			<h1>{count}</h1>
			<ul>
				{students.map((student, index) => (
					<ListItem students={student} key={index} />
				))}
			</ul>
			<button
				onClick={() => setCount(count + 1)}
				className={styles.incrementButton}>
				Sayıyı Arttır
			</button>
			<Button>Styled Component</Button>
		</>
	);
}

export default App;
