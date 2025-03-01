import { useState } from 'react'
import './App.css'
import { fetchNews } from './api/newService'

function App() {

  const [news, setNews] = useState([])
  // const [page, setPage] = useState(1)

  useState( async () => {
    const newss = await setNews(fetchNews(1));
    console.log(newss);
    setNews(newss);
  },[])


  return (
    <>
    {
      news ?
      (
        news.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          )
        }
      )
      ): (
        <h1>Bulunamadı</h1>
      )
    }
    </>
  )
}

export default App
