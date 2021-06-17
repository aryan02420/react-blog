import { ADD, DELETE, SET } from '@/types/blogs.types'

export const addBlog = (newBlog) => {
  return {
    type: ADD,
    value: newBlog,
  }
}
export const deleteBlog = (blogID) => {
  return {
    type: DELETE,
    value: blogID,
  }
}
export const setBlog = (blogList) => {
  return {
    type: SET,
    value: blogList
  }
}
