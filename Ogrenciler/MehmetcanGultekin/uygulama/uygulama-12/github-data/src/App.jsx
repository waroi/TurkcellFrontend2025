import { useEffect, useState } from 'react'
import { getAllUsers, searchUsers } from './api/useFetch'
import { UserCard } from './components/UserCard'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchInitialUsers = async () => {
      setLoading(true)
      try {
        const data = await getAllUsers()
        setUsers(data)
      } catch (error) {
        console.error('Failed to fetch initial users:', error)
      }
      setLoading(false)
    }
    fetchInitialUsers()
  }, [])

  const handleSearch = async (e) => {
    const value = e.target.value
    setSearchInput(value)
    
    if (value.trim()) {
      setLoading(true)
      try {
        const searchResults = await searchUsers(value)
        setUsers(searchResults)
      } catch (error) {
        console.error('Search failed:', error)
      }
      setLoading(false)
    } else {
      const data = await getAllUsers()
      setUsers(data)
    }
  }

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search GitHub users..."
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      </div>
      
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {users && users.length > 0 ? (
            users.map(user => (
              <div key={user.id} className="col-md-6 mb-3">
                <UserCard userData={user} />
              </div>
            ))
          ) : (
            <div className="text-center">No users found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
