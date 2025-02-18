import { useEffect, useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";
import styles from "./styles/ButtonStyle.module.css";

function App() {
	const students = ["ali", "veli", "hikmet", "varol"];
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6ef82edea371c085c5f97771c8e52dc3"
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6ef82edea371c085c5f97771c8e52dc3"
		)
			.then((response) => response.json())
			.then((data) => setWeatherData(data));
	}, []);

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

			<h1>{weatherData && weatherData.main.temp}</h1>
		</>
	);
}

export default App;
