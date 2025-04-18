'use client';

import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import { FaUser, FaKey, FaHistory, FaFingerprint, FaShareAlt, FaCogs } from 'react-icons/fa';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'South Korean',
    gender: 'Male',
    birthDate: '',
  });
  const [features, setFeatures] = useState({
    depositAssets: true,
    withdrawAssets: true,
    cardPurchases: true,
    bankDeposit: true,
    fiatWallet: true,
    marginWallet: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser(authUser);
        const profileDoc = await getDoc(doc(db, 'users', authUser.uid));
        if (profileDoc.exists()) {
          const profile = profileDoc.data();
          const [firstName, ...lastParts] = (authUser.displayName || '').split(' ');
          setFormData({
            firstName,
            lastName: lastParts.join(' '),
            email: authUser.email || '',
            phoneNumber: profile.phone || '',
            country: profile.country || 'South Korean',
            gender: profile.gender || 'Male',
            birthDate: profile.birthDate || '',
          });
        }
      } else {
        router.push('/pages/login');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (e: any) => {
    const { id, checked } = e.target;
    setFeatures(prev => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!user) return;

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    await updateProfile(user, { displayName: fullName });

    await updateDoc(doc(db, 'users', user.uid), {
      phone: formData.phoneNumber,
      country: formData.country,
      gender: formData.gender,
      birthDate: formData.birthDate,
      updatedAt: new Date(),
    });

    alert('Profile updated successfully!');
  };

  return (
    <div className={styles.profileContainer}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.sideMenu}>
              <div className={styles.userAvatar}>
                <FaUser size={50} />
              </div>
              <h5>{user?.displayName || 'User'}</h5>
              <p className="text-muted">{user?.email}</p>
              <a href="#" className={`${styles.menuItem} ${styles.active}`}>
                <FaUser /> User Profile
              </a>
              <a href="#" className={styles.menuItem}>
                <FaShareAlt /> Referrals
              </a>
              <a href="#" className={styles.menuItem}>
                <FaCogs /> API Keys
              </a>
              <a href="#" className={styles.menuItem}>
                <FaHistory /> Login history
              </a>
              <a href="#" className={styles.menuItem}>
                <FaFingerprint /> 2FA
              </a>
              <a href="#" className={styles.menuItem}>
                <FaKey /> Change password
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <div className={styles.profileSection}>
              <h3>User Profile</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={formData.email} disabled />
                  </div>
                  <div className="col-md-6 mb-3 d-flex gap-2">
                    <select className="form-select w-25" disabled>
                      <option>+90</option>
                    </select>
                    <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Country</label>
                    <select className="form-select" name="country" value={formData.country} onChange={handleInputChange}>
                      <option>South Korean</option>
                      <option>United States</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Gender</label>
                    <select className="form-select" name="gender" value={formData.gender} onChange={handleInputChange}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Birth Date</label>
                    <input type="date" className="form-control" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mt-4">
                  <h4>Features</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>LEVEL 1</h5>
                      {['depositAssets', 'withdrawAssets', 'cardPurchases', 'bankDeposit'].map((feature) => (
                        <div className="d-flex justify-content-between align-items-center mb-2" key={feature}>
                          <span>{feature.replace(/([A-Z])/g, ' $1')}</span>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id={feature} checked={features[feature as keyof typeof features]} onChange={handleToggleChange} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-6">
                      <h5>LEVEL 2</h5>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Fiat and Spot wallet</span>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="fiatWallet" checked={features.fiatWallet} onChange={handleToggleChange} />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Margin wallet <small className="text-muted">Enabled 100x Leverage</small></span>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="marginWallet" checked={features.marginWallet} onChange={handleToggleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-start">
  <button className={styles.updateButton} type="submit">
    Update Profile
  </button>
</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
