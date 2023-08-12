import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useState } from 'react';
import { dummyText } from './dummyText.jsx';

export default function Editor() {
  const [atext, setText] = useState({ markdown: dummyText });

  const handleChange = (e) => {
    setText({ ...atext, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="wrap">
        <h1>Editor</h1>

        <textarea
          id="editor"
          type="text"
          name="markdown"
          onChange={handleChange}
          defaultValue={dummyText}
        />
        <h1>Previewer</h1>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          className="reactMarkdown"
          id="preview"
        >
          {atext.markdown}
        </ReactMarkdown>
      </div>
    </>
  );
}
