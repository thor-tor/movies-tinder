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

  console.log(movies)

  const movie = movies.list.map(movie => <Movie key={movie.id} movie={movie}/>)

  return (
     <div>{movie[0]}</div> 
    
      
    )
}

export default MoviesContainer
