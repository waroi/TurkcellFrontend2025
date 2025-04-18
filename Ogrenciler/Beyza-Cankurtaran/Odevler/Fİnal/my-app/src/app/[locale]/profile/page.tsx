'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../services/firebase';
import { Edit2, Mail, Phone } from 'lucide-react';
import { CryptoCurrency, PriceDataPoint } from "../trade/types/crypto";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSummary from "../portfolio/components/PortfolioSummary";
import TradeHistory from "../trade/components/TradeHistory";
import { useTheme } from '../../context/ThemeContext';
import { useTranslations } from 'next-intl';

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
  // Initialize translations
  const t = useTranslations('common');

  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { theme } = useTheme(); // Use the theme from ThemeContext

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Current timestamp in milliseconds
        const now = Date.now();
        // Create timestamps for the last 7 days (one data point per day)
        const timestamps = Array.from({ length: 7 }, (_, i) => now - (6 - i) * 24 * 60 * 60 * 1000);
        
        const data: CryptoCurrency[] = [
          {
            id: 'bitcoin',
            symbol: 'btc',
            name: 'Bitcoin',
            currentPrice: 65000,
            priceChangePercentage24h: 2.5,
            high24h: 67000,
            low24h: 64000,
            priceHistory: timestamps.map((timestamp, i) => ({
              timestamp,
              price: [64000, 64500, 65000, 65500, 66000, 66500, 67000][i],
              close: [64000, 64500, 65000, 65500, 66000, 66500, 67000][i],
              // Adding the missing fields for PriceDataPoint type
              high: [64500, 65000, 65500, 66000, 66500, 67000, 67500][i],
              low: [63500, 64000, 64500, 65000, 65500, 66000, 66500][i],
              volume: [100000, 120000, 110000, 115000, 125000, 130000, 115000][i],
              open: [64200, 64600, 65100, 65600, 66100, 66600, 67100][i]
            }))
          },
          {
            id: 'ethereum',
            symbol: 'eth',
            name: 'Ethereum',
            currentPrice: 3200,
            priceChangePercentage24h: -1.2,
            high24h: 3300,
            low24h: 3100,
            priceHistory: timestamps.map((timestamp, i) => ({
              timestamp,
              price: [3100, 3120, 3150, 3180, 3200, 3220, 3250][i],
              close: [3100, 3120, 3150, 3180, 3200, 3220, 3250][i],
              // Adding the missing fields for PriceDataPoint type
              high: [3120, 3140, 3170, 3200, 3220, 3240, 3270][i],
              low: [3080, 3100, 3130, 3160, 3180, 3200, 3230][i],
              volume: [50000, 55000, 52000, 53000, 58000, 60000, 54000][i],
              open: [3110, 3130, 3160, 3190, 3210, 3230, 3260][i]
            }))
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
  
  // Create dynamic background class based on theme
  const bgClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  const inputBgClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark';
  const buttonTheme = theme === 'dark' ? 'dark' : 'light';
  
  return (<>
    <Navbar />
    <div className={`container py-5 ${bgClass}`}>
      <div className="row">
        <div className="col-md-3">
          <div className={`card ${cardBgClass}`}>
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
                <button onClick={() => setActiveTab('info')} className={`list-group-item list-group-item-action ${bgClass} ${activeTab === 'info' ? 'active' : ''}`}>
                  {t('profile.tabs.info')}
                </button>
                <button onClick={() => setActiveTab('wallet')} className={`list-group-item list-group-item-action ${bgClass} ${activeTab === 'wallet' ? 'active' : ''}`}>
                  {t('profile.tabs.wallet')}
                </button>
                <button onClick={() => setActiveTab('history')} className={`list-group-item list-group-item-action ${bgClass} ${activeTab === 'history' ? 'active' : ''}`}>
                  {t('profile.tabs.history')}
                </button>
                <button onClick={() => setActiveTab('security')} className={`list-group-item list-group-item-action ${bgClass} ${activeTab === 'security' ? 'active' : ''}`}>
                  {t('profile.tabs.security')}
                </button>
                <button onClick={() => setActiveTab('api')} className={`list-group-item list-group-item-action ${bgClass} ${activeTab === 'api' ? 'active' : ''}`}>
                  {t('profile.tabs.api')}
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="col-md-9">
          {activeTab === 'info' && (<div className={`card ${cardBgClass}`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title mb-0">{t('profile.title')}</h4>
                <button
                  className={`btn btn-outline-primary`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 size={18} className="me-2" />
                  {isEditing ? t('profile.cancel') : t('profile.edit')}
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <h5 className="text-primary mb-3">{t('profile.personalInfo.title')}</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.personalInfo.firstName')}</label>
                      <input
                        type="text"
                        className={`form-control ${inputBgClass}`}
                        {...register('firstName')}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.personalInfo.lastName')}</label>
                      <input
                        type="text"
                        className={`form-control ${inputBgClass}`}
                        {...register('lastName')}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">{t('profile.personalInfo.displayName')}</label>
                      <input
                        type="text"
                        className={`form-control ${inputBgClass}`}
                        {...register('displayName')}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-primary mb-3">{t('profile.contactInfo.title')}</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.contactInfo.email')}</label>
                      <div className="input-group">
                        <span className={`input-group-text ${inputBgClass}`}>
                          <Mail size={18} />
                        </span>
                        <input
                          type="email"
                          className={`form-control ${inputBgClass}`}
                          {...register('email')}
                          disabled
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.contactInfo.phoneNumber')}</label>
                      <div className="input-group">
                        <span className={`input-group-text ${inputBgClass}`}>
                          <Phone size={18} />
                        </span>
                        <input
                          type="tel"
                          className={`form-control ${inputBgClass}`}
                          {...register('phoneNumber')}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.contactInfo.location')}</label>
                      <select
                        className={`form-select ${inputBgClass}`}
                        {...register('location')}
                        disabled={!isEditing}
                      >
                        <option value="">{t('profile.contactInfo.locations.select')}</option>
                        <option value="United States">{t('profile.contactInfo.locations.us')}</option>
                        <option value="United Kingdom">{t('profile.contactInfo.locations.uk')}</option>
                        <option value="Canada">{t('profile.contactInfo.locations.canada')}</option>
                        <option value="Australia">{t('profile.contactInfo.locations.australia')}</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('profile.contactInfo.currency')}</label>
                      <select
                        className={`form-select ${inputBgClass}`}
                        {...register('currency')}
                        disabled={!isEditing}
                      >
                        <option value="">{t('profile.contactInfo.currencies.select')}</option>
                        <option value="USD">{t('profile.contactInfo.currencies.usd')}</option>
                        <option value="EUR">{t('profile.contactInfo.currencies.eur')}</option>
                        <option value="GBP">{t('profile.contactInfo.currencies.gbp')}</option>
                        <option value="JPY">{t('profile.contactInfo.currencies.jpy')}</option>
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
                      {t('profile.cancel')}
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {t('profile.save')}
                    </button>
                  </div>
                )}
              </form>

              <div className="mt-4 text-muted">
                <small>{t('profile.createdOn', { date: 'January 10, 2022', time: '02:12 PM' })}</small>
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
            <div className={`card ${cardBgClass}`}>
              <div className="card-body">
                <h4 className="mb-4">{t('security.title')}</h4>

                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary p-2 rounded me-3">
                        <i className="bi bi-envelope text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{t('security.auth.email.title')}</h6>
                        <small>{t('security.auth.email.description')}</small>
                      </div>
                    </div>
                    <button className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'}`}>
                      {t('security.auth.email.disable')}
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-success p-2 rounded me-3">
                        <i className="bi bi-phone text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{t('security.auth.sms.title')}</h6>
                        <small>{t('security.auth.sms.description')}</small>
                      </div>
                    </div>
                    <button className="btn btn-primary">{t('security.auth.sms.enable')}</button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="bg-danger p-2 rounded me-3">
                        <i className="bi bi-google text-white"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{t('security.auth.google.title')}</h6>
                        <small>{t('security.auth.google.description')}</small>
                      </div>
                    </div>
                    <button className="btn btn-primary">{t('security.auth.google.enable')}</button>
                  </div>
                </div>

                <hr className="border-secondary" />
                <div>
                  <h5 className="mb-3">{t('security.password.title')}</h5>
                  <p>{t('security.password.description')}</p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="oldPassword" className="form-label">{t('security.password.oldPassword')}</label>
                      <input type="password" className={`form-control ${theme === 'dark' ? 'bg-black text-white' : 'bg-white'} border-0`} id="oldPassword" />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="newPassword" className="form-label">{t('security.password.newPassword')}</label>
                        <input type="password" className={`form-control ${theme === 'dark' ? 'bg-black text-white' : 'bg-white'} border-0`} id="newPassword" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="reenterPassword" className="form-label">{t('security.password.reenterPassword')}</label>
                        <input type="password" className={`form-control ${theme === 'dark' ? 'bg-black text-white' : 'bg-white'} border-0`} id="reenterPassword" />
                      </div>
                    </div>
                    <p className="text-muted">
                      {t('security.password.securityTip')}
                    </p>
                    <button type="submit" className="btn btn-primary">{t('security.password.savePassword')}</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (<div className={`card ${cardBgClass}`}>
            <div className="card-body">
              <h4 className="mb-4">{t('api.title')}</h4>

              <div className={`border border-secondary rounded p-4 d-flex align-items-center mb-5`} style={{ backgroundColor: theme === 'dark' ? "#111" : "#f8f9fa" }}>
                <div className="bg-primary p-3 rounded-circle d-flex align-items-center justify-content-center me-3">
                  <i className="bi bi-bank2 text-white fs-4"></i>
                </div>
                <h6 className="mb-0">{t('api.keysList')}</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3">
                <span className="text-muted">{t('api.needHelp')}</span>
                <button className="btn btn-primary">{t('api.createKey')}</button>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
export default ProfilePage;