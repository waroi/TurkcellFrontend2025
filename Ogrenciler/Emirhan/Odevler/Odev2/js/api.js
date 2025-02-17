class GameAPI {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  async getGames () {
    try {
      const response = await fetch(`${this.baseURL}/games`)
      return await response.json()
    } catch (err) {
      console.log('Hata:', err)
    }
  }

  async addGame (game) {
    try {
      const response = await fetch(`${this.baseURL}/games`, {
        method: 'POST',
        body: JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
      })
      return await response.json()
    } catch (err) {
      console.log('Hata:', err)
    }
  }

  async updateGame (id, updatedGame) {
    try {
      const response = await fetch(`${this.baseURL}/games/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedGame),
        headers: { 'Content-Type': 'application/json' }
      })
      return await response.json()
    } catch (err) {
      console.log('Hata:', err)
    }
  }

  async deleteGame (id) {
    try {
      await fetch(`${this.baseURL}/games/${id}`, { method: 'DELETE' })
      console.log('Veri Silme İşlemi Başarılı')
    } catch (err) {
      console.log('Hata: Silme İşlemi Başarısız')
    }
  }
}
