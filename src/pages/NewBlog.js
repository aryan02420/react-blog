import { useState, useEffect, useRef } from 'react'
import editorjs from '@/hooks/editorjs.js'
import postFetch from '@/hooks/postFetch'
import { Redirect } from 'react-router-dom'
import { addBlog } from '@/actions/blogs.actions'
import { useSelector, useDispatch } from 'react-redux'

const NewBlog = () => {
  let editor = useRef({})
  useEffect(() => {
    editor.current = editorjs('blog-editor')
  }, [])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [editorOutput, setEditorOutput] = useState(null)
  const [postData, setPostData] = useState(null)
  const redirect = useRef(false)
  const dispatch = useDispatch()
  const id = useSelector((state) => state.blogs).length

  const postHandler = (evt) => {
    evt.preventDefault()
    setIsPending(true)
    editor.current.save().then((content) => {
      setEditorOutput(content)
    })
  }

  // .then((data) => {
  //   console.log(data)
  //   const temp = postFetch('http://localhost:4000/blogs/', postData)
  //   console.log(temp)
  //   setError(temp.error)
  //   setIsPending(temp.isPending)
  // })
  // .catch((err) => {
  //   // setError(err)
  //   console.log(err)
  //   setIsPending(false)
  // })

  useEffect(() => {
    if (!!editorOutput) {
      const title = editorOutput.blocks?.find((block) => block.type === 'header')?.data?.text
      const summary = editorOutput.blocks?.find((block) => block.type === 'paragraph')?.data?.text
      const author = 'aryan'
      if (!title || !summary) {
        setError('please write something')
        setPostData(null)
        setIsPending(false)
      } else {
        setError(null)
        setPostData({ title, summary, author, content: editorOutput })
        setIsPending(false)
      }
    } else {
      setError(null)
    }
  }, [editorOutput])

  useEffect(() => {
    if (!!postData) {
      postFetch('http://localhost:4000/blogs/', postData)
      dispatch(addBlog({...postData, id: id+1}))
      setIsPending(false)
      redirect.current = true
    }
  }, [postData])

  return (
    <div id="new-blog">
      <h1>New Blog</h1>
      <div id="blog-editor"></div>
      <button onClick={postHandler}>POST</button>
      {error && <div>{error}</div>}
      {isPending && <div>Posting...</div>}
      {redirect.current && <Redirect to="/" />}
    </div>
  )
}

export default NewBlog
