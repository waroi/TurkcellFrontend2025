"use client";
import { useState } from 'react';
import useCartStore from "@/store/useCartStore";
import useFavoritesStore from "@/store/useFavoritesStore";
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, updateQuantity } = useCartStore();
  const { addToFavorites, removeFromFavorites, favorites } = useFavoritesStore();
  const isFavorite = favorites.some(fav => fav.id === product.id);
  const [addingToCart, setAddingToCart] = useState(false);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    setAddingToCart(true);
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    await addToCart(productToAdd);
    toast.success('Ürün sepete eklendi');
    setQuantity(1);
    setAddingToCart(false);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
      toast.success('Ürün favorilerden kaldırıldı');
    } else {
      addToFavorites(product);
      toast.success('Ürün favorilere eklendi');
    }
  };

  return (
    <div className="card h-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="position-relative">
        <div className="p-3 d-flex align-items-center justify-content-center bg-gray-50" style={{ height: '180px' }}>
          <img 
            src={product.image} 
            className="img-fluid"
            alt={product.name}
            style={{ maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
        <button
          onClick={handleToggleFavorite}
          className={`btn position-absolute top-0 end-0 m-2 ${
            isFavorite ? 'btn-danger' : 'btn-outline-danger'
          }`}
          style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
        >
          <i className={`fas fa-heart${isFavorite ? '' : '-o'}`}></i>
        </button>
        {product.price < 50 && (
          <div className="position-absolute top-0 start-0 m-2">
            <span className="badge bg-danger" style={{ fontSize: '0.75rem' }}>İndirim</span>
          </div>
        )}
      </div>
      <div className="card-body p-3 d-flex flex-column">
        <h5 className="card-title mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>{product.name}</h5>
        <p className="card-text mb-2" style={{ fontSize: '0.8rem', height: '2.4em', overflow: 'hidden' }}>
          {product.description?.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-primary fw-bold" style={{ fontSize: '0.9rem' }}>{product.price} ₺</span>
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                Toplam: {(product.price * quantity).toFixed(2)} ₺
              </span>
            )}
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="input-group input-group-sm" style={{ width: '120px' }}>
              <button 
                className="btn btn-outline-primary"
                type="button"
                onClick={handleDecrement}
                style={{ padding: '0.25rem' }}
              >
                <i className="fas fa-minus" style={{ fontSize: '0.7rem' }}></i>
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max="10"
                style={{ fontSize: '0.8rem' }}
              />
              <button 
                className="btn btn-outline-primary"
                type="button"
                onClick={handleIncrement}
                style={{ padding: '0.25rem' }}
              >
                <i className="fas fa-plus" style={{ fontSize: '0.7rem' }}></i>
              </button>
            </div>
          </div>
          <button 
            className="btn btn-primary btn-sm w-100"
            onClick={handleAddToCart}
            disabled={addingToCart}
            style={{ fontSize: '0.8rem' }}
          >
            {addingToCart ? (
              <>
                <span className="spinner-border spinner-border-sm me-1"></span>
                Ekleniyor...
              </>
            ) : (
              <>
                <i className="fas fa-shopping-cart me-1"></i>
                Sepete Ekle
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



