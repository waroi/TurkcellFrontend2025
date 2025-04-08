"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore'; 
import { updateProfile } from '@/api/profile'; 

const Profile = () => {
  const { user } = useAuthStore(); 
  const [userData, setUserData] = useState(null); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false); 
  const router = useRouter();


  useEffect(() => {
    if (user) {
      setUserData(user); 
      setFormData({
        name: user.displayName || '', 
        email: user.email || '', 
        phone: user.phone || '',
      });
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


  const handleEdit = () => {
    setIsEditing(true);
  };

  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({
      name: userData?.displayName || '',
      email: userData?.email || '',
      phone: userData?.phone || '',
    });
  };

  const getUpdatedData = () => {
    return {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
  };

  const getUserId = () => {
    return userData?.uid; 
  };

  const handleSave = async () => {
    const userId = getUserId(); 
    const updatedData = getUpdatedData(); 

    if (!userId) {
      console.error('Kullanıcı ID\'si eksik!');
      return;
    }

    if (!updatedData.name || !updatedData.email || !updatedData.phone) {
      console.error('Eksik form verileri!');
      return;
    }

    try {

      await updateProfile(userId, updatedData);
      console.log('Profil başarıyla güncellendi!');
      setIsEditing(false); 
      setUserData(updatedData); 
    } catch (error) {
      console.error('Profil güncellenirken hata:', error);
    }
  };

  return (
    <div className="profile-page container mt-5">
      <h2>{userData?.displayName}'s Profile</h2>
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
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary ms-2" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div className="info-details">
            <p><strong>Name:</strong> {userData?.displayName}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
            <p><strong>Phone:</strong> {userData?.phone || 'Not provided'}</p>
            <button className="btn btn-secondary" onClick={handleEdit}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;












