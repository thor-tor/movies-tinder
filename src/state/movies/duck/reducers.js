import types from './types'
import produce from 'immer'

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
          draftState.list.shift(action.item)
        })   
    default:
      return state
  }
}

export default moviesReducer
