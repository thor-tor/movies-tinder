import React, {Component} from "react";

// const addMovie = () =>{
//     MovieComponents.splice(0, 1);
// }

// const removeMovie = () =>{
//     MovieComponents.splice(0, 1);
// }

class Buttons extends Component{

    constructor(){
        super()
        this.addMovie = this.addMovie.bind(this)
        this.removeMovie = this.removeMovie.bind(this)
    }

    addMovie(){
        this.MovieComponents.splice(0,1)
    }

    removeMovie(){
        this.MovieComponents.splice(0,1)
    }

    render(){
        return(
            <div>
                <button className="acceptButton" onClick={this.addMovie()}> Accept</button>
                <button className="rejectButton" onClick={this.removeMovie()}>> Reject</button>
            </div>
        )
    }
}

export default Buttons;