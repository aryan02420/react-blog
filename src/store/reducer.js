import { combineReducers } from 'redux'
import blogReducer from '@/reducers/blogs.reducer'

const Reducer = combineReducers({
  blogs: blogReducer,
})

export default Reducer
