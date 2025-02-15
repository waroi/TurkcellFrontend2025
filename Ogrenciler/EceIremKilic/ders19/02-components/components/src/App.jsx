import ListItem from './components/ListItem'
import './App.css'
import styles from "./CustomStyle.module.css";

function App() {
  const students = ["Ece", "Yunus", "Ahmet", "Ela"];
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student}/>
        })}
      </ul>
      <button className={styles.customButton}>Buton 1</button>
      <button className='Button'>Buton 2</button>
    </>
  )
}

export default App
