import React, {useContext} from 'react'
import {MovieContext} from '../MovieContext'
 
const Movie = ({movie}) => {

    const {movieList,AcceptMovie, RejectMovie} = useContext(MovieContext)

    return(
        <div>
            {movieList.length > 1 && <div>
            <img alt={`${movie.title} movie poster`} className="moviePoster" src={movie.imageURL}></img>
            <h3>{movie.title}</h3>
            <p>{movie.rating}</p>
            <p>{movie.summary}</p>
            </div>}

            <button disabled={movieList.length < 2} onClick={() => AcceptMovie(movie.id) } className="acceptButton">Accept</button>
            <button disabled={movieList.length < 2} onClick={() => RejectMovie(movie.id) } className="rejectButton">Reject</button>

            {movieList.length < 2 && 
            <button className="tryAgainButton" onClick={() => window.location.reload()}>Try again :)</button>}
        </div>
        
    )
}

export default Movie