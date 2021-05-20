import React from "react";
import styled from "styled-components";
import { Container } from "../elements";
import Team from "../images/team.svg";
import { TeamList } from "../components";
import { history } from "../redux/configStore";
import { useMediaQuery } from "react-responsive";
import { actionCreators as teamActions } from "../redux/modules/team";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as smalltalkActions } from "../redux/modules/smalltalk";
import { actionCreators as exhibitionActions } from "../redux/modules/exhibition";
import MySmallTalkList from "../components/SmallTalk/MySmallTalkList";
import MyExhibitionList from "../components/Exhibition/MyExhibitionList";
import Feedback from "../images/feedback.svg";
import Swal from "sweetalert2";

const Main = () => {
   const dispatch = useDispatch();
   
   const isLogin = useSelector((state) => state.user.isLogin);
   const formURL = "https://forms.gle/rKQJvfFboYBSq7Ah6"

   React.useEffect(() => {
      dispatch(teamActions.getTeamMakingAPI(1, 6));
      dispatch(smalltalkActions.getSmallTalkPostsAPI(1, 6));
      dispatch(exhibitionActions.getExihibitionAPI(1,6))
   }, [dispatch]);


   const isTablet = useMediaQuery({
      query: "(min-width:769px) and (max-width:1200px)"
   });

   const isMobile = useMediaQuery({
      query: "(max-width:768px)"
   });

   return (
      <React.Fragment>
         <BannerBox>
            <Container>
               <BannerInner>
                  {!isMobile ? (<React.Fragment>
                     <MentBox>
                        <TitleText>
                           취업을 위한 첫 걸음, 팀프로젝트 여기여기 모여라!
                     </TitleText>
                        {isTablet ? (<React.Fragment>
                           <DescText>
                              DeMoim 는 국비, 부트캠프를 하지 않고도 팀 프로젝트의 경험을 <br /> 쌓고 싶은 다양한 분야의 사람들이 모여
                           안정적인 플랫폼 내에서 팀을 만들고,
                           팀원을 모아 자신의 경험을 쌓아 나갈수 있는
                           팀 빌딩 플랫폼 입니다.
                           </DescText>
                        </React.Fragment>) : (<React.Fragment>
                           <DescText>
                              DeMoim 는 국비, 부트캠프를 하지 않고도 <br />
                              팀 프로젝트의 경험을 쌓고 싶은 다양한 분야의 사람들이 모여 <br />
                              안정적인 플랫폼 내에서 팀을 만들고,
                              팀원을 모아 자신의 경험을 쌓아 나갈수 있는<br />
                              팀 빌딩 플랫폼 입니다.
                           </DescText>
                        </React.Fragment>)}
                        <ServiceBtn onClick={() => history.push('/service')}>
                           더 알아보기
                        </ServiceBtn>
                     </MentBox>
                     <ImgBox>
                        <BannerImg src={Team} />
                     </ImgBox>
                  </React.Fragment>) : (
                     <React.Fragment>
                        <TitleText>
                           취업을 위한 첫 걸음, 팀프로젝트 여기여기 모여라!
                        </TitleText>
                        <ImgBox>
                           <BannerImg src={Team} />
                        </ImgBox>
                        <DescText>
                           Demoim은 국비, 부트캠프를 하지 않고도<br />
                           팀 프로젝트의 경험을 쌓아 나갈 수 있는<br />
                           <strong>팀 빌딩 플랫폼</strong> 입니다.
                        </DescText>
                        <ServiceBtn onClick={() => history.push('/service')}>
                           더 알아보기
                        </ServiceBtn>
                     </React.Fragment>
                  )}
               </BannerInner>
            </Container>
         </BannerBox>
         <Container>
            <TitleBox>
               <Title>
                  📢 프로젝트 팀원 모집
               </Title>
               <More onClick={() => history.push('/team')}>더보기 {">"}</More>
            </TitleBox>
         </Container>
         <TeamList />
         <MiddleBox>
            <Container>
               <MakingBox>
                  <MakingMent>지금 바로 리더가 되어 팀을 모아보세요!</MakingMent>
                  <MakingBtn onClick={() => history.push('/team')}>팀 꾸리러 가기</MakingBtn>
               </MakingBox>
            </Container>
         </MiddleBox>
         <Container>
            <DetalkBox>
               <Detalk>
                  <Point>De</Point>
                  Talk
               </Detalk>
               <Ment>다른 유저들과 소통할 수 있는 공간입니다.</Ment>
               <Line />
               <DetalkTitleBox>
                  <TitleInnerBox>
                     <DetalkTitle>
                        <Point>프로젝트 자랑</Point> 게시판
                  </DetalkTitle>
                     <DetalkMore onClick={() => history.push('/exhibition')}>더보기{">"}</DetalkMore>
                  </TitleInnerBox>
                  <DatalkSubTitle>
                     여러분의 프로젝트를 마음껏 뽐내보세요!
                  </DatalkSubTitle>
               </DetalkTitleBox>
               <MyExhibitionList />
               <DetalkTitleBox>
                  <TitleInnerBox>
                     <DetalkTitle>
                        프로젝트 관련 <Point>small talk</Point>
                     </DetalkTitle>
                     <DetalkMore onClick={() => history.push('/smalltalk')}>더보기{">"}</DetalkMore>
                  </TitleInnerBox>
                  <DatalkSubTitle>
                     다른 유저들과 보다 더 자유롭게 소통해보세요!
                  </DatalkSubTitle>
               </DetalkTitleBox>
               <MySmallTalkList />
            </DetalkBox>
            <FeedbackBtn>
            {isLogin ? (
                  <Atag href={formURL} target="#" rel="noreferrer noopener">
                     <FeedbackFormImg src={Feedback}/>
                  </Atag>
            ) : (
               <FeedbackFormImg 
               onClick={() => {
                  Swal.fire({
                     text: '로그인 후 작성 부탁드립니다',
                     icon: 'warning',
                     confirmButtonColor: "#999cda",
                     footer: '<a href=http://localhost:3000/login>로그인하러 가기👏🏻</a>',
                  })
               }}src={Feedback}/>)}
            </FeedbackBtn>
         </Container>
      </React.Fragment>
   )
}

