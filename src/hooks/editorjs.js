import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

const Editor = (elem_id) => {
    const [editor, setEditor] = useState(null)
    useEffect(() => {
        setEditor( new EditorJS({ 
            /** 
             * Id of Element that should contain the Editor 
             */ 
            holder: elem_id ?? 'editorjs', 
            
            /** 
             * Available Tools list. 
             * Pass Tool's class or Settings object for each Tool you want to use 
             */ 
            tools: { 
              header: Header,
            }, 
          }) )
    }, [])
    return editor
}

export default Editor