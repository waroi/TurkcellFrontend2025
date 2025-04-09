"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import useAuthStore from '@/store/useAuthStore';
import ProductCard from '@/components/ProductCard';
import FilterModal from '@/components/FilterModal';

export default function NewArrivals() {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOption, setSortOption] = useState('newest');
  const [addingToCart, setAddingToCart] = useState({});
  
  // Fetch new arrivals from Firebase
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        
        // Get current date for filtering (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        // Query for new arrivals
        const newArrivalsQuery = query(
          collection(db, 'products'),
          where('createdAt', '>=', thirtyDaysAgo),
          orderBy('createdAt', 'desc')
        );
        
        try {
          const snapshot = await getDocs(newArrivalsQuery);
          
          // Process products
          const fetchedProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()
          }));
          
          // Update state
          setProducts(fetchedProducts);
          setFilteredProducts(fetchedProducts);
          setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage));
        } catch (firebaseError) {
          console.error('Firebase error:', firebaseError);
          if (firebaseError.code === 'permission-denied') {
            setError('Ürünlere erişim izniniz yok. Lütfen giriş yapın.');
          } else {
            setError('Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
        setError('Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setLoading(false);
      }
    };
    
    fetchNewArrivals();
  }, [productsPerPage]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply filters
    if (activeFilters.categories && activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.includes(product.category)
      );
    }
    
    if (activeFilters.colors && activeFilters.colors.length > 0) {
      result = result.filter(product => 
        product.colors && product.colors.some(color => 
          activeFilters.colors.includes(color)
        )
      );
    }
    
    if (activeFilters.sizes && activeFilters.sizes.length > 0) {
      result = result.filter(product => 
        product.sizes && product.sizes.some(size => 
          activeFilters.sizes.includes(size)
        )
      );
    }
    
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange;
      result = result.filter(product => 
        product.price >= min && product.price <= max
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
    setTotalPages(Math.ceil(result.length / productsPerPage));
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, activeFilters, sortOption, productsPerPage]);
  
  const handleAddToCart = async (product) => {
    if (!isAuthenticated()) {
      toast.info('Ürünü sepete eklemek için lütfen giriş yapın', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push('/login');
      return;
    }
    
    try {
      setAddingToCart(prev => ({ ...prev, [product.id]: true }));
      await addToCart(product);
      toast.success(`${product.name} sepete eklendi`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Ürün sepete eklenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }
  };
  
  const handleAddToWishlist = (product) => {
    if (!isAuthenticated()) {
      toast.info('Ürünü favorilere eklemek için lütfen giriş yapın', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push('/login');
      return;
    }
    
    // Implement wishlist functionality here
    toast.success(`${product.name} favorilere eklendi`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  if (loading) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Hata!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            <button 
              className="btn btn-outline-danger" 
              onClick={() => window.location.reload()}
            >
              <i className="fas fa-sync-alt me-2"></i>Tekrar Dene
            </button>
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-4">
      {/* Hero Section */}
      <div className="card shadow-sm mb-4 overflow-hidden">
        <div className="position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-relative p-5 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              <i className="fas fa-star me-2"></i>
              Yeni Gelenler
            </h1>
            <p className="lead mb-4">
              En yeni ürünlerimizi keşfedin ve trendleri yakından takip edin!
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/shop" className="btn btn-primary btn-lg">
                <i className="fas fa-shopping-bag me-2"></i>Tüm Ürünler
              </Link>
              <button 
                className="btn btn-outline-light btn-lg"
                onClick={() => setIsFilterModalOpen(true)}
              >
                <i className="fas fa-filter me-2"></i>Filtrele
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters and Sort */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-outline-primary me-2"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <i className="fas fa-filter me-2"></i>
            Filtrele
          </button>
          <div className="dropdown">
            <button 
              className="btn btn-outline-secondary dropdown-toggle" 
              type="button" 
              id="sortDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <i className="fas fa-sort me-2"></i>
              Sırala
            </button>
            <ul className="dropdown-menu" aria-labelledby="sortDropdown">
              <li>
                <button 
                  className={`dropdown-item ${sortOption === 'newest' ? 'active' : ''}`}
                  onClick={() => setSortOption('newest')}
                >
                  En Yeniler
                </button>
              </li>
              <li>
                <button 
                  className={`dropdown-item ${sortOption === 'price-low-high' ? 'active' : ''}`}
                  onClick={() => setSortOption('price-low-high')}
                >
                  Fiyat (Düşükten Yükseğe)
                </button>
              </li>
              <li>
                <button 
                  className={`dropdown-item ${sortOption === 'price-high-low' ? 'active' : ''}`}
                  onClick={() => setSortOption('price-high-low')}
                >
                  Fiyat (Yüksekten Düşüğe)
                </button>
              </li>
              <li>
                <button 
                  className={`dropdown-item ${sortOption === 'name-a-z' ? 'active' : ''}`}
                  onClick={() => setSortOption('name-a-z')}
                >
                  İsim (A-Z)
                </button>
              </li>
              <li>
                <button 
                  className={`dropdown-item ${sortOption === 'name-z-a' ? 'active' : ''}`}
                  onClick={() => setSortOption('name-z-a')}
                >
                  İsim (Z-A)
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-muted">
            {filteredProducts.length} ürün bulundu
          </span>
        </div>
      </div>
      
      {/* Products Grid */}
      {currentProducts.length > 0 ? (
        <div className="row g-4">
          {currentProducts.map(product => (
            <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
              <ProductCard 
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                isAddingToCart={addingToCart[product.id]}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">
          <i className="fas fa-info-circle me-2"></i>
          Filtrelere uygun ürün bulunamadı.
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="fas fa-chevron-left me-1"></i>Önceki
                </button>
              </li>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <li 
                  key={number} 
                  className={`page-item ${currentPage === number ? 'active' : ''}`}
                >
                  <button 
                    className="page-link" 
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Sonraki<i className="fas fa-chevron-right ms-1"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      
      {/* Filter Modal */}
      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </div>
  );
}