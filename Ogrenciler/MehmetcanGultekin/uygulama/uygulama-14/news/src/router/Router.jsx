import {useRoutes, Navigate} from 'react-router'
import HomeNewsView from '../views/HomeNewsView'
import NewsView from '../views/NewsView'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EconomyNewView from '../../../../../../../Dersler/Ders23-React-Router/src/views/EconomyNewView'
import SportNewView from '../../../../../../../Dersler/Ders23-React-Router/src/views/SportNewView'
const Router = () => {
    
    const routes = useRoutes([
        {path: "/Navbar" , element: <Navbar/>},
        {path: "/Footer" , element: <Footer/>},
        {path: "/" , element: <HomeNewsView/>},
        {path: "/spor", element: <SportNewView/>},
        
        {path: "/haberler/", element: <NewsView/>,
          children: [
            {index: true, element: <Navigate to="popüler" />},
            {path: "popüler", element: <PopNews/>},
            {path: "spor", element: <SportNewView/>},
            {path: "ekonomi", element: <EconomyNewView/>},
            
          ],
        },
           
  ])
  return routes
}

export default Router