export default Main


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


//배너 영역
const BannerBox = styled.div`
   width:100%;
   height: 415px;
   background: -webkit-linear-gradient( #F2F5FA, #ffffff);
   background: -moz-linear-gradient(#F2F5FA, #ffffff);
   background: -o-linear-gradient(#F2F5FA, #ffffff);
   background: linear-gradient(#F2F5FA, #ffffff);

   @media ${props => props.theme.mobile}{
      height: auto;
   }
`;

const BannerInner = styled.div`
   display: flex;
   padding:130px 10px 0px 10px;
   gap: 15px;
   width:100%;
   justify-content: center;
   margin-left:-50px;

   @media ${props => props.theme.tablet}{
      padding:130px 0px 0px 0px;
      margin-left:0px;
   }
   @media ${props => props.theme.mobile}{
      padding: 80px 0px 0px 0px;
      flex-direction: column;
      align-items: center;
   }
`;

const MentBox = styled.div`
   width:50%;
   text-align: center;

   @media ${props => props.theme.mobile}{
      font-size:1.15em;
      width:75%;
   }
`;

const TitleText = styled.p`
   font-size:1.4em;
   font-weight:bold;

   @media ${props => props.theme.tablet}{
      font-size:2vw;
   }

   @media ${props => props.theme.mobile}{
      font-size: 3vw;
   }
`

const DescText = styled.p`
   margin-top: 30px;
   font-size: 0.87em;
   line-height: 1.8em;

   @media ${props => props.theme.tablet}{
      font-size:1.36vw;
   }
   @media ${props => props.theme.mobile}{
      font-size: 2.5vw;
      text-align:center;
      margin-top:15px;
   }
`;

const ImgBox = styled.div`
   margin-top: -10px;
   

  @media ${props => props.theme.mobile}{
      margin-top:30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

const BannerImg = styled.img`
   width: 100%;

@media ${props => props.theme.mobile}{
      width:90%;
   }
