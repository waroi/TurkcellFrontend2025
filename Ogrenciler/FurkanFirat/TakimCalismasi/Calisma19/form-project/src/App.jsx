import './App.css';
import { PageHeader } from './components/atoms/PageHeader';
import { ApplicationForm } from './components/molecules/ApplicationForm';

function App() {
  return (
    <>
      <PageHeader />
      <div className='bg-light p-4'>
        <ApplicationForm />
      </div>
    </>
  );
}

export default App;
