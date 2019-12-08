import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'
import Movie from '../../../components/Movie'

const MoviesContainer = () => {
  const movies = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllMovies())
  },[dispatch])

  const movie = movies.list.map(movie => <Movie key={movie.id} movie={movie}/>)

  console.log(movies.list)

  const acceptMovie = (e) => {
    e.preventDefault()
      dispatch({ type: 'ACCEPT_MOVIE' })
  }

  const rejectMovie = (e) => {
    e.preventDefault()
    dispatch({ type: 'REJECT_MOVIE' })
  }

  return (
    <>
     <div>{movie[0]}</div> 
     <button className="acceptButton" onClick={acceptMovie}> Accept</button>
     <button className="rejectButton" onClick={rejectMovie}> Reject</button>
     </>
    )
}

export default MoviesContainer
