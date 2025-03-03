import { NavLink } from 'react-router';

const CategoriesNav = () => {
  return (
    <div className='container d-flex flex-column flex-md-row align-items-center gap-3 mt-5 justify-content-center mb-3'>
      <NavLink
        to='/haberler/genel'
        className='btn btn-primary rounded-pill px-4 py-3 w-100 fw-bold'
      >
        Genel
      </NavLink>
      <NavLink
        to='/haberler/saglik'
        className='btn btn-danger rounded-pill px-4 py-3 w-100 fw-bold'
      >
        Sağlık
      </NavLink>
      <NavLink
        to='/haberler/spor'
        className='btn btn-warning rounded-pill px-4 text-white py-3 w-100 fw-bold'
      >
        Spor
      </NavLink>
      <NavLink
        to='/haberler/teknoloji'
        className='btn btn-info rounded-pill px-4 text-white py-3 w-100 fw-bold'
      >
        Teknoloji
      </NavLink>
      <NavLink
        to='/haberler/is-dunyasi'
        className='btn btn-success rounded-pill px-4 py-3 w-100 fw-bold'
      >
        İş Dünyası
      </NavLink>
    </div>
  );
};

export default CategoriesNav;
