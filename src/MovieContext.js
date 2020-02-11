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

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        }

        fetch(`/recommendations/${id}/accept`,options)
        .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }

    const RejectMovie = (id) => {
        setMovieList(prevItems => prevItems.filter(item => item.id !== id))

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        }
        
        fetch(`/recommendations/${id}/reject`,options)
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }


    return(
        <MovieContext.Provider value={{movieList, AcceptMovie, RejectMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export {MovieContext, MovieContextProvider}