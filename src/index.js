import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom/client';
import React from 'react';

import MarkdownEditor from './components/MarkdownEditor.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <div className="container mt-4">
        <MarkdownEditor/> 
    </div>
);