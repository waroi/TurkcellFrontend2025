import ListItem from './components/ListItem'
import './App.css'
import styles from "./CustomStyle.module.css";

function App() {
  const students = ["Ali", "Veli", "Ayşe"]
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />
        })}
      </ul>
      <button className={styles.customButton}>Deneme</button>
    </>
  )
}

export default App
