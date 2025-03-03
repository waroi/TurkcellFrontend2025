import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Musics from './components/Musics'
import NavigationBar from './components/NavigationBar'
import backgroundImage from '../src/assets/music-background.jpg'


function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const refreshMusics = () => {
    setRefreshTrigger(prev => prev + 1);
  };
  
  return (
    <div className="d-flex flex-column min-vh-100" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>

      <NavigationBar refreshMusics={refreshMusics} />
      <div className="flex-grow-1 py-3">
        <Musics key={refreshTrigger} />
      </div>
    </div>
  )
}

export default App