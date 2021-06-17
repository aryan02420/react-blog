import { useParams } from 'react-router-dom'
import editorjs from '@/hooks/editorjs.js'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const BlogDetails = () => {
  const { id } = useParams()
  const blogs = useSelector((state) => state.blogs)
  const currentBlog = blogs.find((blog) => blog.id === +id)
  const editor = useRef({})
  const [editorReady, setEditorReady] = useState(false)

  useEffect(() => {
    editor.current = editorjs('blog-viewer', {}, true)
    editor.current.isReady.then(() => {
      setEditorReady(true)
    })
  }, [])

  useEffect(() => {
    if (editorReady && currentBlog && currentBlog.content) {
      editor.current.render(currentBlog.content)
    }
  }, [editorReady, currentBlog])

  return (
    <div className="blog-details">
      {!editorReady && <div>Loading...</div>}
      <div id="blog-viewer"></div>
    </div>
  )
}

export default BlogDetails
