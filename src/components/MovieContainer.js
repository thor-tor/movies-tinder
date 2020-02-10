import React, {useContext} from 'react'
import {MovieContext} from '../MovieContext'
import Movie from './Movie'

const MovieContainer = () => {

    const {movieList, AcceptMovie, RejectMovie} = useContext(MovieContext)

    const movieData = movieList.map(movie => <Movie key={movie.id} movie={movie}/>)

    return(
        <div>
            {movieData[0]}
            <button onClick={() => AcceptMovie()} className="acceptButton">Accept</button>
            <button onClick={() => RejectMovie()} className="rejectButton">Reject</button>
        </div>
        
    )
}

export default MovieContainer