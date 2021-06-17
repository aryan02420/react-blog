import { ADD, DELETE, SET } from '@/types/blogs.types'

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.value]
    case DELETE:
      return [...state.filter((blog) => blog.id !== action.value)]
    case SET:
      return [...action.value]
    default:
      return state
  }
}

export default reducer
