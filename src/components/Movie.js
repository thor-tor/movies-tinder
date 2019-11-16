import React, {useState, useEffect} from "react";

const Movie = () => {

    const [moviesList, setMoviesList] = useState([])
    const [movieTitle, setMovieTilte] = useState("Titanic")
    const [movieImage, setMovieImage] = useState("https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg")
    const [movieSummary, setMovieSummary] = useState("Lorem Ipsum")
    const [movieRating, setMovieRating] = useState("1")
  
    useEffect(() => {
        fetch("http://localhost:3004/movies")
        .then(response => response.json())
        .then(response => {
            const movies = response.data
            setMoviesList(movies)
            console.log(movies)
        })
    },[])

    console.log(moviesList)

    return(
        <div className="movieContainer">
            <h2>{movieTitle}</h2>
            <img alt="movie poster" className="moviePoster" src={movieImage}/>
            <p>{movieSummary}</p>
            <p>({movieRating}/10)</p>

            <button className="acceptButton"> Accept</button>
            <button className="rejectButton"> Reject</button>
        </div>
        )
    }



export default Movie