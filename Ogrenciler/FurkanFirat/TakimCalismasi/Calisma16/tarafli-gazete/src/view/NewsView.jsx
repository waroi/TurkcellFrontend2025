import { Outlet } from 'react-router';
import CategoriesNav from '../components/CategoriesNav';
export default function NewsView() {
  return (
    <>
      <CategoriesNav />
      <Outlet />
    </>
  );
}
