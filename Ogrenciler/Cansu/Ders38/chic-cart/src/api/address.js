

export const getAddresses = async (userId) => {
    try {

      const response = await fetch(`/api/addresses/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching addresses:', error);
      return [];
    }
  };
  
  export const addAddress = async (userId, address) => {
    try {

      const response = await fetch(`/api/addresses/${userId}`, {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding address:', error);
      throw error;
    }
  };
  