import React, {Component} from 'react'
import './App.css'
import MoviesData from "./components/MoviesData"
import Movie from "./components/Movie"
import axios from 'axios'
import Newbutton from './components/Newbutton'

class App extends Component{

  constructor(){
    super()
    this.state = {
      movies: MoviesData
    }
    this.addMovie = this.addMovie.bind(this)
    this.removeMovie = this.removeMovie.bind(this)
  }
  
  async componentDidMount() {
    await axios.get('./components/MoviesData.js')
    this.setState({movies: MoviesData})
  }

  async addMovie(){

    if(this.state.movies.length === 1){
      return
    }
    
    axios.put(`/recommendations/${this.state.movies[0].id}/accept`,{
    })
    .then(res => { console.log(res.data)})


    this.setState((prevState) => ({
      movies: prevState.movies.slice(1)
    }))
    console.log(this.state.movies)
  }
  
      
  removeMovie(){

    if(this.state.movies.length === 1){
      return
    }

    this.setState((prevState) => ({
      movies: prevState.movies.slice(1)
    }));
    axios.put(`/recommendations/${this.state.movies[0].id}/reject`,{

    })
    .then(res => { console.log(res.data)})
    console.log(this.state.movies)
  }

  

  render(){

  
  const MovieComponents = this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)



    return (
      <div className="App">
          <Newbutton />
            {MovieComponents[0]}
            <button className="acceptButton" onClick={this.addMovie}> Accept</button>
            <button className="rejectButton" onClick={this.removeMovie}> Reject</button>
      </div>
    )
  }
}  


export default App;
