import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { Exhibition, ExhibitionDetail, Main, TeamAllList, Signup, Login, TeamDetail, SmallTalk } from "../pages";
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
            <Route path="/team/detail/:teamId" exact component={TeamDetail} />
            <Route path="/exhibition" exact component={Exhibition} />
            <Route path="/exhibition/detail/:exhibitionId" exact component={ExhibitionDetail} />
            <Route path="/smalltalk" exact component={SmallTalk} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
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