import { useState } from 'react'
import { newsService } from './api/newService'
import './App.css'

function App() {

  const [news, setNews] = useState()
  // const [page, setPage] = useState(1)

  useState( async () => {
    const response = await newsService.getNews(1);
    setNews(response);
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
