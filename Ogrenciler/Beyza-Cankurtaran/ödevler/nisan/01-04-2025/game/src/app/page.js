"use client";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AuthModal from './components/AuthModal';

export default function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div>
      <Navbar onLoginClick={() => handleOpenAuth('login')} onSignupClick={() => handleOpenAuth('signup')} />
      <Banner />
      <main className="container py-5">
        <div className="text-center my-5">
          <h2 className="display-5 fw-bold mb-4">Welcome to Our Quiz Challenge Site</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our amazing features and start your journey with us today.
          </p>
        </div>
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Feature 1</h3>
                <p className="card-text">Different genres is avaliable.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Feature 2</h3>
                <p className="card-text">Difficulty choosing makes the challenges more fun!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Feature 3</h3>
                <p className="card-text">Our multiplayer version is on the build!Stay tuned!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialMode={authMode}
        />
      )}
    </div>
  );
}