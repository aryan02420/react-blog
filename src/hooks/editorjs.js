import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'


const Editor = (elem_id, data, readonly) => {
    const [editor, setEditor] = useState(null)
    useEffect(() => {
        setEditor( new EditorJS({ 
            holder: elem_id ?? 'editorjs', 
            tools: { 
              header: {
                class: Header,
                config: {
                  placeholder: 'heading',
                  levels: [1,2,3,4,5,6],
                  defaultLevel: 3
                }
              },
              list: {
                class: List,
                inlineToolbar: true,
              },
              image: SimpleImage,
            },
            data: data ?? {},
            placeholder: 'Let`s write an awesome story!',
            readOnly: readonly ?? false,
          }) )
    }, [])
    return editor
}

export default Editor