import './App.css'
import ListItem from './components/ListItem'
import styles from './CustomStyle.module.css'

function App() {
  console.log(styles)

  const students = ['Yunus','Varol','Salih','Ece','İbrahim','Ahmet']
  
  return (
    <>
    <ul>

    {students.map((student, index)=> {
      return <ListItem key={index} student={student} />
    }
    )}
    </ul>


    <button className={styles.customButton}>CLICK ME</button>
    <button className='Button'>Deneme</button>
    </>
  )
}

export default App
