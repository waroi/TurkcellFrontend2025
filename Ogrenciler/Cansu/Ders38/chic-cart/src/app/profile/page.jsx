"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useAuthStore from '@/store/useAuthStore';
import { updateProfile } from '@/api/profile';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [newAddress, setNewAddress] = useState({
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    isDefault: false,
  });
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  // Mock data for orders and wishlist
  useEffect(() => {
    if (user) {
      // Set user data
      setFormData({
        name: user.displayName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        state: user.state || '',
        zipCode: user.zipCode || '',
        country: user.country || '',
      });

      // Mock orders data
      setOrders([
        {
          id: 'ORD-12345',
          date: '2023-04-15',
          status: 'Teslim Edildi',
          total: 129.99,
          items: [
            { id: 1, name: 'Klasik Beyaz T-Shirt', price: 29.99, quantity: 2, image: '/images/products/tshirt.jpg' },
            { id: 2, name: 'Mavi Kot Pantolon', price: 69.99, quantity: 1, image: '/images/products/jeans.jpg' },
          ],
        },
        {
          id: 'ORD-12346',
          date: '2023-03-22',
          status: 'İşleniyor',
          total: 89.99,
          items: [
            { id: 3, name: 'Deri Cüzdan', price: 49.99, quantity: 1, image: '/images/products/wallet.jpg' },
            { id: 4, name: 'Güneş Gözlüğü', price: 39.99, quantity: 1, image: '/images/products/sunglasses.jpg' },
          ],
        },
      ]);

      // Mock wishlist data
      setWishlist([
        { id: 5, name: 'Tasarım Saat', price: 199.99, image: '/images/products/watch.jpg' },
        { id: 6, name: 'Koşu Ayakkabısı', price: 79.99, image: '/images/products/shoes.jpg' },
        { id: 7, name: 'Sırt Çantası', price: 59.99, image: '/images/products/backpack.jpg' },
      ]);

      // Mock addresses data
      setAddresses([
        {
          id: 1,
          title: 'Ev',
          address: '123 Ana Cadde',
          city: 'İstanbul',
          state: 'Kadıköy',
          zipCode: '34700',
          country: 'Türkiye',
          isDefault: true,
        },
        {
          id: 2,
          title: 'Ofis',
          address: '456 İş Merkezi',
          city: 'İstanbul',
          state: 'Şişli',
          zipCode: '34381',
          country: 'Türkiye',
          isDefault: false,
        },
      ]);
    } else {
      router.push('/login');
    }
  }, [user, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({
      name: user?.displayName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      city: user?.city || '',
      state: user?.state || '',
      zipCode: user?.zipCode || '',
      country: user?.country || '',
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await updateProfile(user.uid, formData);
      toast.success('Profil başarıyla güncellendi!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Profil güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddAddress = () => {
    if (isAddingAddress) {
      // Add the new address
      const newId = addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
      const addressToAdd = { ...newAddress, id: newId };
      
      // If this is the first address or marked as default, update all other addresses
      if (addressToAdd.isDefault || addresses.length === 0) {
        setAddresses(prev => 
          prev.map(addr => ({ ...addr, isDefault: false })).concat(addressToAdd)
        );
      } else {
        setAddresses(prev => [...prev, addressToAdd]);
      }
      
      // Reset form and close
      setNewAddress({
        title: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        isDefault: false,
      });
      setIsAddingAddress(false);
      toast.success('Adres başarıyla eklendi!');
    } else {
      setIsAddingAddress(true);
    }
  };

  const handleEditAddress = (address) => {
    setNewAddress({ ...address });
    setIsEditingAddress(true);
    setEditingAddressId(address.id);
  };

  const handleUpdateAddress = () => {
    if (isEditingAddress) {
      // Update the address
      setAddresses(prev => 
        prev.map(addr => 
          addr.id === editingAddressId 
            ? { ...newAddress, id: editingAddressId } 
            : newAddress.isDefault && addr.isDefault 
              ? { ...addr, isDefault: false } 
              : addr
        )
      );
      
      // Reset form and close
      setNewAddress({
        title: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        isDefault: false,
      });
      setIsEditingAddress(false);
      setEditingAddressId(null);
      toast.success('Adres başarıyla güncellendi!');
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    toast.success('Adres başarıyla silindi!');
  };

  const handleSetDefaultAddress = (id) => {
    setAddresses(prev => 
      prev.map(addr => ({ 
        ...addr, 
        isDefault: addr.id === id 
      }))
    );
    toast.success('Varsayılan adres güncellendi!');
  };

  const handleLogout = () => {
    logout();
    router.push('/');
    toast.info('Çıkış yapıldı');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'teslim edildi':
        return 'bg-success';
      case 'işleniyor':
        return 'bg-warning';
      case 'iptal edildi':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <h3>{user?.displayName || 'Kullanıcı'}</h3>
                <p className="text-muted">{user?.email}</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile-stats">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-item">
                      <h4>{orders.length}</h4>
                      <p>Sipariş</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h4>{wishlist.length}</h4>
                      <p>İstek Listesi</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h4>{addresses.length}</h4>
                      <p>Kayıtlı Adres</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="nav flex-column nav-pills" role="tablist">
                <button
                  className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  <i className="fas fa-user me-2"></i> Kişisel Bilgiler
                </button>
                <button
                  className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <i className="fas fa-shopping-bag me-2"></i> Sipariş Geçmişi
                </button>
                <button
                  className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <i className="fas fa-heart me-2"></i> İstek Listesi
                </button>
                <button
                  className={`nav-link ${activeTab === 'addresses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('addresses')}
                >
                  <i className="fas fa-map-marker-alt me-2"></i> Kayıtlı Adresler
                </button>
                <button
                  className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <i className="fas fa-cog me-2"></i> Hesap Ayarları
                </button>
                <button
                  className="nav-link text-danger"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt me-2"></i> Çıkış Yap
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="profile-content">
              {/* Personal Information Tab */}
              {activeTab === 'personal' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Kişisel Bilgiler</h3>
                    {!isEditing && (
                      <button className="btn btn-outline-primary" onClick={handleEdit}>
                        <i className="fas fa-edit me-2"></i>Profili Düzenle
                      </button>
                    )}
                  </div>

                  {isEditing ? (
                    <div className="edit-form">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Ad Soyad</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">E-posta</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled
                          />
                          <small className="text-muted">E-posta değiştirilemez</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Telefon Numarası</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Ülke</label>
                          <select
                            className="form-select"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Ülke Seçin</option>
                            <option value="Türkiye">Türkiye</option>
                            <option value="Almanya">Almanya</option>
                            <option value="İngiltere">İngiltere</option>
                            <option value="Fransa">Fransa</option>
                            <option value="İtalya">İtalya</option>
                            <option value="İspanya">İspanya</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label className="form-label">Adres</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Şehir</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">İlçe</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Posta Kodu</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-actions">
                        <button 
                          className="btn btn-primary" 
                          onClick={handleSave}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Kaydediliyor...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-save me-2"></i>Değişiklikleri Kaydet
                            </>
                          )}
                        </button>
                        <button className="btn btn-outline-secondary ms-2" onClick={handleCancelEdit}>
                          <i className="fas fa-times me-2"></i>İptal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="info-details">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="info-item">
                            <label>Ad Soyad</label>
                            <p>{formData.name || 'Belirtilmemiş'}</p>
                          </div>
                          <div className="info-item">
                            <label>E-posta</label>
                            <p>{formData.email || 'Belirtilmemiş'}</p>
                          </div>
                          <div className="info-item">
                            <label>Telefon Numarası</label>
                            <p>{formData.phone || 'Belirtilmemiş'}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-item">
                            <label>Ülke</label>
                            <p>{formData.country || 'Belirtilmemiş'}</p>
                          </div>
                          <div className="info-item">
                            <label>Adres</label>
                            <p>{formData.address || 'Belirtilmemiş'}</p>
                          </div>
                          <div className="info-item">
                            <label>Şehir, İlçe, Posta Kodu</label>
                            <p>
                              {formData.city && formData.state && formData.zipCode
                                ? `${formData.city}, ${formData.state} ${formData.zipCode}`
                                : 'Belirtilmemiş'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Order History Tab */}
              {activeTab === 'orders' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Sipariş Geçmişi</h3>
                  </div>

                  {orders.length > 0 ? (
                    <div className="orders-list">
                      {orders.map((order) => (
                        <div className="order-card" key={order.id}>
                          <div className="order-header">
                            <div className="order-id">
                              <span className="label">Sipariş No:</span>
                              <span className="value">{order.id}</span>
                            </div>
                            <div className="order-date">
                              <span className="label">Tarih:</span>
                              <span className="value">{formatDate(order.date)}</span>
                            </div>
                            <div className="order-status">
                              <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="order-items">
                            {order.items.map((item) => (
                              <div className="order-item" key={item.id}>
                                <div className="item-image">
                                  <div className="image-placeholder">
                                    <i className="fas fa-image"></i>
                                  </div>
                                </div>
                                <div className="item-details">
                                  <h5>{item.name}</h5>
                                  <p className="item-price">{item.price.toFixed(2)} TL</p>
                                  <p className="item-quantity">Adet: {item.quantity}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="order-footer">
                            <div className="order-total">
                              <span className="label">Toplam:</span>
                              <span className="value">{order.total.toFixed(2)} TL</span>
                            </div>
                            <Link href={`/order-details/${order.id}`} className="btn btn-outline-primary btn-sm">
                              Detayları Görüntüle
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <div className="empty-icon">
                        <i className="fas fa-shopping-bag"></i>
                      </div>
                      <h4>Henüz Sipariş Yok</h4>
                      <p>Henüz hiç sipariş vermediniz. Sipariş geçmişinizi görmek için alışverişe başlayın.</p>
                      <Link href="/shop" className="btn btn-primary">
                        Alışverişe Başla
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>İstek Listem</h3>
                  </div>

                  {wishlist.length > 0 ? (
                    <div className="wishlist-grid">
                      {wishlist.map((item) => (
                        <div className="wishlist-item" key={item.id}>
                          <div className="item-image">
                            <div className="image-placeholder">
                              <i className="fas fa-image"></i>
                            </div>
                          </div>
                          <div className="item-details">
                            <h5>{item.name}</h5>
                            <p className="item-price">{item.price.toFixed(2)} TL</p>
                            <div className="item-actions">
                              <button className="btn btn-primary btn-sm">
                                <i className="fas fa-shopping-cart me-1"></i>Sepete Ekle
                              </button>
                              <button className="btn btn-outline-danger btn-sm">
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <div className="empty-icon">
                        <i className="fas fa-heart"></i>
                      </div>
                      <h4>İstek Listeniz Boş</h4>
                      <p>Beğendiğiniz ürünleri daha sonra almak için kalp simgesine tıklayarak istek listenize ekleyebilirsiniz.</p>
                      <Link href="/shop" className="btn btn-primary">
                        Ürünleri Keşfet
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Saved Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Kayıtlı Adresler</h3>
                    {!isAddingAddress && !isEditingAddress && (
                      <button className="btn btn-primary" onClick={handleAddAddress}>
                        <i className="fas fa-plus me-2"></i>Yeni Adres Ekle
                      </button>
                    )}
                  </div>

                  {isAddingAddress || isEditingAddress ? (
                    <div className="address-form">
                      <h4>{isEditingAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}</h4>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Adres Başlığı</label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={newAddress.title}
                            onChange={handleAddressChange}
                            placeholder="Örn: Ev, İş"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Ülke</label>
                          <select
                            className="form-select"
                            name="country"
                            value={newAddress.country}
                            onChange={handleAddressChange}
                          >
                            <option value="">Ülke Seçin</option>
                            <option value="Türkiye">Türkiye</option>
                            <option value="Almanya">Almanya</option>
                            <option value="İngiltere">İngiltere</option>
                            <option value="Fransa">Fransa</option>
                            <option value="İtalya">İtalya</option>
                            <option value="İspanya">İspanya</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label className="form-label">Sokak Adresi</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={newAddress.address}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Şehir</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={newAddress.city}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">İlçe</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={newAddress.state}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Posta Kodu</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zipCode"
                            value={newAddress.zipCode}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="defaultAddress"
                          name="isDefault"
                          checked={newAddress.isDefault}
                          onChange={handleAddressChange}
                        />
                        <label className="form-check-label" htmlFor="defaultAddress">
                          Varsayılan adres olarak ayarla
                        </label>
                      </div>
                      <div className="form-actions">
                        <button 
                          className="btn btn-primary" 
                          onClick={isEditingAddress ? handleUpdateAddress : handleAddAddress}
                        >
                          {isEditingAddress ? 'Adresi Güncelle' : 'Adres Ekle'}
                        </button>
                        <button 
                          className="btn btn-outline-secondary ms-2" 
                          onClick={() => {
                            setIsAddingAddress(false);
                            setIsEditingAddress(false);
                            setEditingAddressId(null);
                            setNewAddress({
                              title: '',
                              address: '',
                              city: '',
                              state: '',
                              zipCode: '',
                              country: '',
                              isDefault: false,
                            });
                          }}
                        >
                          İptal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {addresses.length > 0 ? (
                        <div className="addresses-list">
                          {addresses.map((address) => (
                            <div className="address-card" key={address.id}>
                              <div className="address-header">
                                <h5>{address.title}</h5>
                                {address.isDefault && (
                                  <span className="badge bg-primary">Varsayılan</span>
                                )}
                              </div>
                              <div className="address-body">
                                <p>{address.address}</p>
                                <p>{address.city}, {address.state} {address.zipCode}</p>
                                <p>{address.country}</p>
                              </div>
                              <div className="address-actions">
                                <button 
                                  className="btn btn-outline-primary btn-sm"
                                  onClick={() => handleEditAddress(address)}
                                >
                                  <i className="fas fa-edit me-1"></i>Düzenle
                                </button>
                                {!address.isDefault && (
                                  <button 
                                    className="btn btn-outline-secondary btn-sm ms-2"
                                    onClick={() => handleSetDefaultAddress(address.id)}
                                  >
                                    <i className="fas fa-star me-1"></i>Varsayılan Yap
                                  </button>
                                )}
                                <button 
                                  className="btn btn-outline-danger btn-sm ms-2"
                                  onClick={() => handleDeleteAddress(address.id)}
                                >
                                  <i className="fas fa-trash me-1"></i>Sil
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="empty-state">
                          <div className="empty-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <h4>Kayıtlı Adres Yok</h4>
                          <p>Ödeme işlemini hızlandırmak için teslimat ve fatura adreslerinizi ekleyin.</p>
                          <button className="btn btn-primary" onClick={handleAddAddress}>
                            <i className="fas fa-plus me-2"></i>Yeni Adres Ekle
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Account Settings Tab */}
              {activeTab === 'settings' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Hesap Ayarları</h3>
                  </div>

                  <div className="settings-list">
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>E-posta Bildirimleri</h5>
                        <p>Siparişleriniz, kampanyalar ve hesap aktiviteleriniz hakkında e-posta alın</p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="emailNotifications"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="emailNotifications"></label>
                      </div>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>SMS Bildirimleri</h5>
                        <p>Siparişleriniz ve hesap aktiviteleriniz hakkında SMS alın</p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="smsNotifications"
                        />
                        <label className="form-check-label" htmlFor="smsNotifications"></label>
                      </div>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>İki Faktörlü Doğrulama</h5>
                        <p>Hesabınıza ekstra güvenlik katmanı ekleyin</p>
                      </div>
                      <button className="btn btn-outline-primary btn-sm">
                        Etkinleştir
                      </button>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Şifre Değiştir</h5>
                        <p>Hesabınızı güvende tutmak için şifrenizi düzenli olarak güncelleyin</p>
                      </div>
                      <button className="btn btn-outline-primary btn-sm">
                        Değiştir
                      </button>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Hesabı Sil</h5>
                        <p>Hesabınızı ve ilişkili tüm verileri kalıcı olarak silin</p>
                      </div>
                      <button className="btn btn-outline-danger btn-sm">
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .profile-header {
          background-color: #fff;
          padding: 2rem 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .profile-avatar {
          margin-bottom: 1rem;
        }

        .avatar-placeholder {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #e9ecef;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 2.5rem;
          color: #6c757d;
        }

        .profile-stats {
          background-color: #f8f9fa;
          border-radius: 0.5rem;
          padding: 1.5rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .stat-item h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #007bff;
        }

        .stat-item p {
          margin-bottom: 0;
          color: #6c757d;
        }

        .profile-sidebar {
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .nav-pills .nav-link {
          border-radius: 0;
          padding: 1rem 1.5rem;
          color: #495057;
          border-left: 3px solid transparent;
        }

        .nav-pills .nav-link:hover {
          background-color: #f8f9fa;
        }

        .nav-pills .nav-link.active {
          background-color: #f8f9fa;
          color: #007bff;
          border-left: 3px solid #007bff;
        }

        .profile-content {
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e9ecef;
        }

        .section-header h3 {
          margin-bottom: 0;
          font-size: 1.5rem;
        }

        .info-details {
          background-color: #f8f9fa;
          border-radius: 0.5rem;
          padding: 1.5rem;
        }

        .info-item {
          margin-bottom: 1.5rem;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-item label {
          font-weight: 600;
          color: #6c757d;
          margin-bottom: 0.5rem;
          display: block;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 1.1rem;
        }

        .order-card {
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .order-header {
          background-color: #f8f9fa;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .order-id, .order-date {
          margin-right: 1rem;
        }

        .order-id .label, .order-date .label {
          font-weight: 600;
          margin-right: 0.5rem;
        }

        .order-items {
          padding: 1rem;
        }

        .order-item {
          display: flex;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e9ecef;
        }

        .order-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .item-image {
          width: 80px;
          height: 80px;
          margin-right: 1rem;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background-color: #e9ecef;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
          color: #6c757d;
        }

        .item-details {
          flex: 1;
        }

        .item-details h5 {
          margin-bottom: 0.5rem;
        }

        .item-price {
          color: #007bff;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .item-quantity {
          color: #6c757d;
          margin-bottom: 0;
        }

        .order-footer {
          background-color: #f8f9fa;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .order-total .label {
          font-weight: 600;
          margin-right: 0.5rem;
        }

        .order-total .value {
          font-size: 1.2rem;
          font-weight: 600;
          color: #007bff;
        }

        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .wishlist-item {
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .wishlist-item .item-image {
          height: 150px;
          width: 100%;
        }

        .wishlist-item .item-details {
          padding: 1rem;
        }

        .wishlist-item .item-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .addresses-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .address-card {
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
          padding: 1.5rem;
        }

        .address-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .address-header h5 {
          margin-bottom: 0;
        }

        .address-body p {
          margin-bottom: 0.5rem;
        }

        .address-body p:last-child {
          margin-bottom: 0;
        }

        .address-actions {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
        }

        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
        }

        .setting-info h5 {
          margin-bottom: 0.5rem;
        }

        .setting-info p {
          margin-bottom: 0;
          color: #6c757d;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
        }

        .empty-icon {
          font-size: 3rem;
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .empty-state h4 {
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          color: #6c757d;
          margin-bottom: 1.5rem;
        }

        .form-actions {
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .profile-header {
            padding: 1.5rem 0;
          }

          .profile-stats {
            margin-top: 1.5rem;
          }

          .order-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .order-id, .order-date, .order-status {
            margin-bottom: 0.5rem;
          }

          .order-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .order-total {
            margin-bottom: 1rem;
          }

          .wishlist-grid {
            grid-template-columns: 1fr;
          }

          .addresses-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;












