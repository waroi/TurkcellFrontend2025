"use client";
import React, { useEffect, useState } from 'react';
import useCartStore from "@/store/useCartStore";
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function CartModal() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [updatingItem, setUpdatingItem] = useState({});
  const [isRemovingItem, setIsRemovingItem] = useState({});
  const [isClearingCart, setIsClearingCart] = useState(false);

  useEffect(() => {
    // Update cart count when cart items change
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    
    // Initialize Bootstrap modal
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
      cartModal.addEventListener('shown.bs.modal', () => setIsModalOpen(true));
      cartModal.addEventListener('hidden.bs.modal', () => setIsModalOpen(false));
    }
    
    return () => {
      if (cartModal) {
        cartModal.removeEventListener('shown.bs.modal', () => setIsModalOpen(true));
        cartModal.removeEventListener('hidden.bs.modal', () => setIsModalOpen(false));
      }
    };
  }, [cartItems]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      setUpdatingItem(prev => ({ ...prev, [productId]: true }));
      updateQuantity(productId, parseInt(newQuantity));
      toast.success("Ürün miktarı güncellendi", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Ürün miktarı güncellenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setUpdatingItem(prev => ({ ...prev, [productId]: false }));
    }
  };

  const handleRemoveItem = (productId, productName) => {
    try {
      setIsRemovingItem(prev => ({ ...prev, [productId]: true }));
      removeFromCart(productId);
      toast.success(`${productName} sepetten çıkarıldı`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Ürün sepetten çıkarılırken bir hata oluştu", {
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

  const handleClearCart = () => {
    if (!window.confirm("Sepetinizdeki tüm ürünleri silmek istediğinize emin misiniz?")) {
      return;
    }
    
    try {
      setIsClearingCart(true);
      clearCart();
      toast.success("Sepet temizlendi", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Sepet temizlenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsClearingCart(false);
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated()) {
      toast.error("Lütfen önce giriş yapın", {
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
    router.push('/checkout');
  };

  const handleViewFullCart = () => {
    // Close the modal
    const modal = document.getElementById('cartModal');
    if (modal) {
      const bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) bsModal.hide();
    }
    // Navigate to the cart page
    router.push('/cart');
  };

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="cartModalLabel">
              <i className="fas fa-shopping-cart me-2"></i>
              Sepetim ({cartCount} ürün)
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {cartItems.length > 0 ? (
              <>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Ürün</th>
                        <th>Fiyat</th>
                        <th>Adet</th>
                        <th>Toplam</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                className="me-3"
                              />
                              <div>
                                <h6 className="mb-0 text-truncate" style={{ maxWidth: '200px' }} title={item.title}>
                                  {item.title}
                                </h6>
                                <small className="text-muted">{item.category}</small>
                              </div>
                            </div>
                          </td>
                          <td>{item.price.toFixed(2)} ₺</td>
                          <td>
                            <div className="input-group input-group-sm" style={{ width: '120px' }}>
                              <button 
                                className="btn btn-outline-primary" 
                                type="button"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1 || updatingItem[item.id]}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <input
                                type="number"
                                className="form-control text-center"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                min="1"
                                disabled={updatingItem[item.id]}
                              />
                              <button 
                                className="btn btn-outline-primary" 
                                type="button"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                disabled={updatingItem[item.id]}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="fw-bold">{(item.price * item.quantity).toFixed(2)} ₺</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleRemoveItem(item.id, item.title)}
                              disabled={isRemovingItem[item.id]}
                            >
                              {isRemovingItem[item.id] ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              ) : (
                                <i className="fas fa-trash"></i>
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button 
                    className="btn btn-outline-danger" 
                    onClick={handleClearCart}
                    disabled={isClearingCart}
                  >
                    {isClearingCart ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Temizleniyor...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-trash me-2"></i>Sepeti Temizle
                      </>
                    )}
                  </button>
                  <div className="text-end">
                    <p className="mb-1">Kargo: <span className="text-success">Ücretsiz</span></p>
                    <h5 className="text-primary mb-0">Toplam: {getCartTotal().toFixed(2)} ₺</h5>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-5">
                <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                <h4>Sepetiniz Boş</h4>
                <p className="text-muted">Sepetinizde henüz ürün bulunmuyor.</p>
                <button 
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    const modal = document.getElementById('cartModal');
                    if (modal) {
                      const bsModal = bootstrap.Modal.getInstance(modal);
                      if (bsModal) bsModal.hide();
                    }
                    router.push('/shop');
                  }}
                >
                  <i className="fas fa-shopping-bag me-2"></i>Alışverişe Başla
                </button>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              <i className="fas fa-times me-2"></i>Kapat
            </button>
            {cartItems.length > 0 && (
              <>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-2"
                  onClick={handleViewFullCart}
                >
                  <i className="fas fa-shopping-cart me-2"></i>Sepeti Görüntüle
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleCheckout}
                >
                  <i className="fas fa-credit-card me-2"></i>Ödemeye Geç
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




