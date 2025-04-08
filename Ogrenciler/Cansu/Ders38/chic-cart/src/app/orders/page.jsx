"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { collection, query, where, getDocs, orderBy, limit, startAfter, documentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import useAuthStore from '@/store/useAuthStore';
import { toast } from 'react-toastify';

const Orders = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    const fetchOrders = async () => {
      try {
        setLoading(true);
        
        
        let q = query(
          collection(db, 'orders'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc'),
          limit(10)
        );
        
     
        if (activeTab !== 'all') {
          q = query(q, where('status', '==', activeTab));
        }
        
        const querySnapshot = await getDocs(q);
    
        const fetchedOrders = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate(),
        }));
        
        setOrders(fetchedOrders);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setHasMore(querySnapshot.docs.length === 10);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Siparişleriniz yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, [user, isAuthenticated, router, activeTab]);
  
  const loadMoreOrders = async () => {
    if (!lastVisible || !hasMore || loadingMore) return;
    
    try {
      setLoadingMore(true);
      

      let q = query(
        collection(db, 'orders'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        startAfter(lastVisible),
        limit(10)
      );
      
     
      if (activeTab !== 'all') {
        q = query(q, where('status', '==', activeTab));
      }
      
      const querySnapshot = await getDocs(q);
      

      const newOrders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      }));
      
      setOrders(prev => [...prev, ...newOrders]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(querySnapshot.docs.length === 10);
      setLoadingMore(false);
    } catch (error) {
      console.error('Error loading more orders:', error);
      toast.error('Daha fazla sipariş yüklenirken bir hata oluştu.');
      setLoadingMore(false);
    }
  };
  
  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };
  
  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
    setSelectedOrder(null);
  };
  
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };
  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'processing':
        return 'bg-info';
      case 'shipped':
        return 'bg-primary';
      case 'delivered':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      case 'refunded':
        return 'bg-secondary';
      default:
        return 'bg-secondary';
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Beklemede';
      case 'processing':
        return 'İşleniyor';
      case 'shipped':
        return 'Kargoya Verildi';
      case 'delivered':
        return 'Teslim Edildi';
      case 'cancelled':
        return 'İptal Edildi';
      case 'refunded':
        return 'İade Edildi';
      default:
        return status;
    }
  };
  
  const getTrackingStatus = (order) => {
    if (!order.tracking) return null;
    
    const statuses = [
      { status: 'pending', text: 'Sipariş Alındı', icon: 'fa-shopping-cart' },
      { status: 'processing', text: 'Hazırlanıyor', icon: 'fa-box' },
      { status: 'shipped', text: 'Kargoya Verildi', icon: 'fa-truck' },
      { status: 'delivered', text: 'Teslim Edildi', icon: 'fa-check-circle' }
    ];
    
    const currentStatusIndex = statuses.findIndex(s => s.status === order.status);
    
    return statuses.map((status, index) => {
      const isActive = index <= currentStatusIndex;
      const isCurrent = index === currentStatusIndex;
      
      return (
        <div key={status.status} className={`tracking-step ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
          <div className="tracking-icon">
            <i className={`fas ${status.icon}`}></i>
          </div>
          <div className="tracking-text">{status.text}</div>
        </div>
      );
    });
  };
  
  const filterOrders = () => {
    let filtered = [...orders];
    
   
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (dateFilter !== 'all') {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
      const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90));
      
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.createdAt);
        
        switch (dateFilter) {
          case 'last30':
            return orderDate >= thirtyDaysAgo;
          case 'last90':
            return orderDate >= ninetyDaysAgo;
          case 'thisYear':
            return orderDate.getFullYear() === new Date().getFullYear();
          default:
            return true;
        }
      });
    }
    

    if (priceFilter !== 'all') {
      filtered = filtered.filter(order => {
        switch (priceFilter) {
          case 'under100':
            return order.total < 100;
          case '100to500':
            return order.total >= 100 && order.total < 500;
          case '500to1000':
            return order.total >= 500 && order.total < 1000;
          case 'over1000':
            return order.total >= 1000;
          default:
            return true;
        }
      });
    }
    
    return filtered;
  };
  
  const filteredOrders = filterOrders();
  
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

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">
          <i className="fas fa-shopping-bag me-2 text-primary"></i>
          Siparişlerim
        </h1>
        <Link href="/shop" className="btn btn-primary">
          <i className="fas fa-shopping-cart me-2"></i>Alışverişe Devam Et
        </Link>
      </div>
      
    
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sipariş veya ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="all">Tüm Tarihler</option>
                <option value="last30">Son 30 Gün</option>
                <option value="last90">Son 90 Gün</option>
                <option value="thisYear">Bu Yıl</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">Tüm Fiyatlar</option>
                <option value="under100">100 TL'den Az</option>
                <option value="100to500">100 TL - 500 TL</option>
                <option value="500to1000">500 TL - 1000 TL</option>
                <option value="over1000">1000 TL'den Fazla</option>
              </select>
            </div>
            <div className="col-md-2">
              <button 
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setSearchTerm('');
                  setDateFilter('all');
                  setPriceFilter('all');
                }}
              >
                <i className="fas fa-times me-1"></i>Filtreleri Temizle
              </button>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="mb-4">
        <ul className="nav nav-pills nav-fill" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
            >
              <i className="fas fa-list me-1"></i>Tümü
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'pending' ? 'active' : ''}`}
              onClick={() => setActiveTab('pending')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'pending'}
            >
              <i className="fas fa-clock me-1"></i>Bekleyenler
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'processing' ? 'active' : ''}`}
              onClick={() => setActiveTab('processing')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'processing'}
            >
              <i className="fas fa-box me-1"></i>İşleniyor
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'shipped' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipped')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'shipped'}
            >
              <i className="fas fa-truck me-1"></i>Kargoda
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'delivered' ? 'active' : ''}`}
              onClick={() => setActiveTab('delivered')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'delivered'}
            >
              <i className="fas fa-check-circle me-1"></i>Teslim Edildi
            </button>
          </li>
        </ul>
      </div>
      
 
      {filteredOrders.length === 0 ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <div className="mb-4">
              <i className="fas fa-shopping-bag fa-4x text-muted"></i>
            </div>
            <h4>Sipariş Bulunamadı</h4>
            <p className="text-muted mb-4">
              {activeTab !== 'all' 
                ? `${getStatusText(activeTab)} durumunda siparişiniz bulunmamaktadır.` 
                : 'Henüz hiç sipariş vermediniz veya arama kriterlerinize uygun sipariş bulunamadı.'}
            </p>
            <Link href="/shop" className="btn btn-primary">
              <i className="fas fa-shopping-cart me-2"></i>Alışverişe Başla
            </Link>
          </div>
        </div>
      ) : (
        <div className="orders-list">
          {filteredOrders.map((order) => (
            <div key={order.id} className="card shadow-sm mb-4">
              <div className="card-header bg-white py-3">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="order-icon me-3">
                        <i className="fas fa-shopping-bag fa-2x text-primary"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Sipariş No: {order.orderNumber}</h6>
                        <small className="text-muted">{formatDate(order.createdAt)}</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="order-status">
                      <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="order-total">
                      <strong>Toplam:</strong> {formatPrice(order.total)}
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleViewOrderDetails(order)}
                    >
                      <i className="fas fa-eye me-1"></i>Detayları Görüntüle
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="order-items">
                      {order.items.slice(0, 3).map((item, index) => (
                        <div key={index} className="order-item d-flex align-items-center mb-3">
                          <div className="item-image me-3">
                            <div className="image-placeholder">
                              <i className="fas fa-image"></i>
                            </div>
                          </div>
                          <div className="item-details flex-grow-1">
                            <h6 className="mb-1">{item.name}</h6>
                            <p className="mb-0 text-muted">
                              {item.quantity} adet x {formatPrice(item.price)}
                            </p>
                          </div>
                          <div className="item-total">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="text-center mt-2">
                          <button 
                            className="btn btn-link btn-sm p-0"
                            onClick={() => handleViewOrderDetails(order)}
                          >
                            +{order.items.length - 3} daha fazla ürün
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="order-summary">
                      <h6 className="mb-3">Sipariş Özeti</h6>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Ara Toplam:</span>
                        <span>{formatPrice(order.subtotal)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Kargo:</span>
                        <span>{formatPrice(order.shipping)}</span>
                      </div>
                      {order.discount > 0 && (
                        <div className="d-flex justify-content-between mb-2 text-success">
                          <span>İndirim:</span>
                          <span>-{formatPrice(order.discount)}</span>
                        </div>
                      )}
                      <div className="d-flex justify-content-between fw-bold mt-2 pt-2 border-top">
                        <span>Toplam:</span>
                        <span>{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="shipping-address">
                      <small className="text-muted d-block mb-1">Teslimat Adresi:</small>
                      <p className="mb-0">
                        {order.shippingAddress?.name}<br />
                        {order.shippingAddress?.address}<br />
                        {order.shippingAddress?.city}, {order.shippingAddress?.state} {order.shippingAddress?.zipCode}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 text-end">
                    {order.status === 'delivered' && (
                      <button className="btn btn-outline-success btn-sm me-2">
                        <i className="fas fa-star me-1"></i>Değerlendir
                      </button>
                    )}
                    {order.status === 'shipped' && (
                      <button className="btn btn-outline-primary btn-sm me-2">
                        <i className="fas fa-truck me-1"></i>Kargo Takip
                      </button>
                    )}
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="fas fa-file-invoice me-1"></i>Fatura
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
       
          {hasMore && (
            <div className="text-center mt-4">
              <button 
                className="btn btn-outline-primary"
                onClick={loadMoreOrders}
                disabled={loadingMore}
              >
                {loadingMore ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Yükleniyor...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sync-alt me-2"></i>Daha Fazla Sipariş Yükle
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
      
 
      {showOrderDetails && selectedOrder && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Sipariş Detayları: {selectedOrder.orderNumber}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseOrderDetails}
                ></button>
              </div>
              <div className="modal-body">
        
                <div className="order-tracking mb-4">
                  <h6 className="mb-3">Sipariş Durumu</h6>
                  <div className="tracking-timeline">
                    {getTrackingStatus(selectedOrder)}
                  </div>
                </div>
                
         
                <div className="order-items-detail mb-4">
                  <h6 className="mb-3">Sipariş Edilen Ürünler</h6>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Ürün</th>
                          <th className="text-center">Adet</th>
                          <th className="text-end">Birim Fiyat</th>
                          <th className="text-end">Toplam</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.items.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="item-image me-3">
                                  <div className="image-placeholder">
                                    <i className="fas fa-image"></i>
                                  </div>
                                </div>
                                <div>
                                  <h6 className="mb-0">{item.name}</h6>
                                  {item.variant && (
                                    <small className="text-muted">{item.variant}</small>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-end">{formatPrice(item.price)}</td>
                            <td className="text-end">{formatPrice(item.price * item.quantity)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
    
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-header bg-light">
                        <h6 className="mb-0">Teslimat Bilgileri</h6>
                      </div>
                      <div className="card-body">
                        <p className="mb-1"><strong>{selectedOrder.shippingAddress?.name}</strong></p>
                        <p className="mb-1">{selectedOrder.shippingAddress?.address}</p>
                        <p className="mb-1">
                          {selectedOrder.shippingAddress?.city}, {selectedOrder.shippingAddress?.state} {selectedOrder.shippingAddress?.zipCode}
                        </p>
                        <p className="mb-0">{selectedOrder.shippingAddress?.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-header bg-light">
                        <h6 className="mb-0">Ödeme Bilgileri</h6>
                      </div>
                      <div className="card-body">
                        <p className="mb-1"><strong>Ödeme Yöntemi:</strong> {selectedOrder.paymentMethod}</p>
                        <p className="mb-1"><strong>Ödeme Durumu:</strong> {selectedOrder.paymentStatus === 'paid' ? 'Ödendi' : 'Beklemede'}</p>
                        <p className="mb-1"><strong>İşlem Tarihi:</strong> {formatDate(selectedOrder.paymentDate)}</p>
                        {selectedOrder.trackingNumber && (
                          <p className="mb-0"><strong>Kargo Takip No:</strong> {selectedOrder.trackingNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
               
                <div className="card">
                  <div className="card-header bg-light">
                    <h6 className="mb-0">Sipariş Özeti</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Ara Toplam:</span>
                          <span>{formatPrice(selectedOrder.subtotal)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Kargo:</span>
                          <span>{formatPrice(selectedOrder.shipping)}</span>
                        </div>
                        {selectedOrder.discount > 0 && (
                          <div className="d-flex justify-content-between mb-2 text-success">
                            <span>İndirim:</span>
                            <span>-{formatPrice(selectedOrder.discount)}</span>
                          </div>
                        )}
                        <div className="d-flex justify-content-between fw-bold mt-2 pt-2 border-top">
                          <span>Toplam:</span>
                          <span>{formatPrice(selectedOrder.total)}</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Sipariş Tarihi:</span>
                          <span>{formatDate(selectedOrder.createdAt)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Sipariş Durumu:</span>
                          <span className={`badge ${getStatusBadgeClass(selectedOrder.status)}`}>
                            {getStatusText(selectedOrder.status)}
                          </span>
                        </div>
                        {selectedOrder.estimatedDelivery && (
                          <div className="d-flex justify-content-between mb-2">
                            <span>Tahmini Teslimat:</span>
                            <span>{formatDate(selectedOrder.estimatedDelivery)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleCloseOrderDetails}
                >
                  Kapat
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-file-invoice me-2"></i>Fatura İndir
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
      
      <style jsx>{`
        .orders-list {
          margin-bottom: 2rem;
        }
        
        .order-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
        }
        
        .image-placeholder {
          width: 60px;
          height: 60px;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
          color: #6c757d;
        }
        
        .tracking-timeline {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin: 2rem 0;
        }
        
        .tracking-timeline::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #e9ecef;
          z-index: 1;
        }
        
        .tracking-step {
          position: relative;
          z-index: 2;
          text-align: center;
          flex: 1;
        }
        
        .tracking-icon {
          width: 40px;
          height: 40px;
          background-color: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.5rem;
          color: #6c757d;
        }
        
        .tracking-step.active .tracking-icon {
          background-color: #e7f1ff;
          border-color: #0d6efd;
          color: #0d6efd;
        }
        
        .tracking-step.current .tracking-icon {
          background-color: #0d6efd;
          border-color: #0d6efd;
          color: white;
        }
        
        .tracking-text {
          font-size: 0.875rem;
          color: #6c757d;
        }
        
        .tracking-step.active .tracking-text {
          color: #0d6efd;
          font-weight: 500;
        }
        
        .tracking-step.current .tracking-text {
          color: #0d6efd;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .tracking-timeline {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .tracking-timeline::before {
            top: 0;
            bottom: 0;
            left: 20px;
            right: auto;
            width: 2px;
            height: auto;
          }
          
          .tracking-step {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            width: 100%;
          }
          
          .tracking-icon {
            margin: 0 1rem 0 0;
          }
          
          .tracking-text {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Orders;