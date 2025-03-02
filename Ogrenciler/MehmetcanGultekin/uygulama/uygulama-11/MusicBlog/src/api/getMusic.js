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



