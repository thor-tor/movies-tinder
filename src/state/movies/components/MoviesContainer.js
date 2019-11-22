import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllMovies } from '../ducks/operations'

const MoviesContainer = ({movies, getAllMovies}) => {
    useEffect(() => { getAllMovies() }, [])
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps(MoviesContainer))