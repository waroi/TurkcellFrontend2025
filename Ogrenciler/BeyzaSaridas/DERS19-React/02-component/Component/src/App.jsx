import ListIte from './components/ListIte'
import './App.css'
import styles from  "./CustomStyle.module.css";

function App() {
  const students = ["beyza","ali","cxb"];
  return (
    <>
     <ul>
      {students.map((student, index)=>{
        return <ListIte key={index} student={student}/>;
      }
      )}
    
      </ul>
     <button className="Button">Deneme</button>
      <button className={styles.customButton}>Deneme</button>
    </>
  );
}

export default App
