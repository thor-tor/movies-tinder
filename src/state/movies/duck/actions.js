import types from './types'

const add = item => ({
  type: types.ADD_MOVIE, item
})

const accept = item => ({
  type: types.ACCEPT_MOVIE, item
})

const reject = item => ({
  type: types.REJECT_MOVIE, item
})

export default {
  add,
  accept,
  reject
}
