import { useState } from 'react';
import './App.css';
import Deneme from './components/Deneme';
import ListItem from './components/ListItem';

function App() {
  const students = [
    'Student 1',
    'Student 2',
    'Student 3',
    'Student 4',
    'Student 5',
  ];
  return (
    <>
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>
    </>
  );
}

export default App;
