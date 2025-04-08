"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      const q = query(
        collection(db, "orders"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      const fetchedOrders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, [user]);

  if (!user) return <p>Lütfen giriş yapın.</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Sipariş Geçmişim</h2>
      {orders.length === 0 ? (
        <p>Hiç siparişiniz bulunmamaktadır.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Sipariş ID: {order.id}</h5>
              <p><strong>Tarih:</strong> {order.createdAt?.toDate().toLocaleString()}</p>
              <p><strong>Toplam:</strong> {order.total} ₺</p>
              <ul className="list-group list-group-flush">
                {order.items.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{item.price * item.quantity} ₺</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;