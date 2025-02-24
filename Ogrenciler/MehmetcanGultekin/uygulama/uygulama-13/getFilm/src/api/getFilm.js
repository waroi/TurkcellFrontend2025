const api_key = import.meta.env.VITE_API_KEY;

export function getAllFilms() {
    const url = 'https://api.themoviedb.org/3/authentication';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:  `Bearer ${api_key}`,
        }
      };
      
      fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));

}
