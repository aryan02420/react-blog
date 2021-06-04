import editorjs from '@/hooks/editorjs.js'

const NewBlog = () => {
  const editor = editorjs('blog-editor')
  const postHandler = (evt) => {
    evt.preventDefault()
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  } 

  return (
    <div id="new-blog">
      <h1>New Blog</h1>
      <div id="blog-editor"></div>
      <button onClick={postHandler}>POST</button>
    </div>
  );
}

export default NewBlog;
