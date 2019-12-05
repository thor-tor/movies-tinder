import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'
import Movie from '../../../components/Movie'
import axios from 'axios'

const MoviesContainer = (props) => {
  const movies = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllMovies())
  },[dispatch])

  const movie = movies.list.map(movie => <Movie key={movie.id} movie={movie}/>)

  console.log(movies.list)

  const acceptMovie = (e) => {
      e.preventDefault()
      axios.put(`http://localhost:3004/recommendations/${movies.list[0].key}/accept/`,{ 
        "title": "state.list[0].title",
        "id": "state.list[0].key",
        header:{"Content-Type": 'application/json'} })
      dispatch({ type: 'ACCEPT_MOVIE' })
           if (movies.list.length === 1){
        return
      }
  }

  const rejectMovie = (e) => {
      e.preventDefault();
      dispatch({ type: 'REJECT_MOVIE' })
 
  }

  return (
    <div>
     <div>{movie[0]}</div> 
     <button className="acceptButton" onClick={acceptMovie}> Accept</button>
     <button className="rejectButton" onClick={rejectMovie}> Reject</button>
     </div>
    )
}

export default MoviesContainer
