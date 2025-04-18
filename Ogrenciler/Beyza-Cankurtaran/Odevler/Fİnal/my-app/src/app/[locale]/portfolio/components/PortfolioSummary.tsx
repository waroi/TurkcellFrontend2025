import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const PortfolioSummary = () => {
  const { theme } = useTheme();
  
  // Dynamic theme classes based on theme state
  const cardClass = theme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark';
  const secondaryCardClass = theme === 'dark' ? 'bg-secondary bg-opacity-25' : 'bg-light';
  const secondaryTextClass = theme === 'dark' ? 'text-secondary' : 'text-muted';
  const buttonClass = theme === 'dark' ? 'btn-secondary' : 'btn-outline-secondary';

  return (
    <div className={`card ${cardClass} mb-4`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 mb-1">Portfolio</h1>
            <p className={`${secondaryTextClass} small`}>Update 16/02/2022 at 02:30 PM</p>
          </div>
          <div className="d-flex gap-2">
            <button className={`btn ${buttonClass} d-flex align-items-center`}>
              <i className="bi bi-pencil me-2"></i>
              <span>Edit</span>
            </button>
            <button className={`btn ${buttonClass} d-flex align-items-center`}>
              <i className="bi bi-plus-lg me-2"></i>
              <span>Create New Portfolio</span>
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <div className={`d-flex align-items-center ${secondaryTextClass} mb-2`}>
            <i className="bi bi-calendar-event me-2"></i>
            <span>Available Balance</span>
          </div>
          <div className="d-flex align-items-center">
            <h2 className="display-6 fw-bold mb-0">$32,455.12</h2>
            <button className={`btn btn-link ${secondaryTextClass} ms-2 small`}>Hide Price</button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
            <div className={`card ${secondaryCardClass} ${theme === 'dark' ? 'text-light' : 'text-dark'} mb-2`}>
              <div className="card-body">
                <div className={`d-flex align-items-center ${secondaryTextClass} small mb-2`}>
                  <i className="bi bi-credit-card me-2"></i>
                  <span>Total Investment</span>
                </div>
                <h3 className="h4">$30,455.12</h3>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className={`card ${secondaryCardClass} ${theme === 'dark' ? 'text-light' : 'text-dark'} mb-2`}>
              <div className="card-body">
                <div className={`d-flex align-items-center ${secondaryTextClass} small mb-2`}>
                  <i className="bi bi-credit-card me-2"></i>
                  <span>Total Return</span>
                </div>
                <h3 className="h4">$32,455.12</h3>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className={`card ${secondaryCardClass} ${theme === 'dark' ? 'text-light' : 'text-dark'} mb-2`}>
              <div className="card-body">
                <div className={`d-flex align-items-center ${secondaryTextClass} small mb-2`}>
                  <i className="bi bi-clock me-2"></i>
                  <span>All Time Profit / Loss</span>
                </div>
                <div className="d-flex align-items-center">
                  <h3 className="h4 mb-0">$2,000.12</h3>
                  <span className="ms-2 text-success d-flex align-items-center">
                    +2% <i className="bi bi-arrow-up ms-1"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;