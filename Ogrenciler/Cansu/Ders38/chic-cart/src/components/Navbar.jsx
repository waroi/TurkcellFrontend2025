"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useThemeStore from '@/store/useThemeStore';
import useAuthStore from '@/store/useAuthStore';
import useCartStore from '@/store/useCartStore';
// Navbar.jsx veya ilgili dosya
import useFavoritesStore from '@/store/useFavoritesStore';


const Navbar = () => {
    const router = useRouter();
    const { isDarkMode, toggleTheme } = useThemeStore();
    const { user, setUser, logout } = useAuthStore();
    const cartItems = useCartStore((state) => state.cartItems);
    const favorites = useFavoritesStore((state) => state.favorites);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const userDropdownRef = useRef(null);
    const categoryDropdownRef = useRef(null);
    const searchRef = useRef(null);


    const categories = [
        { id: 1, name: 'Elektronik', icon: 'laptop', path: '/category/electronics' },
        { id: 2, name: 'Moda', icon: 'tshirt', path: '/category/fashion' },
        { id: 3, name: 'Ev & Yaşam', icon: 'home', path: '/category/home' },
        { id: 4, name: 'Kozmetik', icon: 'spa', path: '/category/beauty' },
        { id: 5, name: 'Spor & Outdoor', icon: 'running', path: '/category/sports' },
        { id: 6, name: 'Kitap & Hobi', icon: 'book', path: '/category/books' },
        { id: 7, name: 'Süpermarket', icon: 'shopping-basket', path: '/category/grocery' },
        { id: 8, name: 'Anne & Bebek', icon: 'baby', path: '/category/baby' },
        { id: 9, name: 'Pet Shop', icon: 'paw', path: '/category/pet' },
        { id: 10, name: 'Oto Aksesuar', icon: 'car', path: '/category/auto' }
    ];


    const campaigns = [
        { id: 1, name: 'Yaz İndirimi', path: '/campaigns/summer-sale', discount: '50%' },
        { id: 2, name: '2 Al 1 Öde', path: '/campaigns/buy-2-get-1', discount: '33%' },
        { id: 3, name: 'Kargo Bedava', path: '/campaigns/free-shipping', discount: 'Ücretsiz' }
    ];

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }

 
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
            if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
                setIsCategoryDropdownOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setUser]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        logout();
        setIsMenuOpen(false);
        setIsUserDropdownOpen(false);
        router.push('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
        if (isCategoryDropdownOpen) setIsCategoryDropdownOpen(false);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
        if (isUserDropdownOpen) setIsUserDropdownOpen(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        
        setIsSearching(true);
        
   
        setTimeout(() => {
     
            const results = [
                { id: 1, name: 'iPhone 13 Pro', price: '32.999 TL', image: '/images/products/iphone.jpg', category: 'Elektronik' },
                { id: 2, name: 'Samsung Galaxy S21', price: '24.999 TL', image: '/images/products/samsung.jpg', category: 'Elektronik' },
                { id: 3, name: 'Nike Spor Ayakkabı', price: '1.299 TL', image: '/images/products/nike.jpg', category: 'Moda' },
                { id: 4, name: 'Adidas T-Shirt', price: '399 TL', image: '/images/products/adidas.jpg', category: 'Moda' },
                { id: 5, name: 'Philips Kahve Makinesi', price: '2.499 TL', image: '/images/products/philips.jpg', category: 'Ev & Yaşam' }
            ].filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            
            setSearchResults(results);
            setIsSearching(false);
        }, 500);
    };

    const handleSearchResultClick = (result) => {
        router.push(`/product/${result.id}`);
        setSearchQuery('');
        setSearchResults([]);
    };

    const handleCategoryClick = (category) => {
        router.push(category.path);
        setIsCategoryDropdownOpen(false);
        setIsMenuOpen(false);
    };

    const handleCampaignClick = (campaign) => {
        router.push(campaign.path);
        setIsMenuOpen(false);
    };

    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const favoritesCount = favorites.length;

    return (
        <>
        
            <div className={`py-2 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'} border-bottom`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-none d-md-block">
                            <small>
                                <i className="fas fa-truck me-1"></i> 150 TL ve üzeri alışverişlerde kargo bedava!
                            </small>
                        </div>
                        <div className="col-md-6 text-end">
                            <small className="me-3">
                                <i className="fas fa-phone-alt me-1"></i> 0212 345 67 89
                            </small>
                            <small>
                                <i className="fas fa-envelope me-1"></i> destek@chiccart.com
                            </small>
                        </div>
                    </div>
                </div>
            </div>

         
            <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top shadow-sm`}>
                <div className="container">
                 
                    <Link href="/home" className="navbar-brand fw-bold">
                        <span className="text-primary">Chic</span>Cart
                    </Link>

                  
                    <div className="d-none d-lg-flex flex-grow-1 mx-4 position-relative" ref={searchRef}>
                        <form className="input-group" onSubmit={handleSearch}>
                            <input 
                                type="search" 
                                className="form-control" 
                                placeholder="Ürün, kategori veya marka ara..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        
                    
                        {searchResults.length > 0 && (
                            <div className={`position-absolute w-100 mt-1 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'} shadow-lg rounded-3 z-3`} style={{ top: '100%' }}>
                                <div className="p-2">
                                    <h6 className="border-bottom pb-2">Arama Sonuçları</h6>
                                    {searchResults.map(result => (
                                        <div 
                                            key={result.id} 
                                            className="d-flex align-items-center p-2 rounded hover-bg-light cursor-pointer"
                                            onClick={() => handleSearchResultClick(result)}
                                        >
                                            <div className="me-3" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                                                <img 
                                                    src={result.image} 
                                                    alt={result.name} 
                                                    className="img-fluid rounded"
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div>
                                                <div className="fw-bold">{result.name}</div>
                                                <div className="text-primary">{result.price}</div>
                                                <small className="text-muted">{result.category}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                     
                        {isSearching && (
                            <div className={`position-absolute w-100 mt-1 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'} shadow-lg rounded-3 z-3 p-3`} style={{ top: '100%' }}>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border spinner-border-sm text-primary me-2" role="status">
                                        <span className="visually-hidden">Yükleniyor...</span>
                                    </div>
                                    <span>Aranıyor...</span>
                                </div>
                            </div>
                        )}
                    </div>

                 
                    <div className="d-none d-lg-flex align-items-center">
                   
                        <Link href="/favorites" className="nav-link me-3 position-relative">
                            <i className="far fa-heart"></i>
                            <span className="ms-1 d-none d-md-inline">Favorilerim</span>
                            {favoritesCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {favoritesCount}
                                </span>
                            )}
                        </Link>

              
                        <button
                            className="btn btn-outline-primary position-relative me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#cartModal"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <span className="ms-1 d-none d-md-inline">Sepetim</span>
                            {cartItemsCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>

                     
                        <button 
                            onClick={toggleTheme} 
                            className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'} me-3`}
                            aria-label={isDarkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>

                  
                        <div className="dropdown" ref={userDropdownRef}>
                            {user ? (
                                <>
                                    <button 
                                        className="btn btn-link nav-link dropdown-toggle" 
                                        type="button" 
                                        onClick={toggleUserDropdown}
                                        aria-expanded={isUserDropdownOpen}
                                    >
                                        <i className="far fa-user me-1"></i>
                                        <span className="d-none d-md-inline">{user.name || 'Hesabım'}</span>
                                    </button>
                                    {isUserDropdownOpen && (
                                        <ul className="dropdown-menu dropdown-menu-end show" style={{ display: 'block' }}>
                                            <li><Link href="/profile" className="dropdown-item">Profilim</Link></li>
                                            <li><Link href="/orders" className="dropdown-item">Siparişlerim</Link></li>
                                            <li><Link href="/favorites" className="dropdown-item">Favorilerim</Link></li>
                                            <li><Link href="/addresses" className="dropdown-item">Adreslerim</Link></li>
                                            {user.role === 'admin' && (
                                                <li><Link href="/admin" className="dropdown-item">Admin Panel</Link></li>
                                            )}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button onClick={handleLogout} className="dropdown-item">Çıkış Yap</button></li>
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <>
                                    <button 
                                        className="btn btn-link nav-link dropdown-toggle" 
                                        type="button" 
                                        onClick={toggleUserDropdown}
                                        aria-expanded={isUserDropdownOpen}
                                    >
                                        <i className="far fa-user me-1"></i>
                                        <span className="d-none d-md-inline">Giriş Yap</span>
                                    </button>
                                    {isUserDropdownOpen && (
                                        <ul className="dropdown-menu dropdown-menu-end show" style={{ display: 'block' }}>
                                            <li><Link href="/login" className="dropdown-item">Giriş Yap</Link></li>
                                            <li><Link href="/register" className="dropdown-item">Üye Ol</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link href="/forgot-password" className="dropdown-item">Şifremi Unuttum</Link></li>
                                        </ul>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

               
                    <button 
                        className="navbar-toggler d-lg-none" 
                        type="button" 
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div className={`py-2 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'} border-bottom`}>
                <div className="container">
                    <div className="d-none d-lg-flex justify-content-between">
                        <div className="dropdown" ref={categoryDropdownRef}>
                            <button 
                                className="btn btn-link dropdown-toggle" 
                                type="button" 
                                onClick={toggleCategoryDropdown}
                                aria-expanded={isCategoryDropdownOpen}
                            >
                                <i className="fas fa-bars me-1"></i> Kategoriler
                            </button>
                            {isCategoryDropdownOpen && (
                                <div className="dropdown-menu show p-3" style={{ display: 'block', width: '300px' }}>
                                    <div className="row g-2">
                                        {categories.map(category => (
                                            <div key={category.id} className="col-6">
                                                <button 
                                                    className="btn btn-link text-start w-100 p-2 rounded hover-bg-light"
                                                    onClick={() => handleCategoryClick(category)}
                                                >
                                                    <i className={`fas fa-${category.icon} me-2`}></i>
                                                    {category.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="dropdown">
                                <button 
                                    className="btn btn-link dropdown-toggle" 
                                    type="button" 
                                    id="campaignDropdown" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-percent me-1"></i> Kampanyalar
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="campaignDropdown">
                                    {campaigns.map(campaign => (
                                        <li key={campaign.id}>
                                            <Link href={campaign.path} className="dropdown-item">
                                                {campaign.name} <span className="badge bg-danger ms-1">{campaign.discount}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link href="/campaigns" className="dropdown-item">Tüm Kampanyalar</Link></li>
                                </ul>
                            </div>
                            <Link href="/new-arrivals" className="text-decoration-none me-3">
                                <i className="fas fa-star me-1"></i> Yeni Gelenler
                            </Link>
                            <Link href="/best-sellers" className="text-decoration-none">
                                <i className="fas fa-fire me-1"></i> Çok Satanlar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} bg-white position-absolute w-100 z-3 shadow-lg`} style={{ top: '100%' }}>
                <div className="container py-3">
                 
                    <div className="d-lg-none mb-3 position-relative" ref={searchRef}>
                        <form className="input-group" onSubmit={handleSearch}>
                            <input 
                                type="search" 
                                className="form-control" 
                                placeholder="Ürün, kategori veya marka ara..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        
                      
                        {searchResults.length > 0 && (
                            <div className={`position-absolute w-100 mt-1 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'} shadow-lg rounded-3 z-3`} style={{ top: '100%' }}>
                                <div className="p-2">
                                    <h6 className="border-bottom pb-2">Arama Sonuçları</h6>
                                    {searchResults.map(result => (
                                        <div 
                                            key={result.id} 
                                            className="d-flex align-items-center p-2 rounded hover-bg-light cursor-pointer"
                                            onClick={() => handleSearchResultClick(result)}
                                        >
                                            <div className="me-3" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                                                <img 
                                                    src={result.image} 
                                                    alt={result.name} 
                                                    className="img-fluid rounded"
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div>
                                                <div className="fw-bold">{result.name}</div>
                                                <div className="text-primary">{result.price}</div>
                                                <small className="text-muted">{result.category}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                      
                        {isSearching && (
                            <div className={`position-absolute w-100 mt-1 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'} shadow-lg rounded-3 z-3 p-3`} style={{ top: '100%' }}>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border spinner-border-sm text-primary me-2" role="status">
                                        <span className="visually-hidden">Yükleniyor...</span>
                                    </div>
                                    <span>Aranıyor...</span>
                                </div>
                            </div>
                        )}
                    </div>

                 
                    <div className="d-lg-none mb-3">
                        <h6 className="fw-bold mb-2">Kategoriler</h6>
                        <div className="row g-2">
                            {categories.slice(0, 6).map(category => (
                                <div key={category.id} className="col-6">
                                    <Link 
                                        href={category.path} 
                                        className="btn btn-outline-secondary w-100 text-start" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <i className={`fas fa-${category.icon} me-2`}></i> {category.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                
                    <div className="d-lg-none mb-3">
                        <h6 className="fw-bold mb-2">Kampanyalar</h6>
                        <div className="row g-2">
                            {campaigns.map(campaign => (
                                <div key={campaign.id} className="col-12">
                                    <Link 
                                        href={campaign.path} 
                                        className="btn btn-outline-danger w-100 text-start" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <i className="fas fa-percent me-2"></i> {campaign.name}
                                        <span className="badge bg-danger ms-1">{campaign.discount}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

               
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-home me-2"></i>Ana Sayfa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/shop" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-store me-2"></i>Ürünler
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/campaigns" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-percent me-2"></i>Kampanyalar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/new-arrivals" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-star me-2"></i>Yeni Gelenler
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/best-sellers" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-fire me-2"></i>Çok Satanlar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/favorites" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                <i className="far fa-heart me-2"></i>Favorilerim
                                {favoritesCount > 0 && (
                                    <span className="badge bg-danger ms-2">{favoritesCount}</span>
                                )}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link text-start w-100 py-2"
                                data-bs-toggle="modal"
                                data-bs-target="#cartModal"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fas fa-shopping-cart me-2"></i>Sepetim
                                {cartItemsCount > 0 && (
                                    <span className="badge bg-danger ms-2">{cartItemsCount}</span>
                                )}
                            </button>
                        </li>
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link href="/profile" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="far fa-user me-2"></i>Profilim
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/orders" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fas fa-box me-2"></i>Siparişlerim
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/addresses" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fas fa-map-marker-alt me-2"></i>Adreslerim
                                    </Link>
                                </li>
                                {user.role === 'admin' && (
                                    <li className="nav-item">
                                        <Link href="/admin" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                            <i className="fas fa-cog me-2"></i>Admin Panel
                                        </Link>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <button 
                                        onClick={handleLogout} 
                                        className="nav-link btn btn-link text-start w-100 py-2"
                                    >
                                        <i className="fas fa-sign-out-alt me-2"></i>Çıkış Yap
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link href="/login" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fas fa-sign-in-alt me-2"></i>Giriş Yap
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/register" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fas fa-user-plus me-2"></i>Üye Ol
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/forgot-password" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                                        <i className="fas fa-key me-2"></i>Şifremi Unuttum
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <button 
                                onClick={() => {
                                    toggleTheme();
                                    setIsMenuOpen(false);
                                }} 
                                className={`nav-link btn btn-link text-start w-100 py-2`}
                            >
                                <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'} me-2`}></i>
                                {isDarkMode ? 'Açık Tema' : 'Koyu Tema'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;




