import "./App.css";
import ListItem from "./components/ListItem";
import styles from "./CustomStyle.module.css";
function App() {
  const students = ["Varol", "Ali", "Veli"];

  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />;
        })}
      </ul>
      <button className={styles.customButton}> Deneme</button>
      <button className="btn"> Deneme</button>
    </>
  );
}

export default App;
