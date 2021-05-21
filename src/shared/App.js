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
import DaisyFeedback from "../images/daisy_feedback.svg";




function App() {

  const dispatch = useDispatch();
  const formURL = "https://forms.gle/i3tP9YjZF2C1vmp59" //구글설문폼
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
          <FeedbackBtn>
            <Atag href={formURL} target="#" rel="noreferrer noopener">
              <FeedbackFormImg src={DaisyFeedback}/>
            </Atag>                  
            </FeedbackBtn>
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

//피드백버튼
const FeedbackBtn = styled.button`
   position:fixed;
   right:40px;
   bottom:30px;
   width:100px;
   height:100px;
   outline:none;
   border:none;
   /* border: 1px solid #683fee; */
   background-color:transparent;
   margin:2px;
   cursor:pointer;
   @media ${props => props.theme.tablet}{
      right:30px;
      bottom:20px;
   }
   @media ${props => props.theme.mobile}{
      right:10px;
      bottom:10px;
   }
   @media (max-width: 420px){
      right:10px;
      bottom:10px;
      width:90px;
      height:90px;
   }
`;

const Atag= styled.a`
   text-decoration:none;

`;

const FeedbackFormImg = styled.img`
   width:100%;

`;
