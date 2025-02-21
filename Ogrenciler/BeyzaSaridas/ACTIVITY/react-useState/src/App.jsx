import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);//tasks
  const [task, setTask] = useState("");//input

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const completeTask = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>TO-DO</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Yeni görev ekle..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Ekle</button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => completeTask(index)}>{t.text}</span>
            <button onClick={() => deleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
