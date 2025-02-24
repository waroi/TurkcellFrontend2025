const apiKey=import.meta.env.apiKey
export const getSearchMovie= async (moviename) => {
    const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${moviename}` )
    const data= await response.json
    return data

}
