import actions from './actions'
import axios from 'axios'

const fetchMovies = async () => {

  const json = await axios.get('http://localhost:3004/movies')
  return json.data
}

export const getAllMovies = () => async (dispatch) => {
    const movies = await fetchMovies()
    movies.map(movie => dispatch(actions.add({
      title:movie.title, 
      poster:movie.imageURL, 
      summary: movie.summary, 
      rating: movie.rating, 
      key: movie.id})))
}


