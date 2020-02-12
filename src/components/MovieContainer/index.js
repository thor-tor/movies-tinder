import React, {useContext} from 'react'
import {MovieContext} from '../../MovieContext'
import Movie from '../Movie'

const MovieContainer = () => {

    const {movieList} = useContext(MovieContext)

    const movieData = movieList.map(movie => <Movie key={movie.id} movie={movie}/>)

    return(
        <div>
            {movieData[0]}
        </div>
        
    )
}

export default MovieContainer