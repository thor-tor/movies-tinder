import types from './types'
import produce from 'immer'
import axios from 'axios'

const INITIAL_STATE = {
  listName: 'Movies',
  list: []
}



const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.ADD_MOVIE:
        return produce(state, draftState => {
          draftState.list.push(action.item)
        })

    case types.ACCEPT_MOVIE:
        return produce(state, draftState => {

            draftState.list.shift(action.item)

        })



    case types.REJECT_MOVIE:
        return produce(state, draftState => {
          axios.post(`http://localhost:3004/recommendations/${state.list[0].key}/reject/`,{
            "title": "state.list[0].title",
            "id": "state.list[0].key",
            header:{"Content-Type": 'application/json'} })
            draftState.list.shift(action.item)

            if (state.list.length === 1){
              return
            }
        })   
    default:
      return state
  }
  
}

export default moviesReducer
