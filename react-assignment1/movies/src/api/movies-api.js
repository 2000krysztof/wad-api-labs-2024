
export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const getGenres = async ()=>{
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }
  }
  )
  return response.json();
};


export const getFavouriteMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/favourites', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }
  }
  )
  return response.json();
};


export const addToFavourites = async (movieId) => {
  const response = await fetch(
    'http://localhost:8080/api/users/addToFavourites', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
	method: "put",
	body: JSON.stringify({id:movieId})
  }
  )
  return response.json();
}

export const getMovie = async ()=>{

}
