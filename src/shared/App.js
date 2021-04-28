import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Main } from "../pages";
import { Container } from "../elements";
function App() {

  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </>
  );
}

export default App;
