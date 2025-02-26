import './App.css';
import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/Header'));
const Movie = lazy(() => import('./components/Movie'));
const Person = lazy(() => import('./components/Person'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense> 
    </>
  );
}

export default App;
