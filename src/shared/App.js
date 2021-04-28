import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Main } from "../pages";
import { Header } from "../components";
function App() {

  return (
    <>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </>
  );
}

export default App;
