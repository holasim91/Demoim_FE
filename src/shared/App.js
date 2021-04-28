import { ConnectedRouter } from "connected-react-router";
import React from "react";
import {  Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Editor } from "../components";
function App() {

  const [contents, setContents] = React.useState('');

 function onEditorChange(value) {
    setContents(value);
    console.log(value) 
 }

  return (
    <>
      <em>텍스트</em>
      <Editor value={contents} onChange={onEditorChange}/>
  <ConnectedRouter history={history}>
      
    </ConnectedRouter>
    
    </>
  );
}

export default App;
