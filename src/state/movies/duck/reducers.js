import types from './types'
import produce from 'immer'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

const INITIAL_STATE = {
  listName: 'Movies',
  list: []
}

db.defaults({accepted: [], rejected: []}).write()

const moviesReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case types.ADD_MOVIE:
      return produce(state, draftState => {
        draftState.list.push(action.item)
      })

    case types.ACCEPT_MOVIE:
      return produce(state, draftState => {

        db.get('accepted')
          .push({
            title: state.list[0].title,
            id: state.list[0].key
          })
          .write()
          console.log(db)

        if (state.list.length === 1) {
          return
        }

        draftState.list.shift(action.item)
      })

    case types.REJECT_MOVIE:
      return produce(state, draftState => {

        db.get('rejected')
          .push({
            title: state.list[0].title,
            id: state.list[0].key
          })
          .write()
          console.log(db)

        if (state.list.length === 1) {
          return
        }

        draftState.list.shift(action.item)
      })

    default:
      return state
  }

}

export default moviesReducer