import { useState } from 'react'
import { newsService } from './api/newService'
import './App.css'

function App() {

  const [news, setNews] = useState()
  const [page, setPage] = useState(1)
  // let totalResults = 0

  useState(async () => {
    const response = await newsService.getNews(1);
    setNews(response.articles);
  }, [])


  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 pb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar w/ text</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>


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
          ) : (
            <h1>Bulunamadı</h1>
          )
      }
    </>
  )
}

export default App
