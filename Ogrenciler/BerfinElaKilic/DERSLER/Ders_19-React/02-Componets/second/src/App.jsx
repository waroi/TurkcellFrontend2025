import { useState } from 'react'

import './App.css'
import styles from "./CustomStyle.module.css"
import ListItem from './components/ListItem';

function App() {
  const students =["Ela", "Ece", "Okan", "Aram", "Varol"];
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
