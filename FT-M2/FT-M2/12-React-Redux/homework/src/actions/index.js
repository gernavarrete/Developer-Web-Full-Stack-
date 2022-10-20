const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

const ApiKey = '234277f7'

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE , payload };
  }

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES , payload: json });
        });
    };
  }

export function removeMovieFavorite(payload) {
    return {    
        type: REMOVE_MOVIE_FAVORITE,
        payload
    }
}

export function getMovieDetail (id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}` )
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL , payload: json });
            });
    };
}