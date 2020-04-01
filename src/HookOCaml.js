import React, { useState, useEffect } from 'react';
import { getHook } from './hooks/index.js';
import AceEditor from "react-ace";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default function Hook (props) {
  const id = props.match.params.id;
  const [name, setName] = useState(null);
  const [implementation, setImplementation] = useState(undefined);
  const [usage, setUsage] = useState(undefined);
  const [url, setUrl] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    const {name, implementation, usage, url, description} = getHook(id);
    setName(name);
    setImplementation(implementation);
    setUsage(usage);
    setUrl(url);
    setDescription(description);
  },[id]);

  return (
    <div className='hook'>
      <h1 className='name'>
        <a href={url}>{name}</a>
      </h1>
      <h5 className='description'>{description}</h5>
      <div className='editors'>
        <div className='implementation'>
          <div className='options'>
            <h3 className='i-title'>IMPLEMENTATION:</h3>
            <CopyToClipboard text={implementation}>
              <button className='copy' onClick={() => {alert('Copied to clipboard')}}>Copy</button>
            </CopyToClipboard>
          </div>
          <AceEditor
            mode="ocaml"
            theme="monokai"
            value={implementation}
            showGutter={false}
            name="implement"
            width="99%"
            wrapEnabled={true}
            maxLines={Infinity}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
        <div className='usage'>
          <h3 className='u-title'>USAGE:</h3>
          <AceEditor
            mode="ocaml"
            value={usage}
            theme="monokai"
            showGutter={false}
            name="use"
            width="99%"
            wrapEnabled={true}
            maxLines={Infinity}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
      </div>
    </div>
  )
}