import {useRoutes} from 'react-router'
import HomeView from '../views/HomeView'
import UserView from '../views/UserView'
import userRouter from './userRouter'
import ParametreView from '../views/ParametreView'

import NewView from '../views/NewView'
const Router = () => {
    
    const routes = useRoutes([
        {path: '/', element: <HomeView/>},
        {path: "/user" , element: <UserView/>},
        {path: "/parametre/:id" , element: <ParametreView/>},

        {path: "/haberler/" , element: <NewView/>,
          children: [
            {index: true, element: <Navigate to = "spor"/>},
            {path: "spor",}
          ]
        },

        //userRouter

    
  ])
  return routes
}

export default Router