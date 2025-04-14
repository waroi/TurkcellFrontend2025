"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/navigation';
import { toast } from 'react-toastify';

const Addresses = () => {
  const router = useRouter();
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [newAddress, setNewAddress] = useState({
    title: '',
    fullName: '',
    phone: '',
    address: '',
    district: '',
    city: '',
    zipCode: '',
    isDefault: false,
  });


  useEffect(() => {
    const loadAddresses = () => {
      try {
        
        setTimeout(() => {
          const savedAddresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
          setAddresses(savedAddresses);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error('Adresler yüklenirken hata oluştu:', error);
        toast.error('Adresler yüklenirken bir hata oluştu');
        setIsLoading(false);
      }
    };

    loadAddresses();
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!newAddress.title.trim()) {
      errors.title = 'Adres başlığı gereklidir';
    }
    
    if (!newAddress.fullName.trim()) {
      errors.fullName = 'Ad soyad gereklidir';
    }
    
    if (!newAddress.phone.trim()) {
      errors.phone = 'Telefon numarası gereklidir';
    } else if (!/^[0-9]{10,11}$/.test(newAddress.phone.replace(/\D/g, ''))) {
      errors.phone = 'Geçerli bir telefon numarası giriniz';
    }
    
    if (!newAddress.address.trim()) {
      errors.address = 'Adres gereklidir';
    }
    
    if (!newAddress.district.trim()) {
      errors.district = 'İlçe gereklidir';
    }
    
    if (!newAddress.city.trim()) {
      errors.city = 'İl gereklidir';
    }
    
    if (!newAddress.zipCode.trim()) {
      errors.zipCode = 'Posta kodu gereklidir';
    } else if (!/^[0-9]{5}$/.test(newAddress.zipCode)) {
      errors.zipCode = 'Geçerli bir posta kodu giriniz (5 haneli)';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
  
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddAddress = () => {
    if (!validateForm()) {
      toast.error('Lütfen tüm alanları doğru şekilde doldurun');
      return;
    }

    try {
      setIsLoading(true);
     
      const newAddressWithId = {
        ...newAddress,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
   
      if (addresses.length === 0 || newAddress.isDefault) {
     
        const updatedAddresses = addresses.map(addr => ({
          ...addr,
          isDefault: false
        }));
        
     
        const allAddresses = [...updatedAddresses, { ...newAddressWithId, isDefault: true }];
        setAddresses(allAddresses);
        localStorage.setItem('userAddresses', JSON.stringify(allAddresses));
      } else {
      
        const allAddresses = [...addresses, newAddressWithId];
        setAddresses(allAddresses);
        localStorage.setItem('userAddresses', JSON.stringify(allAddresses));
      }
      
      toast.success('Adres başarıyla eklendi');
      setIsAddingAddress(false);
      setNewAddress({
        title: '',
        fullName: '',
        phone: '',
        address: '',
        district: '',
        city: '',
        zipCode: '',
        isDefault: false,
      });
      setFormErrors({});
    } catch (error) {
      console.error('Adres eklenirken hata oluştu:', error);
      toast.error('Adres eklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id);
    setNewAddress({
      title: address.title,
      fullName: address.fullName,
      phone: address.phone,
      address: address.address,
      district: address.district,
      city: address.city,
      zipCode: address.zipCode,
      isDefault: address.isDefault,
    });
    setIsEditingAddress(true);
    setFormErrors({});
  };

  const handleUpdateAddress = () => {
    if (!validateForm()) {
      toast.error('Lütfen tüm alanları doğru şekilde doldurun');
      return;
    }

    try {
      setIsLoading(true);
      

      const updatedAddresses = addresses.map(addr => {
        if (addr.id === editingAddressId) {
          return {
            ...addr,
            ...newAddress,
            updatedAt: new Date().toISOString()
          };
        }
        return addr;
      });
      
  
      if (newAddress.isDefault) {
        const finalAddresses = updatedAddresses.map(addr => {
          if (addr.id === editingAddressId) {
            return { ...addr, isDefault: true };
          }
          return { ...addr, isDefault: false };
        });
        
        setAddresses(finalAddresses);
        localStorage.setItem('userAddresses', JSON.stringify(finalAddresses));
      } else {
        setAddresses(updatedAddresses);
        localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
      }
      
      toast.success('Adres başarıyla güncellendi');
      setIsEditingAddress(false);
      setEditingAddressId(null);
      setNewAddress({
        title: '',
        fullName: '',
        phone: '',
        address: '',
        district: '',
        city: '',
        zipCode: '',
        isDefault: false,
      });
      setFormErrors({});
    } catch (error) {
      console.error('Adres güncellenirken hata oluştu:', error);
      toast.error('Adres güncellenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAddress = (id) => {
    if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
      try {
        setIsLoading(true);
        
 
        const updatedAddresses = addresses.filter(addr => addr.id !== id);
        
    
        const deletedAddress = addresses.find(addr => addr.id === id);
        if (deletedAddress?.isDefault && updatedAddresses.length > 0) {
          updatedAddresses[0].isDefault = true;
        }
        
        setAddresses(updatedAddresses);
        localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
        
        toast.success('Adres başarıyla silindi');
      } catch (error) {
        console.error('Adres silinirken hata oluştu:', error);
        toast.error('Adres silinirken bir hata oluştu');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSetDefaultAddress = (id) => {
    try {
      setIsLoading(true);
      

      const updatedAddresses = addresses.map(addr => ({
        ...addr,
        isDefault: addr.id === id
      }));
      
      setAddresses(updatedAddresses);
      localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
      
      toast.success('Varsayılan adres güncellendi');
    } catch (error) {
      console.error('Varsayılan adres güncellenirken hata oluştu:', error);
      toast.error('Varsayılan adres güncellenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Adreslerim</h1>
              <button
                onClick={() => setIsAddingAddress(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <i className="fas fa-plus mr-2"></i>
                Yeni Adres Ekle
              </button>
            </div>

            {addresses.length === 0 && !isAddingAddress && !isEditingAddress ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <i className="fas fa-map-marker-alt text-gray-400 text-5xl"></i>
                </div>
                <p className="text-gray-500 mb-4">Henüz kayıtlı adresiniz bulunmamaktadır.</p>
                <button
                  onClick={() => setIsAddingAddress(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <i className="fas fa-plus mr-2"></i>
                  İlk Adresinizi Ekleyin
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`relative bg-white border rounded-lg p-6 ${
                      address.isDefault ? 'border-indigo-500' : 'border-gray-200'
                    }`}
                  >
                    {address.isDefault && (
                      <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          Varsayılan
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-gray-900">{address.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{address.fullName}</p>
                    <p className="text-sm text-gray-500">{address.phone}</p>
                    <p className="mt-2 text-sm text-gray-500">{address.address}</p>
                    <p className="text-sm text-gray-500">
                      {address.district} / {address.city}
                    </p>
                    <p className="text-sm text-gray-500">{address.zipCode}</p>
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleEditAddress(address)}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Düzenle"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(address.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Sil"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      {!address.isDefault && (
                        <button
                          onClick={() => handleSetDefaultAddress(address.id)}
                          className="text-gray-400 hover:text-yellow-400"
                          title="Varsayılan yap"
                        >
                          <i className="far fa-star"></i>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(isAddingAddress || isEditingAddress) && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  {isEditingAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Adres Başlığı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={newAddress.title}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.title ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Örn: Ev, İş"
                    />
                    {formErrors.title && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={newAddress.fullName}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.fullName ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={newAddress.phone}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.phone ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="05XX XXX XX XX"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Adres <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={newAddress.address}
                      onChange={handleAddressChange}
                      rows={3}
                      className={`mt-1 block w-full border ${
                        formErrors.address ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {formErrors.address && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.address}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      İlçe <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={newAddress.district}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.district ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {formErrors.district && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.district}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      İl <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={newAddress.city}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.city ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {formErrors.city && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Posta Kodu <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={newAddress.zipCode}
                      onChange={handleAddressChange}
                      className={`mt-1 block w-full border ${
                        formErrors.zipCode ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {formErrors.zipCode && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.zipCode}</p>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={newAddress.isDefault}
                      onChange={handleAddressChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      Varsayılan adres olarak kaydet
                    </label>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setIsAddingAddress(false);
                      setIsEditingAddress(false);
                      setEditingAddressId(null);
                      setNewAddress({
                        title: '',
                        fullName: '',
                        phone: '',
                        address: '',
                        district: '',
                        city: '',
                        zipCode: '',
                        isDefault: false,
                      });
                      setFormErrors({});
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    İptal
                  </button>
                  <button
                    onClick={isEditingAddress ? handleUpdateAddress : handleAddAddress}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isEditingAddress ? 'Güncelle' : 'Kaydet'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;