import ListItem from "./components/listItem";
import styles from "./CustomStyle.module.css";

import "./App.css";

function App() {
  const students = ["Ahmet", "Varol", "Ali", "Ayşe"];
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />;
        })}
      </ul>
      <button className={styles.customButton}>Deneme</button>
      <button className="Button">Deneme</button>
    </>
  );
}

export default App;
