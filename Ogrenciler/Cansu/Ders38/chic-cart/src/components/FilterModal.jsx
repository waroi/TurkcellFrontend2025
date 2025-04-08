import React, { useState, useEffect } from 'react';

export default function FilterModal({ isOpen, onClose, onApplyFilters, initialFilters = {}, error = null }) {
  const [filters, setFilters] = useState({
    priceRange: initialFilters.priceRange || [0, 1000],
    categories: initialFilters.categories || [],
    brands: initialFilters.brands || [],
    colors: initialFilters.colors || [],
    sizes: initialFilters.sizes || [],
    ...initialFilters
  });

  // Update filters when initialFilters change
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      ...initialFilters
    }));
  }, [initialFilters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const defaultFilters = {
      priceRange: [0, 1000],
      categories: [],
      brands: [],
      colors: [],
      sizes: []
    };
    setFilters(defaultFilters);
    onApplyFilters(defaultFilters);
  };

  if (!isOpen) return null;

  return (
    <div className="filter-modal">
      <div className="filter-modal-content">
        <div className="filter-modal-header">
          <h3>Filter Products</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close filters">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {error ? (
          <div className="filter-modal-error">
            <div className="error-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Access Error</h4>
            <p>{error}</p>
            <button className="retry-btn" onClick={onClose}>
              <i className="fas fa-redo me-2"></i>Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="filter-modal-body">
              {/* Price Range */}
              <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                    aria-label="Price range"
                  />
                  <div className="price-inputs">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="filter-section">
                <h4>Categories</h4>
                <div className="checkbox-group">
                  {['Clothing', 'Shoes', 'Accessories', 'Jewelry'].map(category => (
                    <label key={category} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={(e) => {
                          const newCategories = e.target.checked
                            ? [...filters.categories, category]
                            : filters.categories.filter(c => c !== category);
                          handleFilterChange('categories', newCategories);
                        }}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="filter-section">
                <h4>Colors</h4>
                <div className="color-group">
                  {[
                    { name: 'Black', value: '#000000' },
                    { name: 'White', value: '#FFFFFF' },
                    { name: 'Red', value: '#FF0000' },
                    { name: 'Blue', value: '#0000FF' },
                    { name: 'Green', value: '#00FF00' },
                    { name: 'Yellow', value: '#FFFF00' }
                  ].map(color => (
                    <label key={color.name} className="color-label">
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(color.name)}
                        onChange={(e) => {
                          const newColors = e.target.checked
                            ? [...filters.colors, color.name]
                            : filters.colors.filter(c => c !== color.name);
                          handleFilterChange('colors', newColors);
                        }}
                      />
                      <span className="color-swatch" style={{ backgroundColor: color.value }}></span>
                      <span>{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="filter-section">
                <h4>Sizes</h4>
                <div className="size-group">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <label key={size} className="size-label">
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={(e) => {
                          const newSizes = e.target.checked
                            ? [...filters.sizes, size]
                            : filters.sizes.filter(s => s !== size);
                          handleFilterChange('sizes', newSizes);
                        }}
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="filter-modal-footer">
              <button className="reset-btn" onClick={handleReset}>
                <i className="fas fa-undo me-2"></i>Reset Filters
              </button>
              <button className="apply-btn" onClick={handleApplyFilters}>
                <i className="fas fa-check me-2"></i>Apply Filters
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .filter-modal {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          background: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transform: translateX(100%);
          animation: slideIn 0.3s forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }

        .filter-modal-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .filter-modal-header {
          padding: 1rem;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .filter-modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #333;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: #666;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }

        .close-btn:hover {
          color: #333;
        }

        .filter-modal-error {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .error-icon {
          font-size: 3rem;
          color: #dc3545;
          margin-bottom: 1rem;
        }

        .filter-modal-error h4 {
          margin-bottom: 0.5rem;
          color: #333;
        }

        .filter-modal-error p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .retry-btn {
          padding: 0.75rem 1.5rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .retry-btn:hover {
          background: #0056b3;
        }

        .filter-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }

        .filter-section {
          margin-bottom: 1.5rem;
        }

        .filter-section h4 {
          margin-bottom: 0.75rem;
          font-size: 1rem;
          color: #444;
        }

        .price-range {
          padding: 0 1rem;
        }

        .price-range input[type="range"] {
          width: 100%;
          margin: 1rem 0;
        }

        .price-inputs {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          color: #666;
        }

        .checkbox-group,
        .color-group,
        .size-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checkbox-label,
        .color-label,
        .size-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          color: #555;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }

        .filter-modal-footer {
          padding: 1rem;
          border-top: 1px solid #eee;
          display: flex;
          gap: 1rem;
        }

        .reset-btn,
        .apply-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .reset-btn {
          background: #f5f5f5;
          color: #666;
        }

        .apply-btn {
          background: #007bff;
          color: white;
        }

        .reset-btn:hover {
          background: #eee;
        }

        .apply-btn:hover {
          background: #0056b3;
        }

        /* Custom checkbox styles */
        input[type="checkbox"] {
          width: 18px;
          height: 18px;
          border: 2px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          appearance: none;
          -webkit-appearance: none;
          transition: all 0.2s ease;
        }

        input[type="checkbox"]:checked {
          background-color: #007bff;
          border-color: #007bff;
        }

        input[type="checkbox"]:checked::after {
          content: '✓';
          position: absolute;
          color: white;
          font-size: 12px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Custom range input styles */
        input[type="range"] {
          -webkit-appearance: none;
          height: 4px;
          background: #ddd;
          border-radius: 2px;
          outline: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: #007bff;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}