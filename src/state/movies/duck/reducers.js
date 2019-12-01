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
          axios.post(`http://localhost:3004/movies/recommendations/${state.list[0].key}/accept`,{
          })
          .then(function (response) {
            draftState.list.shift(action.item)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
        })
    case types.REJECT_MOVIE:
        return produce(state, draftState => {
          axios.post(`http://localhost:3004/movies/recommendations/${state.list[0].key}/reject`,{
          })
          .then(function (response) {
            draftState.list.shift(action.item)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        })   
    default:
      return state
  }
  
}

export default moviesReducer
