import { useRoutes } from 'react-router';
import HomeView from '../view/HomeView';
import NewsView from '../view/NewsView';

export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/news', element: <NewsView /> },
  ]);
  return routes;
}
