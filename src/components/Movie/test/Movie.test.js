import React from 'react'
import ReactDOM from 'react-dom'
import Movie from '../../Movie'

it("render without errors", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Movie />, div)
})
