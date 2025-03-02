import React from 'react'
import { Outlet, NavLink } from 'react-router'
import { Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getNews } from '../api/getNews'
import NewsCard from '../components/NewsCard' 

const PopNews = () => {
  const [news,setNews] = useState([]);
    useEffect(() => {
      getNews().then((data) => {
        setNews(data.result)
      });
    }, [])
  return (
    <div>
        <h1>Childlı</h1>
        <Row md = {4}>

        {news.map((item) => (
          
          NewsCard(item)
       
          
        ))}
    </Row>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default PopNews