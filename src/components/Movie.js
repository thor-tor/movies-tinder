import React, {useState, useEffect} from "react";
import axios from 'axios';


const Movie = () => {

    // const moviesData = [...MoviesData]

    const [moviesData, setMoviesData] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3004/movies')
    //     .then(res => {
    //       const movies = res.data;
    //       setMoviesData(movies)
    //     //   console.log(movies)
    //     })
    // },[])

    // console.log(moviesData)


    

    const AcceptMovie = () => {
        // setMoviesDetails([...moviesData], moviesData.shift())
        // console.log(moviesData)
    }

    const RejectMovie = () => {
        // setMoviesDetails([...moviesData], moviesData.shift())
        // console.log(moviesData)
    }

    console.log(moviesData)

    return(
        <div className="movieContainer">
            <h2>fg</h2>
            <img alt="movie poster" className="moviePoster" src=""/>
            <p></p>
            <p>(/10)</p>
            <button className="acceptButton" onClick={AcceptMovie}> Accept</button>
            <button className="rejectButton" onClick={RejectMovie}> Reject</button>
        </div>
        )
    }

export default Movie