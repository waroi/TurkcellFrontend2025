"use client";
import useCartStore from "@/store/useCartStore"; 

const CartModal = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart); 

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">Sepetim</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p>Sepetiniz boş.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{item.title} x {item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Sil</button>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
            <button type="button" className="btn btn-primary">Ödeme Yap</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

