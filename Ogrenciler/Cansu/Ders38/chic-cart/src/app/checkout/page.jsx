'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCartStore from '@/store/useCartStore';
import { db } from '@/firebase/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCartStore();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const handleCheckout = async () => {
    if (!user) {
      alert('Giriş yapmanız gerekiyor.');
      router.push('/login');
      return;
    }

    const order = {
      userId: user.uid,
      email: user.email,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, 'orders'), order);
    clearCart();
    router.push('/thank-you');
  };

  return (
    <div className="container mt-5">
      <h2>Ödeme Sayfası</h2>
      <p>Toplam ürün: {cartItems.length}</p>
      <button className="btn btn-primary" onClick={handleCheckout}>Siparişi Tamamla</button>
    </div>
  );
};

export default CheckoutPage;

