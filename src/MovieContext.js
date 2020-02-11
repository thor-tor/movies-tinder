import React, {useState, useEffect} from 'react'

const MovieContext = React.createContext()

const MovieContextProvider = ({children}) => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/movies")
        .then(r => r.json())
        .then(r => setMovieList(r))
    }, [])

    const AcceptMovie = (id) => {
        setMovieList(prevItems => prevItems.filter(item => item.id !== id))
    }

    const RejectMovie = (id) => {
        setMovieList(prevItems => prevItems.filter(item => item.id !== id))
    }


    return(
        <MovieContext.Provider value={{movieList, AcceptMovie, RejectMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieContext, MovieContextProvider}