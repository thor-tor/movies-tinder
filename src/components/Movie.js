import React from "react";

const Movie = (props) =>{
        return(
            <div className="movieContainer">
                <h2>{props.movie.title}</h2>
                <img alt="movie poster" id="moviePoster" src={props.movie.poster}></img>
                <p>{props.movie.summary}</p>
                <p id="movieRating">({props.movie.rating}/10)</p>
            </div>
        )
    }
export default Movie