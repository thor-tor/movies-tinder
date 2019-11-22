import types from './types'

const INITIAL_STATE = {
    movies: []
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_MOVIE:
            return{...state, movies: [...state.movies.shift()]}
        case types.RESET_MOVIES:
            return {...state, movies:[]}
        default:
            return state
    }
}

export default moviesReducer