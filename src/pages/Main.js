import React from "react";
import styled from "styled-components";
import { Container, Text } from "../elements";
import Team from "../images/team.svg";
import { TeamList } from "../components";
import { history } from '../redux/configStore';

const Main = (props) => {

   //const isTablet 

   return (
      <React.Fragment>
         <BannerBox>
            <Container>
               <BannerInner>
                  <MentBox>
                     <TitleText>
                        취업을 위한 첫 걸음, 팀프로젝트 여기여기 모여라!
                     </TitleText>
                     <DescText>
                        DeMoim 는 국비, 부트캠프를 하지 않고도 <br />
                        팀 프로젝트의 경험을 쌓고 싶은 다양한 분야의 사람들이 모여 <br />
                        안정적인 플랫폼 내에서 팀을 만들고,
                        팀원을 모아 자신의 경험을 쌓아 나갈수 있는<br />
                        팀 빌딩 플랫폼 입니다.
                     </DescText>
                     <ServiceBtn>
                        프로젝트 시작하기
                     </ServiceBtn>
                  </MentBox>
                  <ImgBox>
                     <BannerImg src={Team} />
                  </ImgBox>
               </BannerInner>
            </Container>
         </BannerBox>
         <Container>
            <TitleBox>
               <Title>
                  📢 프로젝트 팀원 모집
               </Title>
               <More onClick={() => history.push('/team')}>더보기 ></More>
            </TitleBox>
         </Container>
         <TeamList />
         <MiddleBox>
            <Container>
               <MakingBox>
                  <MakingMent>지금 바로 리더가 되어 팀을 모아보세요!</MakingMent>
                  <MakingBtn>팀 꾸리러 가기</MakingBtn>
               </MakingBox>
            </Container>
         </MiddleBox>
      </React.Fragment>
   )
}

export default Main


//배너 영역
const BannerBox = styled.div`
   width:100%;
   height: 415px;
   background: -webkit-linear-gradient( #F2F5FA, #ffffff);
   background: -moz-linear-gradient(#F2F5FA, #ffffff);
   background: -o-linear-gradient(#F2F5FA, #ffffff);
   background: linear-gradient(#F2F5FA, #ffffff);
   
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
      justify-content: space-between;
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
      
      font-size:0.7em;

      br{
         display: none;
      }
   }

   
`;

const ImgBox = styled.div`
   margin-top: -10px;
   

  @media ${props => props.theme.mobile}{
      margin:0px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`;

const BannerImg = styled.img`
   width: 100%;

@media ${props => props.theme.mobile}{
      width:70%;
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
      gap:10%;
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
      //font-size: 0.9em;
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
  //  font-size:1.1em;
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

//데톡 영역

