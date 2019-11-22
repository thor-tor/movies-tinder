import actions from './actions'

const fetchMovies = async () => {

    const response = await fetch('http://localhost:3004/movies', { method: 'GET'})
    const json = await response.json()

    return json
}

export const getAllMovies = () => 
    async (dispatch) => {
        const movies = await fetchMovies()
        console.log(movies)
    }
