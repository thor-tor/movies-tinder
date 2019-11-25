import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'
import Movie from '../../../components/Movie'

const MoviesContainer = (props) => {
  const movies = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllMovies())
  },[dispatch])

  const movie = movies.list.map(movie => <Movie key={movie.id} movie={movie}/>)

  return (
    <div>
     <div>{movie[0]}</div> 
     <button className="acceptButton" onClick={() => dispatch({ type: 'ACCEPT_MOVIE' })}> Accept</button>
     <button className="rejectButton" onClick={() => dispatch({ type: 'REJECT_MOVIE' })}> Reject</button>
     </div>
    )
}

export default MoviesContainer