`;

const ServiceBtn = styled.button`
   font-size: 0.93em;
   font-weight: 600;
   background-color: transparent;
   border: 1px solid #707070;
   padding:7px 18px;
   border-radius: 17.5px;
   cursor: pointer;
   margin-top: 32px;

   transition:all .3s;
   &:hover{
      color:white;
      background-color: ${props => props.theme.button_purple};
      border:1px solid ${props => props.theme.button_purple};
   }

   @media ${props => props.theme.tablet}{
      font-size:1.4vw;
   }

   @media ${props => props.theme.mobile}{
      font-size:2vw;
      margin-top:2px;
   }

`;

//팀메이킹 권유 영역
const MiddleBox = styled.div`
   width:100%;
   height: 152px;
   background-color:${props => props.theme.sub_color};
   margin-bottom: 113px;
`;

const MakingBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 152px;
   gap:15%;

   @media ${props => props.theme.mobile}{
      gap:5%;
   }
`;
const MakingBtn = styled.button`
   font-size: 1.06em;
   padding: 10px 0px;
   width: 162px;
   border-radius: 21px;
   background-color: white;
   color:"#000000";
   font-weight: bold;
   box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07);
   border: none;
   cursor: pointer;
   outline: none;
   transition:box-shadow .3s;
   &:hover{
      box-shadow:0 0 4px 0 rgba(0, 0, 0, 0.15);
   }

   @media ${props => props.theme.mobile}{

      font-size: 2.7vw;
      width:auto;
      padding:10px 20px;
      white-space:nowrap;
   }

`;
const MakingMent = styled.p`
   font-size: 1.4em;
   font-weight: 500;

   @media ${props => props.theme.mobile}{
      font-size: 3vw;
   }
`;

const TitleBox = styled.div`
   width:95%;
   margin: 60px auto 0px auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const Title = styled.p`
   padding-left:5px;
   font-size: 1.37em;
   font-weight: bold;

   @media ${props => props.theme.tablet}{
      font-size:2vw;
   }
   @media ${props => props.theme.mobile}{
      font-size:3vw;  
   }
`;

const More = styled.p`
   font-weight: 0.9em;
   cursor: pointer;
   margin-right:15px;
   color: ${props => props.theme.main_color};

   @media ${props => props.theme.tablet}{
      font-size:1.7vw;
   }
   @media ${props => props.theme.mobile}{
      display: none;
   }
`;

const DetalkMore = styled.p`
   font-size: 1em;
   cursor: pointer;
   margin-right:15px;
   color:${props => props.theme.main_color};

   @media (max-width:375px){
      font-size: 0.6em;
   }

`;

//데톡 영역
const DetalkBox = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   margin-top: 110px;
   margin-bottom: 100px;
   padding:0px 35px;

   @media ${props => props.theme.mobile}{
      padding: 0px 10px;
   }
`;
const Detalk = styled.p`
   ${props => props.theme.logo};
   font-size:2.06em;

   @media ${props => props.theme.mobile}{
      font-size:5vw;
   }
`;

const Ment = styled.p`
   font-size:0.93em;
   color:#7a7786;

    @media ${props => props.theme.mobile}{
      font-size:2.2vw;
   }
`;

const Line = styled.div`
   width:610px;
   height: 1px;
   background-color: rgba(122, 119, 134, 0.5);
   margin:10px 0px 100px 0px;

   @media ${props => props.theme.mobile}{
      width:110%;
   }
`

const DetalkTitleBox = styled.div`
   display: flex;
   width:100%;
   flex-direction:column;
   padding:0px 30px 25px 30px;
   gap:20px;
    @media ${props => props.theme.mobile}{
      gap:12px;
   }
`;


//데톡 타이틀 박스 
const DetalkTitle = styled.p`
   font-size:1.37em;
   font-weight: bold;

   @media ${props => props.theme.mobile}{
      font-size:3.5vw;
   }
`

const DatalkSubTitle = styled.p`
font-size: 0.93em;
font-weight:300;

   @media ${props => props.theme.mobile}{
      font-size:2.5vw;
      
   }

`
const Point = styled.span`
   color: ${props => props.theme.main_color};
`
const TitleInnerBox = styled.div`
   display: flex;
   justify-content: space-between;
`;

