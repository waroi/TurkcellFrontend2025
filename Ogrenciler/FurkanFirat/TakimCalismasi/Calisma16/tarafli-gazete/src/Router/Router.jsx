import { Navigate, useRoutes } from 'react-router';
import HomeView from '../view/HomeView';
import NewsView from '../view/NewsView';
import SportsNewsView from '../view/SportsNewsView';
import GeneralNewsView from '../view/GeneralNewsView';
import TechNewsView from '../view/TechNewsView';
import HealthNewsView from '../view/HealthNewsView';
import BusinessNewsView from '../view/BusinessNewsView';

export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <HomeView /> },
    {
      path: '/haberler',
      element: <NewsView />,
      children: [
        { index: true, element: <Navigate to='genel' /> },
        { path: 'genel', element: <GeneralNewsView /> },
        { path: 'teknoloji', element: <TechNewsView /> },
        { path: 'spor', element: <SportsNewsView /> },
        { path: 'saglik', element: <HealthNewsView /> },
        { path: 'is-dunyasi', element: <BusinessNewsView /> },
      ],
    },
  ]);
  return routes;
}
