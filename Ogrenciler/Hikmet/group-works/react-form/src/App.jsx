import "./App.css";
import LoginForm from "./components/LoginForm";
import RecruitmentForm from "./components/RecruitmentForm";

function App() {
	return (
		<Routes>
			<Route path="/" element={<RecruitmentForm />} />
			<Route path="/login" element={<LoginForm />} />
		</Routes>
	);
}

export default App;
