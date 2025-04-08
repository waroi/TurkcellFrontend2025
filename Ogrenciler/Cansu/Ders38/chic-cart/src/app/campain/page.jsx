"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import useAuthStore from '@/store/useAuthStore';

export default function Campaigns() {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  const [campaigns, setCampaigns] = useState([]);
  const [featuredCampaigns, setFeaturedCampaigns] = useState([]);
  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [addingToCart, setAddingToCart] = useState({});
  
  // Fetch campaigns from Firebase
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        
        // Get current date for filtering
        const now = new Date();
        
        // Query for active campaigns
        const activeCampaignsQuery = query(
          collection(db, 'campaigns'),
          where('endDate', '>=', now),
          orderBy('endDate', 'asc')
        );
        
        // Query for featured campaigns
        const featuredCampaignsQuery = query(
          collection(db, 'campaigns'),
          where('isFeatured', '==', true),
          where('endDate', '>=', now),
          orderBy('endDate', 'asc'),
          limit(3)
        );
        
        // Query for upcoming campaigns
        const upcomingCampaignsQuery = query(
          collection(db, 'campaigns'),
          where('startDate', '>', now),
          orderBy('startDate', 'asc'),
          limit(5)
        );
        
        try {
          // Execute queries
          const [activeSnapshot, featuredSnapshot, upcomingSnapshot] = await Promise.all([
            getDocs(activeCampaignsQuery),
            getDocs(featuredCampaignsQuery),
            getDocs(upcomingCampaignsQuery)
          ]);
          
          // Process active campaigns
          const activeCampaigns = activeSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            startDate: doc.data().startDate?.toDate(),
            endDate: doc.data().endDate?.toDate()
          }));
          
          // Process featured campaigns
          const featuredCampaigns = featuredSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            startDate: doc.data().startDate?.toDate(),
            endDate: doc.data().endDate?.toDate()
          }));
          
          // Process upcoming campaigns
          const upcomingCampaigns = upcomingSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            startDate: doc.data().startDate?.toDate(),
            endDate: doc.data().endDate?.toDate()
          }));
          
          // Update state
          setCampaigns(activeCampaigns);
          setFeaturedCampaigns(featuredCampaigns);
          setUpcomingCampaigns(upcomingCampaigns);
        } catch (firebaseError) {
          console.error('Firebase error:', firebaseError);
          if (firebaseError.code === 'permission-denied') {
            setError('Kampanyalara erişim izniniz yok. Lütfen giriş yapın.');
          } else {
            setError('Kampanyalar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setError('Kampanyalar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setLoading(false);
      }
    };
    
    fetchCampaigns();
  }, []);
  
  const handleAddToCart = async (product) => {
    if (!isAuthenticated()) {
      toast.info('Ürünü sepete eklemek için lütfen giriş yapın', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push('/login');
      return;
    }
    
    try {
      setAddingToCart(prev => ({ ...prev, [product.id]: true }));
      await addToCart(product);
      toast.success(`${product.title} sepete eklendi`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Ürün sepete eklenirken bir hata oluştu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }
  };
  
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  const calculateTimeLeft = (endDate) => {
    if (!endDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now;
    
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };
  
  const filteredCampaigns = activeTab === 'all' 
    ? campaigns 
    : activeTab === 'featured' 
      ? featuredCampaigns 
      : campaigns.filter(campaign => campaign.category === activeTab);
  
  if (loading) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Hata!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            <button 
              className="btn btn-outline-danger" 
              onClick={() => window.location.reload()}
            >
              <i className="fas fa-sync-alt me-2"></i>Tekrar Dene
            </button>
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-4">
      {/* Hero Section */}
      <div className="card shadow-sm mb-4 overflow-hidden">
        <div className="position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-relative p-5 text-white text-center">
            <h1 className="display-4 fw-bold mb-3">
              <i className="fas fa-percentage me-2"></i>
              Özel Kampanyalar
            </h1>
            <p className="lead mb-4">
              En güncel kampanyalarımızı keşfedin ve fırsatları kaçırmayın!
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/shop" className="btn btn-primary btn-lg">
                <i className="fas fa-shopping-bag me-2"></i>Alışverişe Başla
              </Link>
              <a href="#featured-campaigns" className="btn btn-outline-light btn-lg">
                <i className="fas fa-fire me-2"></i>Öne Çıkanlar
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Campaigns */}
      {featuredCampaigns.length > 0 && (
        <div id="featured-campaigns" className="mb-5">
          <h2 className="mb-4">
            <i className="fas fa-fire text-danger me-2"></i>
            Öne Çıkan Kampanyalar
          </h2>
          <div className="row g-4">
            {featuredCampaigns.map(campaign => (
              <div key={campaign.id} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <div className="card-img-top position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                      <img
                        src={campaign.image || '/images/placeholder.jpg'}
                        alt={campaign.title}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-danger">
                        <i className="fas fa-clock me-1"></i>
                        {calculateTimeLeft(campaign.endDate).days} gün
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{campaign.title}</h5>
                    <p className="card-text text-muted">{campaign.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                      </div>
                      <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                        Detaylar
                      </Link>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-top-0">
                    <small className="text-muted">
                      <i className="far fa-calendar-alt me-1"></i>
                      {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Campaign Tabs */}
      <div className="mb-4">
        <ul className="nav nav-tabs" id="campaignTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
            >
              <i className="fas fa-th-large me-1"></i>Tümü
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
              id="featured-tab"
              data-bs-toggle="tab"
              data-bs-target="#featured"
              type="button"
              role="tab"
              aria-controls="featured"
              aria-selected={activeTab === 'featured'}
              onClick={() => setActiveTab('featured')}
            >
              <i className="fas fa-star me-1"></i>Öne Çıkanlar
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'electronics' ? 'active' : ''}`}
              id="electronics-tab"
              data-bs-toggle="tab"
              data-bs-target="#electronics"
              type="button"
              role="tab"
              aria-controls="electronics"
              aria-selected={activeTab === 'electronics'}
              onClick={() => setActiveTab('electronics')}
            >
              <i className="fas fa-laptop me-1"></i>Elektronik
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'fashion' ? 'active' : ''}`}
              id="fashion-tab"
              data-bs-toggle="tab"
              data-bs-target="#fashion"
              type="button"
              role="tab"
              aria-controls="fashion"
              aria-selected={activeTab === 'fashion'}
              onClick={() => setActiveTab('fashion')}
            >
              <i className="fas fa-tshirt me-1"></i>Moda
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected={activeTab === 'home'}
              onClick={() => setActiveTab('home')}
            >
              <i className="fas fa-home me-1"></i>Ev & Yaşam
            </button>
          </li>
        </ul>
      </div>
      
      {/* Campaign Content */}
      <div className="tab-content" id="campaignTabContent">
        <div className={`tab-pane fade ${activeTab === 'all' ? 'show active' : ''}`} id="all" role="tabpanel" aria-labelledby="all-tab">
          {filteredCampaigns.length > 0 ? (
            <div className="row g-4">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <div className="card-img-top position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={campaign.image || '/images/placeholder.jpg'}
                          alt={campaign.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-danger">
                          <i className="fas fa-clock me-1"></i>
                          {calculateTimeLeft(campaign.endDate).days} gün
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{campaign.title}</h5>
                      <p className="card-text text-muted small">{campaign.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                          Detaylar
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-white">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              Bu kategoride aktif kampanya bulunmamaktadır.
            </div>
          )}
        </div>
        
        <div className={`tab-pane fade ${activeTab === 'featured' ? 'show active' : ''}`} id="featured" role="tabpanel" aria-labelledby="featured-tab">
          {featuredCampaigns.length > 0 ? (
            <div className="row g-4">
              {featuredCampaigns.map(campaign => (
                <div key={campaign.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <div className="card-img-top position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={campaign.image || '/images/placeholder.jpg'}
                          alt={campaign.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-danger">
                          <i className="fas fa-clock me-1"></i>
                          {calculateTimeLeft(campaign.endDate).days} gün
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{campaign.title}</h5>
                      <p className="card-text text-muted small">{campaign.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                          Detaylar
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-white">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              Öne çıkan kampanya bulunmamaktadır.
            </div>
          )}
        </div>
        
        <div className={`tab-pane fade ${activeTab === 'electronics' ? 'show active' : ''}`} id="electronics" role="tabpanel" aria-labelledby="electronics-tab">
          {filteredCampaigns.length > 0 ? (
            <div className="row g-4">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <div className="card-img-top position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={campaign.image || '/images/placeholder.jpg'}
                          alt={campaign.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-danger">
                          <i className="fas fa-clock me-1"></i>
                          {calculateTimeLeft(campaign.endDate).days} gün
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{campaign.title}</h5>
                      <p className="card-text text-muted small">{campaign.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                          Detaylar
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-white">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              Bu kategoride aktif kampanya bulunmamaktadır.
            </div>
          )}
        </div>
        
        <div className={`tab-pane fade ${activeTab === 'fashion' ? 'show active' : ''}`} id="fashion" role="tabpanel" aria-labelledby="fashion-tab">
          {filteredCampaigns.length > 0 ? (
            <div className="row g-4">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <div className="card-img-top position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={campaign.image || '/images/placeholder.jpg'}
                          alt={campaign.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-danger">
                          <i className="fas fa-clock me-1"></i>
                          {calculateTimeLeft(campaign.endDate).days} gün
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{campaign.title}</h5>
                      <p className="card-text text-muted small">{campaign.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                          Detaylar
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-white">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              Bu kategoride aktif kampanya bulunmamaktadır.
            </div>
          )}
        </div>
        
        <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
          {filteredCampaigns.length > 0 ? (
            <div className="row g-4">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <div className="card-img-top position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={campaign.image || '/images/placeholder.jpg'}
                          alt={campaign.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-danger">
                          <i className="fas fa-clock me-1"></i>
                          {calculateTimeLeft(campaign.endDate).days} gün
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{campaign.title}</h5>
                      <p className="card-text text-muted small">{campaign.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">{campaign.discount}% İndirim</span>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                          Detaylar
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-white">
                      <small className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              Bu kategoride aktif kampanya bulunmamaktadır.
            </div>
          )}
        </div>
      </div>
      
      {/* Upcoming Campaigns */}
      {upcomingCampaigns.length > 0 && (
        <div className="mt-5">
          <h2 className="mb-4">
            <i className="fas fa-calendar-alt text-primary me-2"></i>
            Yaklaşan Kampanyalar
          </h2>
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Kampanya</th>
                      <th>Kategori</th>
                      <th>İndirim</th>
                      <th>Başlangıç</th>
                      <th>Bitiş</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingCampaigns.map(campaign => (
                      <tr key={campaign.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={campaign.image || '/images/placeholder.jpg'}
                              alt={campaign.title}
                              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                              className="me-3 rounded"
                            />
                            <div>
                              <h6 className="mb-0">{campaign.title}</h6>
                              <small className="text-muted">{campaign.description}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-secondary">{campaign.category}</span>
                        </td>
                        <td>
                          <span className="text-danger fw-bold">{campaign.discount}%</span>
                        </td>
                        <td>{formatDate(campaign.startDate)}</td>
                        <td>{formatDate(campaign.endDate)}</td>
                        <td>
                          <Link href={`/campaigns/${campaign.id}`} className="btn btn-sm btn-outline-primary">
                            Detaylar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Newsletter Signup */}
      <div className="card shadow-sm mt-5">
        <div className="card-body p-5 text-center">
          <h3 className="mb-3">
            <i className="fas fa-envelope text-primary me-2"></i>
            Kampanyalardan Haberdar Olun
          </h3>
          <p className="text-muted mb-4">
            En güncel kampanyalar ve özel fırsatlardan ilk siz haberdar olun.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-posta adresiniz"
                  aria-label="E-posta adresiniz"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-paper-plane me-2"></i>Abone Ol
                </button>
              </div>
              <small className="text-muted">
                <i className="fas fa-shield-alt me-1"></i>
                E-posta adresiniz güvende, spam göndermiyoruz.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}