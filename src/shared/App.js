import { ConnectedRouter } from "connected-react-router";
import React from "react";
import {  Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Editor } from "../components";
function App() {

  return (
    <>
    <ConnectedRouter history={history}>
      
    </ConnectedRouter>
    
    </>
  );
}

export default App;
