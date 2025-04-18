'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../services/firebase';
import { Edit2, Mail, Phone } from 'lucide-react';
import { CryptoCurrency } from "../trade/types/crypto";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSummary from "../portfolio/components/PortfolioSummary";
import TradeHistory from "../trade/components/TradeHistory";
interface ProfileFormData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  location: string;
  currency: string;
}

const ProfilePage: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data: CryptoCurrency[] = [
          {
            id: 'bitcoin',
            symbol: 'btc',
            name: 'Bitcoin',
            currentPrice: 65000,
            priceChangePercentage24h: 2.5,
            high24h: 67000,
            low24h: 64000,
            priceHistory: [64000, 64500, 65000, 65500, 66000, 66500, 67000] // örnek veri
          },
          {
            id: 'ethereum',
            symbol: 'eth',
            name: 'Ethereum',
            currentPrice: 3200,
            priceChangePercentage24h: -1.2,
            high24h: 3300,
            low24h: 3100,
            priceHistory: [3100, 3120, 3150, 3180, 3200, 3220, 3250] // örnek veri
          }

        ];
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectCoin = (coinId: string) => {
    console.log('Seçilen Coin ID:', coinId);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileFormData | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'wallet' | 'history' | 'security' | 'api'>('info');

  const { register, handleSubmit, setValue } = useForm<ProfileFormData>();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as ProfileFormData;
          const filledData: ProfileFormData = {
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            displayName: data.displayName || '',
            email: data.email || auth.currentUser.email || '',
            phoneNumber: data.phoneNumber || '',
            location: data.location || '',
            currency: data.currency || '',
          };

          setProfileData(filledData);

          Object.entries(filledData).forEach(([key, value]) => {
            setValue(key as keyof ProfileFormData, value);
          });
        } else {
          const newData: ProfileFormData = {
            firstName: '',
            lastName: '',
            displayName: '',
            email: auth.currentUser.email || '',
            phoneNumber: '',
            location: '',
            currency: '',
          };

          setProfileData(newData);
          Object.entries(newData).forEach(([key, value]) => {
            setValue(key as keyof ProfileFormData, value);
          });
        }
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    if (auth.currentUser) {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, data as any);
      setProfileData(data);
      setIsEditing(false);
    }
  };
  return (<>
    <Navbar />
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-dark text-white">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-circle mb-3"
              />
              <h5 className="mb-1">{profileData?.displayName || 'Unnamed User'}</h5>
              <p className="text-muted small mb-3">{profileData?.email}</p>

              <div className="list-group list-group-flush">
                <button onClick={() => setActiveTab('info')} className={`list-group-item list-group-item-action bg-dark text-white ${activeTab === 'info' ? 'active' : ''}`}>
                  Info
                </button>
                <button onClick={() => setActiveTab('wallet')} className={`list-group-item list-group-item-action bg-dark text-white ${activeTab === 'wallet' ? 'active' : ''}`}>
                  Wallet
                </button>
                <button onClick={() => setActiveTab('history')} className={`list-group-item list-group-item-action bg-dark text-white ${activeTab === 'history' ? 'active' : ''}`}>
                  Trade History
                </button>
                <button onClick={() => setActiveTab('security')} className={`list-group-item list-group-item-action bg-dark text-white ${activeTab === 'security' ? 'active' : ''}`}>
                  Security
                </button>
                <button onClick={() => setActiveTab('api')} className={`list-group-item list-group-item-action bg-dark text-white ${activeTab === 'api' ? 'active' : ''}`}>
                  API
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="col-md-9">
          {activeTab === 'info' && (<div className="card bg-dark text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title mb-0">My Profile</h4>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 size={18} className="me-2" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h5 className="text-primary mb-3">Personal Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white"
                        {...register('firstName')}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white"
                        {...register('lastName')}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Display Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white"
                        {...register('displayName')}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-primary mb-3">Contact Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark text-white">
                          <Mail size={18} />
                        </span>
                        <input
                          type="email"
                          className="form-control bg-dark text-white"
                          {...register('email')}
                          disabled
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark text-white">
                          <Phone size={18} />
                        </span>
                        <input
                          type="tel"
                          className="form-control bg-dark text-white"
                          {...register('phoneNumber')}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Location</label>
                      <select
                        className="form-select bg-dark text-white"
                        {...register('location')}
                        disabled={!isEditing}
                      >
                        <option value="">Select a location</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Currency</label>
                      <select
                        className="form-select bg-dark text-white"
                        {...register('currency')}
                        disabled={!isEditing}
                      >
                        <option value="">Select currency</option>
                        <option value="USD">US Dollar ($)</option>
                        <option value="EUR">Euro (€)</option>
                        <option value="GBP">British Pound (£)</option>
                        <option value="JPY">Japanese Yen (¥)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                )}
              </form>

              <div className="mt-4 text-muted">
                <small>This account was created on January 10, 2022, 02:12 PM</small>
              </div>
            </div>
          </div>
          )}
          {activeTab === 'wallet' && (
            <PortfolioSummary />
          )}

          {activeTab === 'history' && (
            <TradeHistory
              cryptocurrencies={cryptocurrencies}
              loading={loading}
              onSelectCoin={handleSelectCoin}
            />
          )}

          {activeTab === 'security' && (
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h4 className="mb-4">Security</h4>

                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary p-2 rounded me-3">
                        <i className="bi bi-envelope text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Email Authentication</h6>
                        <small className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                      </div>
                    </div>
                    <button className="btn btn-outline-light">Disable</button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-success p-2 rounded me-3">
                        <i className="bi bi-phone text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">SMS Authentication</h6>
                        <small className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                      </div>
                    </div>
                    <button className="btn btn-primary">Enable</button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="bg-danger p-2 rounded me-3">
                        <i className="bi bi-google text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Google Authentication</h6>
                        <small className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                      </div>
                    </div>
                    <button className="btn btn-primary">Enable</button>
                  </div>
                </div>

                <hr className="border-secondary" />
                <div>
                  <h5 className="mb-3">Password</h5>
                  <p className="text-white">Set a unique password to protect your personal account.</p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="oldPassword" className="form-label">Old Password</label>
                      <input type="password" className="form-control bg-black text-white border-0" id="oldPassword" />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control bg-black text-white border-0" id="newPassword" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="reenterPassword" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control bg-black text-white border-0" id="reenterPassword" />
                      </div>
                    </div>
                    <p className="text-muted">
                      To ensure your account is well protected, please use 8 or more characters with a mix of letters, numbers & symbols.
                    </p>
                    <button type="submit" className="btn btn-primary">Save Password</button>
                  </form>
                </div>
              </div>
            </div>

          )}

          {activeTab === 'api' && (<div className="card bg-dark text-white">
            <div className="card-body">
              <h4 className="mb-4">API Management</h4>

              <div className="border border-secondary rounded p-4 d-flex align-items-center mb-5" style={{ backgroundColor: "#111" }}>
                <div className="bg-primary p-3 rounded-circle d-flex align-items-center justify-content-center me-3">
                  <i className="bi bi-bank2 text-white fs-4"></i>
                </div>
                <h6 className="mb-0">List of API Keys</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3">
                <span className="text-muted">Need help?</span>
                <button className="btn btn-primary">Create Private API Key</button>
              </div>
            </div>
          </div>

          )}

        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
export default ProfilePage;