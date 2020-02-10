import React from 'react'
 
const Movie = ({movie}) => {

    return(
        <div>
            <img alt={`${movie.title} movie poster`} className="moviePoster" src={movie.imageURL}></img>
            <h3>{movie.title}</h3>
            <p>{movie.rating}</p>
            <p>{movie.summary}</p>
        </div>
    )
}

export default Movie