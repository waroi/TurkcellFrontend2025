import { useEffect, useState } from 'react'
import { getOneUser } from './api/useFetch'
import {UserCard} from './components/UserCard'
import './App.css'


function App() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUser = async () =>{
      const data = await getOneUser('mehmetcang')
      setUserData(data);
    }
    fetchUser()    
  },[]
  )

  return (
    <>
      {userData && <UserCard userData={userData} />}
    </>
  )
}

export default App
