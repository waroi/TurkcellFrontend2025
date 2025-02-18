import ListItem from "./components/ListItem";
import "./App.css";
import styles from "./CustomStyle.module.css";

function App() {
  const students = ["Varol", "Ali", "Veli", "Ayşe", "Fatma"];
  return (
    <>
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>
      <button className={styles.customButton}>Deneme</button>
      <button className="Button">Deneme</button>
    </>
  );
}

export default App;
