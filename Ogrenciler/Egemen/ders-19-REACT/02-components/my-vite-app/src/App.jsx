import ListItem from "./components/ListItem.jsx";
import "./App.css";

function App() {
  const students = ["egemen", "ali", "veli"]; // Öğrenciler

  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />;
        })}
      </ul>
    </>
  );
}

export default App;
