import { useParams } from 'react-router-dom'
import getFetch from '@/hooks/getFetch'
import editorjs from '@/hooks/editorjs.js'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const BlogDetails = () => {
  const { id } = useParams()
  const { data, error, isPending } = getFetch('http://localhost:4000/blogs/' + id)
  const editor = useRef({})
  const [editorReady, setEditorReady] = useState(false)

  useEffect(() => {
    editor.current = editorjs('blog-viewer', {}, true)
    console.log(1, editor)
    editor.current.isReady.then(() => {
      setEditorReady(true)
    })
  }, [])

  useEffect(() => {
    if (editorReady && data && data.content && !isPending) {
      editor.current.render(data.content)
    }
  }, [editorReady])

  return (
    <div className="blog-details">
      {(isPending || !editorReady) && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div id="blog-viewer"></div>
      {/* <pre>{data && JSON.stringify(data.content, null, 2)}</pre> */}
    </div>
  )
}

export default BlogDetails
