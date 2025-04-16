import { create } from 'zustand';


const loadCartItems = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  }
  return [];
};


const saveCartItems = (items) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }
};

const useCartStore = create((set, get) => ({
  cartItems: loadCartItems(),
  
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(item => item.id === product.id);
      let newCartItems;
      
      if (existingItem) {
        newCartItems = state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...product, quantity: 1 }];
      }
      
  
      saveCartItems(newCartItems);
      
      return { cartItems: newCartItems };
    });
  },
  
  removeFromCart: (productId) => {
    set((state) => {
      const newCartItems = state.cartItems.filter(item => item.id !== productId);
      saveCartItems(newCartItems);
      return { cartItems: newCartItems };
    });
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      saveCartItems(newCartItems);
      return { cartItems: newCartItems };
    });
  },
  
  clearCart: () => {
    set(() => {
      saveCartItems([]);
      return { cartItems: [] };
    });
  },
  
  getCartTotal: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartCount: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}));

export default useCartStore;







