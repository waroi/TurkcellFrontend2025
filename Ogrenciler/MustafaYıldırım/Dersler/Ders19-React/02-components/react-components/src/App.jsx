import ListItem from './components/ListItem'
import './App.css'
import styles from './CustomStyle.module.css'

function App() {
  const students = ["ali", "veli","ahmet", "mehmet","fatma"] 
  return (
    <>
      <ul>
        {students.map((student, index) =>{
          return <ListItem key={index} student={student}/>
        })}
      </ul>
      
      <button className={styles.customButton}>Deneme</button>
      <button className="Button">Deneme</button>
    </>
  )
}

export default App
