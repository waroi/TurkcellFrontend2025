import ListItem from './components/List_Item';
import './App.css'
import styles from './components/Custom_Button_Style.module.css';

function App() {
  const student = ["Mustafa", "Fatih", "Gündüz"];

  return (
    <>
      <ul>
        {student.map((item, index) => (
          ListItem({student: item, key: index})
        ))}
      </ul>
      <button className={styles.customButton}>Deneme</button>
    </>
  )
}

export default App
