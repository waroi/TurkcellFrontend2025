import ListItem from "./components/ListItem";
import './App.css'
import styles from "./CustomStyle.module.css";
function App() {
  const students = ["Zeynep", "Ayşe", "Varol", "Ali", "Veli"];
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student}/>; // return niye gerekli
          // <ListItem key={index} student={student}/> // return olmadan bu şekidle yazaibliriz 
          // ListItem( key={index}, student={student}) // böyle de yapılabilir
        })}
      </ul>
      <button className={styles.customButton}>Deneme</button>
      <button className="Button">Deneme</button>
    </>
  )
}

export default App;
