import { Navigate, useRoutes } from 'react-router';
import HomeView from '../view/HomeView';
import NewsView from '../view/NewsView';
import SportsNewsView from '../view/SportsNewsView';
import EconomyNewsView from '../view/EconomyNewsView';
import GeneralNewsView from '../view/GeneralNewsView';
import TechNewsView from '../view/TechNewsView';
import HealthNewsView from '../view/HealthNewsView';

export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <HomeView /> },
    {
      path: '/news/',
      element: <NewsView />,
      children: [
        { index: true, element: <Navigate to='general' /> },
        { path: 'general', element: <GeneralNewsView /> },
        { path: 'tech', element: <TechNewsView /> },
        { path: 'sports', element: <SportsNewsView /> },
        { path: 'health', element: <HealthNewsView /> },
        { path: 'economy', element: <EconomyNewsView /> },
      ],
    },
  ]);
  return routes;
}
