import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MovieContext = React.createContext()

const MovieContextProvider = ({children}) => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:3004/movies")
            setMovieList(result.data)
    }
    fetchData()
    },[])

    const AcceptMovie = (id, title, imageURL,summary,rating) => {
        setMovieList(prevItems => prevItems.filter(item => item.id !== id))

        axios.post(`/recommendations/${id}/accept`,{
            acceptedMovies: {
                id,
                title,
                imageURL,
                summary,
                rating
            }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const RejectMovie = (id, title, imageURL,summary,rating) => {
        setMovieList(prevItems => prevItems.filter(item => item.id !== id))

        axios.post(`/recommendations/${id}/reject`,{
            rejecteddMovies: {
                id,
                title,
                imageURL,
                summary,
                rating
            }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    return(
        <MovieContext.Provider value={{movieList, AcceptMovie, RejectMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieContext, MovieContextProvider}