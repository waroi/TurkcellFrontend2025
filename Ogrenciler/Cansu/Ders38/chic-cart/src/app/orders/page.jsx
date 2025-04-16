"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import useAuthStore from '@/store/useAuthStore';

export default function Orders() {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [addingToCart, setAddingToCart] = useState({});
  

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isAuthenticated || !user) {
        router.push('/login');
        return;
      }

      try {
        setLoading(true);
        const ordersQuery = query(
          collection(db, 'orders'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        
        const snapshot = await getDocs(ordersQuery);
        
        if (snapshot.empty) {
          setOrders([]);
        } else {
          const fetchedOrders = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setOrders(fetchedOrders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Siparişleriniz yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, [isAuthenticated, user, router]);
  
  const handleReorder = async (order) => {
    try {
      setAddingToCart(prev => ({ ...prev, [order.id]: true }));
      
    
      for (const item of order.items) {
        await addToCart({
          id: item.productId,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity
        });
      }
      
      toast.success('Ürünler sepete eklendi');
      router.push('/cart');
    } catch (error) {
      console.error('Error reordering:', error);
      toast.error('Ürünler sepete eklenirken bir hata oluştu');
    } finally {
      setAddingToCart(prev => ({ ...prev, [order.id]: false }));
    }
  };
  
  const getOrderStatus = (status) => {
    const statusMap = {
      pending: { text: 'Beklemede', color: 'text-yellow-600' },
      processing: { text: 'İşleniyor', color: 'text-blue-600' },
      shipped: { text: 'Kargoya Verildi', color: 'text-purple-600' },
      delivered: { text: 'Teslim Edildi', color: 'text-green-600' },
      cancelled: { text: 'İptal Edildi', color: 'text-red-600' }
    };
    return statusMap[status] || { text: 'Bilinmiyor', color: 'text-gray-600' };
  };
  
  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });
  
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Siparişlerim</h1>
      
   
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Tüm Siparişler
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'pending'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Bekleyenler
        </button>
        <button
          onClick={() => setActiveTab('processing')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'processing'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          İşlenenler
        </button>
        <button
          onClick={() => setActiveTab('shipped')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'shipped'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Kargoda
        </button>
        <button
          onClick={() => setActiveTab('delivered')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'delivered'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Teslim Edilenler
        </button>
      </div>
      
     
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-600 py-8">
          {error}
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          {activeTab === 'all' 
            ? 'Henüz hiç siparişiniz bulunmuyor.'
            : 'Bu kategoride sipariş bulunmuyor.'}
          <div className="mt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Alışverişe Başla
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Sipariş #{order.id.slice(-6)}</h3>
                  <p className="text-gray-600">{formatDate(order.createdAt)}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`font-medium ${getOrderStatus(order.status).color}`}>
                    {getOrderStatus(order.status).text}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Teslimat Adresi</h4>
                    <p className="text-gray-600">
                      {order.shippingAddress?.street}<br />
                      {order.shippingAddress?.city}, {order.shippingAddress?.state}<br />
                      {order.shippingAddress?.zipCode}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Ödeme Bilgileri</h4>
                    <p className="text-gray-600">
                      Toplam: {order.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                    </p>
                    <p className="text-gray-600">
                      Ödeme Yöntemi: {order.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="font-medium mb-2">Sipariş Edilen Ürünler</h4>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h5 className="font-medium">{item.name}</h5>
                        <p className="text-gray-600">
                          {item.quantity} adet x {item.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-end">
                <button
                  onClick={() => handleReorder(order)}
                  disabled={addingToCart[order.id]}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50"
                >
                  {addingToCart[order.id] ? 'Ekleniyor...' : 'Tekrar Sipariş Ver'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 