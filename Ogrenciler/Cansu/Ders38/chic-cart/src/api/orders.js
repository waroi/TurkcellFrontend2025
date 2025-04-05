// orders.js (API ile ilgili işlemler)

export const getOrders = async (userId) => {
    try {
      // API'ye GET isteği gönderiyoruz
      const response = await fetch(`/api/orders/${userId}`);
  
      // Eğer cevap başarılı değilse, hata fırlatıyoruz
      if (!response.ok) {
        const errorDetails = await response.text(); // Hata mesajı detayını alıyoruz
        console.error(`Error fetching orders: ${errorDetails}`);
        throw new Error(`Failed to fetch orders: ${errorDetails}`);
      }
  
      // Siparişleri JSON formatında alıyoruz
      const orders = await response.json();
  
      // Siparişlerin olup olmadığını kontrol ediyoruz
      if (!orders || orders.length === 0) {
        console.log('No orders found for this user');
      }
  
      return orders;  // Siparişleri döndürüyoruz
    } catch (error) {
      // Hata olursa burada detaylı loglama yapıyoruz
      console.error('Error fetching orders:', error.message);
      return [];  // Hata durumunda boş array döndürüyoruz
    }
  };
  
  export const createOrder = async (orderData) => {
    try {
      // API'ye POST isteği gönderiyoruz
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),  // Sipariş verilerini JSON olarak gönderiyoruz
      });
  
      // Eğer cevap başarılı değilse, hata fırlatıyoruz
      if (!response.ok) {
        const errorDetails = await response.text();  // Hata mesajı detayını alıyoruz
        console.error(`Error creating order: ${errorDetails}`);
        throw new Error(`Failed to create order: ${errorDetails}`);
      }
  
      // Oluşturulan siparişi JSON formatında alıyoruz
      const createdOrder = await response.json();
      return createdOrder;  // Oluşturulan siparişi döndürüyoruz
    } catch (error) {
      // Hata durumunda loglama yapıyoruz
      console.error('Error creating order:', error.message);
    }
  };
  
  
  