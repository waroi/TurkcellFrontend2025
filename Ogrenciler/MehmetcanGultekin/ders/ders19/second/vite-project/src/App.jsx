import ListItem from './components/ListItem'
import './App.css'
import styles from './CustomStyle.module.css'

function App() {
  const students = ['Mehmet', 'Can', 'Gultekin']
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />
        })}
      </ul>
      <button className={styles.customButton}>Deneme</button>
      <button className='Button'>Deneme2</button>
      
    </>
  )
}

export default App
