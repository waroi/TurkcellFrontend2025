"use client";  

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';
import { getOrders } from '@/api/orders';
import { updateProfile } from '@/api/profile';  
import Link from 'next/link';

const Profile = () => {
  const { user } = useAuthStore();  
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isClient, setIsClient] = useState(false); 
  const router = useRouter();  

  useEffect(() => {
    setIsClient(true);  
  }, []);


  useEffect(() => {
    if (user && router) {
      setUserData(user);
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
      });
      fetchOrders();  
    } else if (user === null && router) {
      router.push('/login'); 
    }
  }, [user, router]);

  const fetchOrders = async () => {
    try {
      if (user && user.id) {
        const userOrders = await getOrders(user.id);  
        setOrders(userOrders);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);  
  };

  const handleCancelEdit = () => {
    setIsEditing(false); 
    setFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone || '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await updateProfile(formData);  
      setIsEditing(false);  
      setUserData(formData);  
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');  
    router.push('/login'); 
  };

  if (!isClient || !router) return null;  

  return (
    <div className="profile-page container mt-5">
      <h2>{userData?.name}'s Profile</h2>

      <div className="profile-info my-4">
        <h3>Personal Information</h3>
        {isEditing ? (
          <div className="edit-form">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary ms-2" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="info-details">
            <p><strong>Name:</strong> {userData?.name}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
            <p><strong>Phone:</strong> {userData?.phone || 'Not provided'}</p>
            <button className="btn btn-secondary" onClick={handleEdit}>
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="order-history my-5">
        <h3>Your Orders</h3>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul className="list-group">
            {orders.map((order) => (
              <li key={order.id} className="list-group-item">
                <Link href={`/order/${order.id}`} className="text-decoration-none">
                  <div>
                    <strong>Order #{order.id}</strong>
                    <div>Status: {order.status}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="address-book my-5">
        <h3>Shipping Addresses</h3>
        <button className="btn btn-primary">Add New Address</button>
      </div>

      <div className="logout-section my-5">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;







