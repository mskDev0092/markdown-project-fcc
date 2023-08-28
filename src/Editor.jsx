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
        <div className="left">
          <button className="btn1">Editor</button>

          <textarea
            id="editor"
            type="text"
            name="markdown"
            onChange={handleChange}
            defaultValue={dummyText}
          />
        </div>
        <div className="right">
          <button className="btn2">Previewer</button>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            className="reactMarkdown"
            id="preview"
          >
            {atext.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
