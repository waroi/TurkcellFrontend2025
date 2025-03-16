const Footer = () => {
  return (
    <footer className='py-3 my-4'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <a href='#' className='nav-link px-2 color-grey color-grey-title'>
            Anasayfa
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link px-2 color-grey color-grey-title'>
            Hakkımda
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link px-2 color-grey color-grey-title'>
            İletişim
          </a>
        </li>
      </ul>
      <p className='text-center color-grey'>© 2025 , Tüm Hakları Saklıdır.</p>
    </footer>
  );
};

export default Footer;
