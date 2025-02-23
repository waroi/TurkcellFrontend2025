import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserCard from './UserCard';
import Navbar from './Navbar';
import SearchForm from './SearcForm';
import { useEffect, useState } from 'react';
import RepoCard from './RepoCard';

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [repoData, setRepoData] = useState([]);

  const [searchValue, setSearchValue] = useState('furkan-firat');
  const baseUrl = 'https://api.github.com';

  const fetchUserAndRepoData = async () => {
    setLoading(true);
    setError(null);

    try {
      const userResponse = await fetch(`${baseUrl}/users/${searchValue}`);
      if (!userResponse.ok) {
        console.log('user api hata');
      }
      const userData = await userResponse.json();
      setUserData(userData);
      console.log('Kullanıcı Bilgileri:', userData);

      const repoResponse = await fetch(`${baseUrl}/users/${searchValue}/repos`);
      if (!repoResponse.ok) {
        console.log('repo api hata');
      }
      const repoData = await repoResponse.json();
      setRepoData(repoData);
      console.log('Repo Bilgileri:', repoData);
    } catch (error) {
      console.error('API Hatası:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserAndRepoData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='container'>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          fetchUserAndRepoData={fetchUserAndRepoData}
        />
        <UserCard userData={userData} />
        <RepoCard repoData={repoData} />
      </div>
    </>
  );
}

export default App;
