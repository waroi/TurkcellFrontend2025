import { useRoutes } from 'react-router';
import HomeView from '../../Views/HomeView';
import PlayerView from '../../Views/PlayerView';
import GrenadesView from '../../Views/GrenadesView';
import FaqView from '../../Views/FaqView';
import AboutView from '../../Views/AboutView';
import ContactView from '../../Views/ContactView';
import PlayersView from '../../Views/PlayersView';
export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/oyuncular', element: <PlayersView /> },
    { path: '/oyuncu/:id', element: <PlayerView /> },
    { path: '/bombalar', element: <GrenadesView /> },
    { path: '/hakkimizda', element: <AboutView /> },
    { path: '/sss', element: <FaqView /> },
    { path: '/iletisim', element: <ContactView /> },
  ]);
  return routes;
}
