'use client';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import { getCurrentUserProfile, changePassword } from '../../../lib/firebaseService';
import Link from 'next/link';
import { Edit, User, Share2, Key, Clock, Shield, ChevronDown, Lock } from 'lucide-react';
import './user-profile.scss';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ displayName: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('South Korean');
  const [gender, setGender] = useState('Male');
  const [birthdate, setBirthdate] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  const [depositAssetsEnabled, setDepositAssetsEnabled] = useState(true);
  const [withdrawAssetsEnabled, setWithdrawAssetsEnabled] = useState(true);
  const [cardPurchasesEnabled, setCardPurchasesEnabled] = useState(false);
  const [bankDepositEnabled, setBankDepositEnabled] = useState(false);
  const [fiatSpotWalletEnabled, setFiatSpotWalletEnabled] = useState(true);
  const [marginWalletEnabled, setMarginWalletEnabled] = useState(true);

  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile: { id: string; displayName?: string; email?: string } = await getCurrentUserProfile();
        if (userProfile && userProfile.displayName && userProfile.email) {
          setUser({
            displayName: userProfile.displayName,
            email: userProfile.email,
          });

          const nameParts = userProfile.displayName.split(' ');
          setFirstName(nameParts[0] || '');
          setLastName(nameParts.slice(1).join(' ') || '');
        } else {
          setUser({
            displayName: 'Peterson Kennedy',
            email: 'peterson@example.com',
          });
          setFirstName('Peterson');
          setLastName('Kennedy');
        }
      } catch (error) {
        console.error('Kullanıcı bilgileri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = () => {
    alert('Profile updated successfully!');
  };

  const handleChangePassword = async () => {
    try {
      setPasswordError(null);
      setPasswordSuccess(null);

      if (newPassword !== confirmPassword) {
        setPasswordError("New passwords don't match");
        return;
      }

      if (newPassword.length < 6) {
        setPasswordError("New password must be at least 6 characters");
        return;
      }

      await changePassword(currentPassword, newPassword);
      setPasswordSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setPasswordError(error.message || 'Failed to change password');
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="user-profile">
          <p>Yükleniyor...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="user-profile-container">
        <div className="user-profile-header">
          <h1>User Profile</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / User
          </div>
        </div>

        <div className="user-profile-content">
          <div className="user-profile-sidebar">
            <div className="user-avatar-container">
              <div className="user-avatar">
                <img
                  src={`https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=B6BBC4&color=fff&size=128`}
                  alt="User avatar"
                />
                <button className="edit-avatar-button">
                  <Edit size={16} />
                </button>
              </div>
              <h2>{user?.displayName}</h2>
              <p className="user-email">{user?.email}</p>
            </div>

            <nav className="user-profile-nav">
              <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} />
                <span>User Profile</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'referrals' ? 'active' : ''}`}
                onClick={() => setActiveTab('referrals')}
              >
                <Share2 size={18} />
                <span>Referrals</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'api' ? 'active' : ''}`}
                onClick={() => setActiveTab('api')}
              >
                <Key size={18} />
                <span>API keys</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                <Clock size={18} />
                <span>Login history</span>
              </button>
              <button
                className={`nav-item ${activeTab === '2fa' ? 'active' : ''}`}
                onClick={() => setActiveTab('2fa')}
              >
                <Shield size={18} />
                <span>2FA</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'password' ? 'active' : ''}`}
                onClick={() => setActiveTab('password')}
              >
                <Lock size={18} />
                <span>Change password</span>
              </button>
            </nav>
          </div>

          <div className="user-profile-main">
            {activeTab === 'profile' && (
              <>
                <div className="profile-section">
                  <h3>Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="email-input"
                      />
                    </div>
                    <div className="form-group phone-input-group">
                      <div className="country-code">
                        <div className="selected-code">
                          <span>+1</span>
                          <ChevronDown size={16} />
                        </div>
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group select-container">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="South Korean">South Korean</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Turkey">Turkey</option>
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                    <div className="form-group select-container">
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        placeholder="DD/MM/YY"
                      />
                    </div>
                  </div>
                </div>

                <div className="features-section">
                  <h3>Features</h3>

                  <div className="features-container">
                    <div className="feature-level">
                      <h4>LEVEL 1</h4>
                      <div className="feature-items">
                        <div className="feature-item">
                          <span>Deposit assets</span>
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={depositAssetsEnabled}
                              onChange={() => setDepositAssetsEnabled(!depositAssetsEnabled)}
                            />
                            <span className="toggle-slider"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <span>Withdraw assets</span>
                          <div className="feature-detail">
                            <span className="feature-limit">Enabled $1,000,000/day</span>
                            <label className="toggle-switch">
                              <input
                                type="checkbox"
                                checked={withdrawAssetsEnabled}
                                onChange={() => setWithdrawAssetsEnabled(!withdrawAssetsEnabled)}
                              />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                        </div>
                        <div className="feature-item">
                          <span>Card purchases</span>
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={cardPurchasesEnabled}
                              onChange={() => setCardPurchasesEnabled(!cardPurchasesEnabled)}
                            />
                            <span className="toggle-slider"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <span>Bank deposit</span>
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={bankDepositEnabled}
                              onChange={() => setBankDepositEnabled(!bankDepositEnabled)}
                            />
                            <span className="toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="feature-level">
                      <h4>LEVEL 2</h4>
                      <div className="feature-items">
                        <div className="feature-item">
                          <span>Fiat and Spot wallet</span>
                          <label className="toggle-switch">
                            <input
                              type="checkbox"
                              checked={fiatSpotWalletEnabled}
                              onChange={() => setFiatSpotWalletEnabled(!fiatSpotWalletEnabled)}
                            />
                            <span className="toggle-slider"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <span>Margin wallet</span>
                          <div className="feature-detail">
                            <span className="feature-limit">Enabled 100x Leverage</span>
                            <label className="toggle-switch">
                              <input
                                type="checkbox"
                                checked={marginWalletEnabled}
                                onChange={() => setMarginWalletEnabled(!marginWalletEnabled)}
                              />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="update-profile-button" onClick={handleUpdateProfile}>
                    Update Profile
                  </button>
                </div>
              </>
            )}

            {activeTab === 'referrals' && (
              <div className="tab-content">
                <h3>Referrals</h3>
                <p>Your referral program information will appear here.</p>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="tab-content">
                <h3>API Keys</h3>
                <p>Your API keys and management will appear here.</p>
              </div>
            )}

            {activeTab === 'login' && (
              <div className="tab-content">
                <h3>Login History</h3>
                <p>Your login history will appear here.</p>
              </div>
            )}

            {activeTab === '2fa' && (
              <div className="tab-content">
                <h3>Two-Factor Authentication</h3>
                <p>Your 2FA settings will appear here.</p>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="tab-content">
                <h3>Change Password</h3>

                {passwordError && (
                  <div className="alert alert-error">
                    <p>{passwordError}</p>
                  </div>
                )}

                {passwordSuccess && (
                  <div className="alert alert-success">
                    <p>{passwordSuccess}</p>
                  </div>
                )}

                <div className="password-form">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter your current password"
                    />
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your new password"
                    />
                  </div>

                  <div className="password-requirements">
                    <h4>Password must contain:</h4>
                    <ul>
                      <li className={newPassword.length >= 8 ? 'valid' : ''}>At least 8 characters</li>
                      <li className={/[A-Z]/.test(newPassword) ? 'valid' : ''}>At least one uppercase letter</li>
                      <li className={/[a-z]/.test(newPassword) ? 'valid' : ''}>At least one lowercase letter</li>
                      <li className={/[0-9]/.test(newPassword) ? 'valid' : ''}>At least one number</li>
                      <li className={/[!@#$%^&*]/.test(newPassword) ? 'valid' : ''}>At least one special character</li>
                    </ul>
                  </div>

                  <button className="change-password-button" onClick={handleChangePassword}>
                    Change Password
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;