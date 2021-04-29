import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Exhibition, Main, TeamAllList } from "../pages";
import { Header, Footer } from "../components";
import styled from "styled-components";
function App() {

  return (
    <>
      <Wrapper>
        <ContentContainer>
          <ConnectedRouter history={history}>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/team" exact component={TeamAllList} />
            <Route path="/exhibition" exact component={Exhibition} />
          </ConnectedRouter>
        </ContentContainer>
        <Footer />
      </Wrapper>

    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex:1;
`;