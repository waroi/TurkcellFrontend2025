const Navbar = ({ handleCategoryChange, selectedCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg px-3 navbar-mint bg-mint position-sticky top-0">
      <a className="navbar-brand fs-4" href="#">Mis Gibi Blog</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" onClick={() => handleCategoryChange('Genel Temizlik')}>Genel Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Hızlı Temizlik')}>Hızlı Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Doğal Temizlik')}>Doğal Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Banyo Temizliği')}>Banyo Temizliği</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Mutfak Temizliği')}>Mutfak Temizliği</button>
          </li>
          <li className="nav-item">
            {selectedCategory !== '' ? <button className="fw-bold nav-link" onClick={() => handleCategoryChange('')}>Sıfırla</button> : ''}
          </li>
        </ul>
      </div>
      <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#blogModal">
        Yeni Gönderi
      </button>
    </nav >
  );
};

export default Navbar;
