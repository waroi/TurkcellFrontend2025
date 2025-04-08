

export const getOrders = async (userId) => {
    try {
     
      const response = await fetch(`/api/orders/${userId}`);
      
      
      if (!response.ok) {
        const errorDetails = await response.text(); 
        console.error(`Error fetching orders: ${errorDetails}`);
        throw new Error(`Failed to fetch orders: ${errorDetails}`);
      }
  
      
      const orders = await response.json();
  
      
      if (!orders || orders.length === 0) {
        console.log('No orders found for this user');
      }
  
      return orders; 
    } catch (error) {
      
      console.error('Error fetching orders:', error.message);
      return [];  
    }
  };
  
  
  export const createOrder = async (orderData) => {
    try {
      
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), 
      });
  
      
      if (!response.ok) {
        const errorDetails = await response.text();  
        console.error(`Error creating order: ${errorDetails}`);
        throw new Error(`Failed to create order: ${errorDetails}`);
      }
  
     
      const createdOrder = await response.json();
      return createdOrder;  
    } catch (error) {
      
      console.error('Error creating order:', error.message);
    }
  };
  
 
  export const getCartItems = async (userId) => {
    try {
     
      const response = await fetch(`/api/cart/${userId}`);
      
     
      if (!response.ok) {
        const errorDetails = await response.text(); 
        console.error(`Error fetching cart items: ${errorDetails}`);
        throw new Error(`Failed to fetch cart items: ${errorDetails}`);
      }
  
     
      const cartItems = await response.json();
  
     
      if (!cartItems || cartItems.length === 0) {
        console.log('No cart items found for this user');
      }
  
      return cartItems;  
    } catch (error) {
      
      console.error('Error fetching cart items:', error.message);
      return [];  
    }
  };
  
  
  
  
  