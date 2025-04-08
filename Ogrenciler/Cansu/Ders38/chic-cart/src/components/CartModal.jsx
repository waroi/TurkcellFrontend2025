// components/CartModal.js
import React from 'react';
import useCartStore from "@/store/useCartStore";

export default function CartModal() {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">Sepetim</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <h6>{item.title}</h6>
                  <p>{item.quantity} x ${item.price}</p>
                </div>
              ))
            ) : (
              <p>Sepetiniz boş.</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
            <button type="button" className="btn btn-primary" onClick={clearCart}>Sepeti Temizle</button>
          </div>
        </div>
      </div>
    </div>
  );
}





