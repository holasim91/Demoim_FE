import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configStore";
import { Exhibition, ExhibitionDetail, ExhibitionWrite, Main, TeamAllList, Signup, Login, TeamDetail, TeamWrite, TeamEdit, SmallTalk, Userpage, UserEditpage, Alarm, Service, Certification, Policy } from "../pages";
import { Header, Footer } from "../components";

import styled from "styled-components";
import { getCookie } from "../shared/Cookies";
import { actionCreators as userAction } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import ScrollTop from "./ScrollTop";
import Error from "./Error";




function App() {

  const dispatch = useDispatch();
  const token = getCookie('token') ? true : false;

  React.useEffect(() => {
    if (token) {
      dispatch(userAction.loginCheckAPI());
    }
  }, [dispatch, token]);

  return (
    <>

      <Wrapper>
        <ContentContainer>
          <ConnectedRouter history={history}>
            <Header />
            <ScrollTop />
            <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/team" exact component={TeamAllList} />
            <Route path="/team/detail/:teamId" exact component={TeamDetail} />
            <Route path="/team/write" exact component={TeamWrite} />
            <Route path="/team/edit/:teamId" exact component={TeamEdit} />
            <Route path="/exhibition" exact component={Exhibition} />
            <Route path="/exhibition/detail/:exhibitionId" exact component={ExhibitionDetail} />
            <Route path="/exhibition/write" exact component={ExhibitionWrite} />
            <Route path="/exhibition/write/:exhibitionId" exact component={ExhibitionWrite} />
            <Route path="/smalltalk" exact component={SmallTalk} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/userpage/:userId" exact component={Userpage} />
            <Route path="/userEditpage" exact component={UserEditpage} />
            <Route path="/alarm/:userId" exact component={Alarm} />
            <Route path="/service" exact component={Service} />
            <Route path="/certification" exact component={Certification}/>
            <Route path="/policy" exact component={Policy} />
            <Route path="" component={Error} />
            </Switch>
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