import React from 'react'
import './App.css'
<<<<<<< HEAD
import Movie from "./components/Movie"
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> develop
=======
import MoviesContainer from './state/movies/containers/MoviesContainer'
>>>>>>> feature/docker_implementation


<<<<<<< HEAD
  return (
    <>
            <Movie />
    </>

<<<<<<< HEAD
    })
    .then(res => { console.log(res.data)})
    console.log(this.state.movies)
  }

  

  render(){

  
  const MovieComponents = this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)



    return (
      <div className="App">
            {MovieComponents[0]}
            <button className="acceptButton" onClick={this.addMovie}> Accept</button>
            <button className="rejectButton" onClick={this.removeMovie}> Reject</button>
      </div>
=======
>>>>>>> develop
    )
=======
const App = () =>{
    return (
      <div>
        <MoviesContainer />
      </div>
    );
>>>>>>> feature/docker_implementation
  }

export default App
