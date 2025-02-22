const apiKey = import.meta.env.VITE_GITHUB_TOKEN

export const getAllUsers = async query => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/vnd.github.v3+json'
      }
    }
  )
  const data = await response.json()
  console.log(data)
  return data
}
export const getOneUser = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/vnd.github.v3+json'
    }
  })
  if (!response.ok) {
    console.error('GitHub API Hatası:', response.status, response.statusText)
    return null
  }
  const data = await response.json()
  return data
}
export const getUserRepos = async username => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/vnd.github.v3+json'
      }
    }
  )
  if (!response.ok) {
    console.error('GitHub API Hatası:', response.status, response.statusText)
    return null
  }
  const data = await response.json()
  return data
}
