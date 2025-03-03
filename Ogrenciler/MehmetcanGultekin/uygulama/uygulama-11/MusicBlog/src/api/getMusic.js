export const getMusic = async () => {
  try {
      const response = await fetch('http://localhost:3000/musics')
      if (!response.ok) {
          throw new Error('Failed to fetch music data')
      }
      return await response.json()
      
  } catch (error) {
      console.error('Error fetching music data:', error)
      return []
  }
}

export const addMusic = async (newMusic) => {
    try {
        const response = await fetch('http://localhost:3000/musics' ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMusic)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch music data')
        }
        return await response.json()
        
    } catch (error) {
        console.error('Error fetching music data:', error)
        return []
    }
  }
  export const deleteMusic = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/musics/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete music');
      }
      return true;
    } catch (error) {
      console.error('Error deleting music:', error);
      return false;
    }
  };

  export const updateMusic = async (id, updatedMusic) => {
    try {
      const response = await fetch(`http://localhost:3000/musics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMusic),
      });
      if (!response.ok) {
        throw new Error('Failed to update music');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating music:', error);
      return null;
    }
  };




