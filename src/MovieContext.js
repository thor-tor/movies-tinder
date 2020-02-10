import React, {useState, useEffect} from 'react'

const MovieContext = React.createContext()

const MovieContextProvider = ({children}) => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/movies")
        .then(r => r.json())
        .then(r => setMovieList(r))
    }, [])

    const AcceptMovie = () => {
        const updatedArray = movieList.map(movie => {
            return(
                movieList.splice(0,1)
            )
        })
        
        setMovieList(updatedArray)
    }

    const RejectMovie = () => {
        const updatedArray = movieList.splice(0,1)
        setMovieList(updatedArray)
    }

    return(
        <MovieContext.Provider value={{movieList, AcceptMovie, RejectMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieContext, MovieContextProvider}