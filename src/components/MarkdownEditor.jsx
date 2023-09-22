import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        return () => {
            editor.remove(); 
        };
    }, []);    
    
    return (
        <div ref={editorRef}></div>
    );  
};

export default MarkdownEditor;