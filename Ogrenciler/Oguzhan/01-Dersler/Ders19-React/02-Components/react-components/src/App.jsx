import "./App.css";
import ListItem from "./components/ListItem";
import styles from "./CustomStyle.module.css";

function App() {
  const students = ["ali", "veli", "ayşe", "fatma"];

  return (
    <>
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>

      <button className={styles.customButton}>1.Buton</button>
      <button className="appbtn">2.Buton</button>
    </>
  );
}

export default App;
