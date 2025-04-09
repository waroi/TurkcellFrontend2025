"use client";
import React, { useState, useEffect } from 'react';
import useCartStore from "@/store/useCartStore";
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import CartModal from '@/components/CartModal';

export default function Cart() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  const [updatingItem, setUpdatingItem] = useState({});
  const [isRemovingItem, setIsRemovingItem] = useState({});
  const [isClearingCart, setIsClearingCart] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Update cart count when cart items change
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [cartItems, isAuthenticated, router]);

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

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error("Lütfen bir kupon kodu girin", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsApplyingCoupon(true);
    
    // Simulate API call to validate coupon
    setTimeout(() => {
      // Sample coupon codes
      if (couponCode.toLowerCase() === 'indirim10') {
        const discountAmount = getCartTotal() * 0.1;
        setDiscount(discountAmount);
        setAppliedCoupon({
          code: couponCode,
          discount: discountAmount
        });
        toast.success("Kupon kodu uygulandı: %10 indirim", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (couponCode.toLowerCase() === 'indirim20') {
        const discountAmount = getCartTotal() * 0.2;
        setDiscount(discountAmount);
        setAppliedCoupon({
          code: couponCode,
          discount: discountAmount
        });
        toast.success("Kupon kodu uygulandı: %20 indirim", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Geçersiz kupon kodu", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      setIsApplyingCoupon(false);
    }, 1000);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
    setCouponCode('');
    toast.info("Kupon kodu kaldırıldı", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      router.push('/checkout');
    }, 1500);
  };

  const getShippingCost = () => {
    switch (shippingMethod) {
      case 'express':
        return 29.99;
      case 'standard':
      default:
        return 0; // Free shipping
    }
  };

  const getFinalTotal = () => {
    return getCartTotal() - discount + getShippingCost();
  };

  if (!isAuthenticated()) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Giriş Yapmanız Gerekiyor</h4>
          <p>Sepetinizi görüntülemek için lütfen giriş yapın.</p>
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
      <h1 className="mb-4">Alışveriş Sepetim</h1>
      
      {cartItems.length === 0 ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
            <h3>Sepetiniz Boş</h3>
            <p className="text-muted">Sepetinizde henüz ürün bulunmuyor.</p>
            <Link href="/shop" className="btn btn-primary mt-3">
              <i className="fas fa-shopping-bag me-2"></i>Alışverişe Başla
            </Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Sepetim ({cartCount} ürün)
                </h5>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
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
                                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
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
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
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
                <Link href="/shop" className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>Alışverişe Devam Et
                </Link>
              </div>
            </div>
            
            {/* Coupon Code Section */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="card-title mb-0">
                  <i className="fas fa-tag me-2"></i>
                  Kupon Kodu
                </h5>
              </div>
              <div className="card-body">
                {appliedCoupon ? (
                  <div className="alert alert-success d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Kupon Uygulandı:</strong> {appliedCoupon.code}
                      <div className="text-success">İndirim: {appliedCoupon.discount.toFixed(2)} ₺</div>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-success" 
                      onClick={handleRemoveCoupon}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ) : (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kupon kodunuzu girin"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button 
                      className="btn btn-primary" 
                      onClick={handleApplyCoupon}
                      disabled={isApplyingCoupon}
                    >
                      {isApplyingCoupon ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Uygulanıyor...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-check me-2"></i>Uygula
                        </>
                      )}
                    </button>
                  </div>
                )}
                <div className="mt-2">
                  <small className="text-muted">
                    <i className="fas fa-info-circle me-1"></i>
                    Örnek kupon kodları: "indirim10" (%10 indirim), "indirim20" (%20 indirim)
                  </small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                  <i className="fas fa-receipt me-2"></i>
                  Sipariş Özeti
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">Kargo Seçeneği</label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shippingMethod"
                      id="standardShipping"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="standardShipping">
                      Standart Kargo (3-5 iş günü) - <span className="text-success">Ücretsiz</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shippingMethod"
                      id="expressShipping"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="expressShipping">
                      Express Kargo (1-2 iş günü) - 29.99 ₺
                    </label>
                  </div>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Ara Toplam:</span>
                  <span>{getCartTotal().toFixed(2)} ₺</span>
                </div>
                
                {discount > 0 && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>İndirim:</span>
                    <span>-{discount.toFixed(2)} ₺</span>
                  </div>
                )}
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Kargo:</span>
                  <span>
                    {getShippingCost() === 0 ? (
                      <span className="text-success">Ücretsiz</span>
                    ) : (
                      `${getShippingCost().toFixed(2)} ₺`
                    )}
                  </span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold">Toplam:</span>
                  <span className="h4 mb-0 text-primary fw-bold">{getFinalTotal().toFixed(2)} ₺</span>
                </div>
                
                <button
                  className="btn btn-primary w-100 py-3"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      İşleniyor...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-credit-card me-2"></i>
                      Ödemeye Geç
                    </>
                  )}
                </button>
                
                <div className="text-center mt-3">
                  <small className="text-muted">
                    <i className="fas fa-lock me-1"></i>
                    Güvenli ödeme
                  </small>
                </div>
              </div>
            </div>
            
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="card-title mb-0">
                  <i className="fas fa-shield-alt me-2"></i>
                  Güvenli Alışveriş
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="fas fa-truck fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Hızlı Teslimat</h6>
                    <small className="text-muted">3-5 iş günü içinde teslimat</small>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="fas fa-undo fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Kolay İade</h6>
                    <small className="text-muted">14 gün içinde ücretsiz iade</small>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <i className="fas fa-lock fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Güvenli Ödeme</h6>
                    <small className="text-muted">256-bit SSL güvenlik sertifikası</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
