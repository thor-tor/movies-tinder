import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'

const MoviesContainer = (props) => {
  const movies = useSelector(state => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllMovies())
  },[dispatch])

  console.log(movies)

  return (
      <div>{movies.list[0]}</div>
    )
}

export default MoviesContainer
