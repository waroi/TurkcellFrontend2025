import { useState } from 'react';
import './App.css';
import { useStore } from './store';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { add, remove, toggle, todos } = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    add(inputValue);
    setInputValue('');
    console.log(todos);
  };
  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          placeholder='Todo ekle'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Ekle</button>
      </form>

      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            <div className='todo-box'>
              <p
                className={todo.completed ? 'line-through' : ''}
                onClick={() => toggle(todo.id)}
                style={{ fontSize: '30px' }}
              >
                {todo.text}
              </p>{' '}
              <button className="btn" onClick={() => remove(todo.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
