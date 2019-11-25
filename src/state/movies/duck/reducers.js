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
    case types.RESET_MOVIES:
        return produce(state, draftState => {
          draftState.list = []
        })
    default:
      return state
  }
}

export default moviesReducer
