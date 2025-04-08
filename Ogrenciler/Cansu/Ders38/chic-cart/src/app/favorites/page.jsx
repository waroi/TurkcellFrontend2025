"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useFavoritesStore from '@/store/useFavoritesStore';
import useCartStore from '@/store/useCartStore';
import useAuthStore from '@/store/useAuthStore';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Favorites() {
  const router = useRouter();
  const { favorites, removeFromFavorites, clearFavorites } = useFavoritesStore();
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  const [isRemovingItem, setIsRemovingItem] = useState({});
  const [isClearingFavorites, setIsClearingFavorites] = useState(false);
  const [addingToCart, setAddingToCart] = useState({});
  const [sortBy, setSortBy] = useState('date');
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [priceAlerts, setPriceAlerts] = useState({});
  const [showPriceAlertModal, setShowPriceAlertModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [alertPrice, setAlertPrice] = useState('');
  const [isSettingAlert, setIsSettingAlert] = useState(false);
  
  // Load price alerts from localStorage on component mount
  useEffect(() => {
    try {
      const savedAlerts = localStorage.getItem('priceAlerts');
      if (savedAlerts) {
        setPriceAlerts(JSON.parse(savedAlerts));
      }
    } catch (error) {
      console.error('Error loading price alerts:', error);
    }
  }, []);
  
  // Save price alerts to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
    } catch (error) {
      console.error('Error saving price alerts:', error);
    }
  }, [priceAlerts]);
  
  // Check for price drops every 500ms
  useEffect(() => {
    // Function to simulate price drops and show notifications
    const checkPriceDrops = () => {
      // Only proceed if there are price alerts
      if (Object.keys(priceAlerts).length === 0) return;
      
      // Get current timestamp
      const now = Date.now();
      
      // Check each price alert
      Object.entries(priceAlerts).forEach(([productId, alert]) => {
        // Get the last notification time for this product
        const lastNotificationKey = `lastNotification_${productId}`;
        const lastNotification = localStorage.getItem(lastNotificationKey);
        
        // Skip if we've notified recently (within 3 seconds)
        if (lastNotification && (now - parseInt(lastNotification)) < 3000) {
          return;
        }
        
        // 80% chance of price drop notification
        if (Math.random() < 0.8) {
          // Simulate a price drop (5-20% reduction)
          const priceReduction = 0.8 + (Math.random() * 0.15); // 0.8 to 0.95 (5-20% reduction)
          const newPrice = alert.currentPrice * priceReduction;
          
          // Only notify if the new price is below the alert price
          if (newPrice <= alert.price) {
            // Show notification
            toast.info(
              <div>
                <strong>{alert.productName}</strong> için fiyat düştü!<br />
                Hedef: {alert.price.toFixed(2)} ₺<br />
                Şu anki fiyat: {newPrice.toFixed(2)} ₺
              </div>,
              {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              }
            );
            
            // Save notification time
            localStorage.setItem(lastNotificationKey, now.toString());
          }
        }
      });
    };
    
    // Run immediately and then every 500ms
    checkPriceDrops();
    const interval = setInterval(checkPriceDrops, 500);
    
    return () => clearInterval(interval);
  }, [priceAlerts]);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    // Initialize filtered favorites
    setFilteredFavorites([...favorites]);
  }, [favorites, isAuthenticated, router]);
  
  useEffect(() => {
    // Sort favorites based on selected option
    let sorted = [...favorites];
    
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
      default:
        // Keep original order (newest first)
        break;
    }
    
    setFilteredFavorites(sorted);
  }, [favorites, sortBy]);
  
  const handleRemoveFromFavorites = (productId, productName) => {
    try {
      setIsRemovingItem(prev => ({ ...prev, [productId]: true }));
      removeFromFavorites(productId);
      
      // Also remove price alert if exists
      if (priceAlerts[productId]) {
        const updatedAlerts = { ...priceAlerts };
        delete updatedAlerts[productId];
        setPriceAlerts(updatedAlerts);
        
        // Also remove notification time
        localStorage.removeItem(`lastNotification_${productId}`);
      }
      
      toast.success(`${productName} favorilerden çıkarıldı`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Ürün favorilerden çıkarılırken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsRemovingItem(prev => ({ ...prev, [productId]: false }));
    }
  };
  
  const handleClearFavorites = () => {
    if (!window.confirm("Tüm favori ürünlerinizi silmek istediğinize emin misiniz?")) {
      return;
    }
    
    try {
      setIsClearingFavorites(true);
      clearFavorites();
      
      // Also clear all price alerts
      setPriceAlerts({});
      
      // Clear all notification times
      Object.keys(priceAlerts).forEach(productId => {
        localStorage.removeItem(`lastNotification_${productId}`);
      });
      
      toast.success("Favoriler temizlendi", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Favoriler temizlenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsClearingFavorites(false);
    }
  };
  
  const handleAddToCart = (product) => {
    try {
      setAddingToCart(prev => ({ ...prev, [product.id]: true }));
      addToCart(product);
      toast.success(`${product.title} sepete eklendi`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
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
  
  const openPriceAlertModal = (product) => {
    setSelectedProduct(product);
    setAlertPrice(priceAlerts[product.id]?.price || '');
    setShowPriceAlertModal(true);
  };
  
  const closePriceAlertModal = () => {
    setShowPriceAlertModal(false);
    setSelectedProduct(null);
    setAlertPrice('');
  };
  
  const handleSetPriceAlert = () => {
    if (!selectedProduct) return;
    
    const price = parseFloat(alertPrice);
    if (isNaN(price) || price <= 0) {
      toast.error("Lütfen geçerli bir fiyat girin", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    
    try {
      setIsSettingAlert(true);
      
      // Update price alerts
      const updatedAlerts = {
        ...priceAlerts,
        [selectedProduct.id]: {
          price,
          productId: selectedProduct.id,
          productName: selectedProduct.title,
          currentPrice: selectedProduct.price,
          dateSet: new Date().toISOString()
        }
      };
      
      setPriceAlerts(updatedAlerts);
      
      // Show success message
      toast.success(`${selectedProduct.title} için fiyat alarmı kuruldu: ${price.toFixed(2)} ₺`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Simulate an immediate price drop notification (for demo purposes)
      // This will show a notification after 1 second if the target price is close to current price
      if (price > selectedProduct.price * 0.85) {
        setTimeout(() => {
          const newPrice = selectedProduct.price * 0.8; // 20% price drop
          toast.info(
            <div>
              <strong>{selectedProduct.title}</strong> için fiyat düştü!<br />
              Hedef: {price.toFixed(2)} ₺<br />
              Şu anki fiyat: {newPrice.toFixed(2)} ₺
            </div>,
            {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          
          // Save notification time
          localStorage.setItem(`lastNotification_${selectedProduct.id}`, Date.now().toString());
        }, 1000);
      }
      
      closePriceAlertModal();
    } catch (error) {
      toast.error("Fiyat alarmı kurulurken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSettingAlert(false);
    }
  };
  
  const handleRemovePriceAlert = (productId, productName) => {
    try {
      const updatedAlerts = { ...priceAlerts };
      delete updatedAlerts[productId];
      setPriceAlerts(updatedAlerts);
      
      // Also remove notification time
      localStorage.removeItem(`lastNotification_${productId}`);
      
      toast.success(`${productName} için fiyat alarmı kaldırıldı`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Fiyat alarmı kaldırılırken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  
  if (!isAuthenticated()) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Giriş Yapmanız Gerekiyor</h4>
          <p>Favorilerinizi görüntülemek için lütfen giriş yapın.</p>
          <hr />
          <p className="mb-0">
            <Link href="/login" className="btn btn-primary">
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">
          <i className="far fa-heart text-danger me-2"></i>
          Favorilerim
        </h1>
        <div className="d-flex align-items-center">
          <label htmlFor="sortFavorites" className="me-2">Sırala:</label>
          <select 
            id="sortFavorites" 
            className="form-select form-select-sm" 
            style={{ width: 'auto' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">En Yeni</option>
            <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
            <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
            <option value="name">İsim (A-Z)</option>
          </select>
        </div>
      </div>
      
      {favorites.length === 0 ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <i className="far fa-heart fa-4x text-muted mb-3"></i>
            <h3>Favori Ürününüz Yok</h3>
            <p className="text-muted">Henüz favori ürün eklemediniz.</p>
            <Link href="/shop" className="btn btn-primary mt-3">
              <i className="fas fa-shopping-bag me-2"></i>Alışverişe Başla
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="far fa-heart text-danger me-2"></i>
                Favori Ürünlerim ({favorites.length})
              </h5>
              <button 
                className="btn btn-sm btn-outline-danger" 
                onClick={handleClearFavorites}
                disabled={isClearingFavorites}
              >
                {isClearingFavorites ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Temizleniyor...
                  </>
                ) : (
                  <>
                    <i className="fas fa-trash me-2"></i>Tümünü Temizle
                  </>
                )}
              </button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Ürün</th>
                      <th>Fiyat</th>
                      <th>Kategori</th>
                      <th>Fiyat Alarmı</th>
                      <th>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFavorites.map(item => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                              className="me-3"
                            />
                            <div>
                              <h6 className="mb-0 text-truncate" style={{ maxWidth: '200px' }} title={item.title}>
                                {item.title}
                              </h6>
                              <small className="text-muted">{item.description}</small>
                            </div>
                          </div>
                        </td>
                        <td className="fw-bold">{item.price.toFixed(2)} ₺</td>
                        <td>{item.category}</td>
                        <td>
                          {priceAlerts[item.id] ? (
                            <div className="d-flex align-items-center">
                              <span className="badge bg-info me-2">
                                {priceAlerts[item.id].price.toFixed(2)} ₺
                              </span>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleRemovePriceAlert(item.id, item.title)}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          ) : (
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => openPriceAlertModal(item)}
                            >
                              <i className="fas fa-bell me-1"></i>
                              Alarm Kur
                            </button>
                          )}
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => handleAddToCart(item)}
                              disabled={addingToCart[item.id]}
                            >
                              {addingToCart[item.id] ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              ) : (
                                <>
                                  <i className="fas fa-shopping-cart me-1"></i>
                                  Sepete Ekle
                                </>
                              )}
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleRemoveFromFavorites(item.id, item.title)}
                              disabled={isRemovingItem[item.id]}
                            >
                              {isRemovingItem[item.id] ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              ) : (
                                <i className="fas fa-trash"></i>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted">Toplam {favorites.length} ürün</span>
              </div>
              <Link href="/shop" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>Alışverişe Devam Et
              </Link>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="card-title mb-0">
                    <i className="fas fa-info-circle me-2"></i>
                    Favoriler Hakkında
                  </h5>
                </div>
                <div className="card-body">
                  <p>Favori ürünlerinizi kaydederek daha sonra kolayca erişebilirsiniz.</p>
                  <ul className="mb-0">
                    <li>Favori ürünlerinizi sepete ekleyebilirsiniz</li>
                    <li>Favori ürünlerinizi kategorilere göre filtreleyebilirsiniz</li>
                    <li>Favori ürünlerinizi fiyata göre sıralayabilirsiniz</li>
                    <li>Favori ürünlerinizi tek tıkla kaldırabilirsiniz</li>
                    <li>Favori ürünleriniz için fiyat alarmı kurabilirsiniz</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="card-title mb-0">
                    <i className="fas fa-bell me-2"></i>
                    Fiyat Alarmları
                  </h5>
                </div>
                <div className="card-body">
                  <p>Favori ürünlerinizin fiyatı düştüğünde size bildirim gönderelim.</p>
                  {Object.keys(priceAlerts).length > 0 ? (
                    <div className="list-group">
                      {Object.values(priceAlerts).map(alert => (
                        <div key={alert.productId} className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-0">{alert.productName}</h6>
                            <small className="text-muted">
                              Hedef: {alert.price.toFixed(2)} ₺ | Mevcut: {alert.currentPrice.toFixed(2)} ₺
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleRemovePriceAlert(alert.productId, alert.productName)}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle me-2"></i>
                      Henüz fiyat alarmı kurmadınız.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Price Alert Modal */}
      {showPriceAlertModal && selectedProduct && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="fas fa-bell text-warning me-2"></i>
                  Fiyat Alarmı Kur
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closePriceAlertModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <h6>{selectedProduct.title}</h6>
                  <p className="text-muted">Mevcut Fiyat: {selectedProduct.price.toFixed(2)} ₺</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="alertPrice" className="form-label">Hedef Fiyat (₺)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="alertPrice"
                    value={alertPrice}
                    onChange={(e) => setAlertPrice(e.target.value)}
                    min="0"
                    step="0.01"
                    placeholder="Örn: 99.99"
                  />
                  <div className="form-text">
                    Ürün fiyatı bu değerin altına düştüğünde size bildirim göndereceğiz.
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={closePriceAlertModal}
                >
                  İptal
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleSetPriceAlert}
                  disabled={isSettingAlert}
                >
                  {isSettingAlert ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Kuruluyor...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-bell me-2"></i>
                      Alarmı Kur
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
}