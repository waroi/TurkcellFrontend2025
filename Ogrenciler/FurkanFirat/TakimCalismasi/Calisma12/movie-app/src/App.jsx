import Header from './components/Header';
import Movie from './components/Movie';
import Person from './components/Person';
import './App.css';

function App() {
  return (
    <>
      <Header text={' En iyi filmleri keşfet!'} />
      <div className='px-5'>
        <div className='row'>
          <div className='col-12 col-sm-8'>
            <Movie />
          </div>
          <div className='col-12 col-sm-4'>
            <Person />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
