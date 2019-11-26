import React from 'react'
import './App.css'
import Movie from "./components/Movie"
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> develop

const App = () => {

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
  }

export default App;
