import actions from './actions'

const fetchMovies = async () => {
  const response = await fetch('http://localhost:3004/movies', { method: 'GET' })
  const json = await response.json()

  return json
}

export const getAllMovies = () => async (dispatch) => {
    const movies = await fetchMovies()
    movies.map(movie => dispatch(actions.add({title: movie.title, poster: movie.imageURL, rating: movie.rating, summary: movie.summary, key:movie.id})))
  }

