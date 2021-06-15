import { useState } from 'react'
import editorjs from '@/hooks/editorjs.js'
import postFetch from '@/hooks/postFetch'
import { useEffect } from 'react'

const NewBlog = () => {
  let editor
  useEffect(() => {
    editor = editorjs('blog-editor')
  }, [])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  
  const postHandler = (evt) => {
    evt.preventDefault()
    setIsPending(true)
    editor.save().then((content) => {
      const title = content.blocks.find(block => block.type === "header")?.data?.text
      const summary = content.blocks.find(block => block.type === "paragraph")?.data?.text
      const author = "aryan"
      if (!title && !summary) {
        throw Error('please write something')
      }
      console.log(content)
      return { title, summary, author, content }
    }).then((data) => {
      console.log(data);
      const temp = postFetch('http://localhost:4000/blogs/', data)
      console.log(temp)
      setError(temp.error)
      setIsPending(temp.isPending)
    }).catch((err) => {
      // setError(err)
      // setIsPending(false)
    });
  } 

  return (
    <div id="new-blog">
      <h1>New Blog</h1>
      <div id="blog-editor"></div>
      <button onClick={postHandler}>POST</button>
      { error && <div>{ error }</div> }
      { isPending && <div>Posting...</div> }
    </div>
  );
}

export default NewBlog;
