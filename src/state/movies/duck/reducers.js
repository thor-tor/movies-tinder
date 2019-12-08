import types from './types'
import produce from 'immer'
import axios from 'axios'

const INITIAL_STATE = {
  listName: 'Movies',
  list: []
}

const moviesReducer = (state = INITIAL_STATE, action) => {

  const params = {
    title: "{state.list[0].title}",
    id: "state.list[0].key",
  }

  switch (action.type) {

    case types.ADD_MOVIE:
      return produce(state, draftState => {
        draftState.list.push(action.item)
      })

    case types.ACCEPT_MOVIE:
      return produce(state, draftState => {
           axios.post(`http://localhost:3004/recommendations/${state.list[0].key}/accept/`, params, {
            headers: {
              'content-type': 'application/json',
         },
           })

          if(state.list.length === 1){
            return
          }

          draftState.list.shift(action.item)
      })

    case types.REJECT_MOVIE:
      return produce(state, draftState => {
        axios.post(`http://localhost:3004/recommendations/${state.list[0].key}/reject/`, params, {
          headers: {
            'content-type': 'application/json',
       },
         })

          if(state.list.length === 1){
            return
          }

          draftState.list.shift(action.item)
      })

    default:
      return state
  }

}

export default moviesReducer