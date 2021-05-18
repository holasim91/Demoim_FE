import React from 'react'
import styled, { css } from 'styled-components';
import { Container, MobileBar } from "../elements";
import { history } from "../redux/configStore";
import { useMediaQuery } from "react-responsive";
import Team from "../images/team.svg";
import De_icon from "../images/de_icon.svg";
import Planner_icon from "../images/planner_icon.svg";
import Teamwork from "../images/teamwork.svg";
import Project_img01 from "../images/project_img01.png"
import Project_img02 from "../images/project_img02.png"
import Project_img03 from "../images/project_img03.png"

const Service = () => {

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
                  <MarginMinusBox >
                    <Inner>
                      <M>서비스 소개</M>
                      <DescDiv>
                        <Summary>
                          Demoim은 <B>예비 개발자/디자이너/기획자</B>가 팀원을 모아
                        </Summary>
                        <Summary right>
                        자신의 경험을 쌓아 나갈 수 있는<B> 팀 빌딩 플랫폼</B>입니다.
                        </Summary>
                      </DescDiv>
                    </Inner>
                  </MarginMinusBox>
                </BannerInner>
                <Inner>
                    <GrayBox>
                      <Logo>
                        <span>De</span>
                        &nbsp;&nbsp;&nbsp; +  &nbsp;&nbsp;&nbsp;
                        moim
                      </Logo>
                    </GrayBox>
                </Inner>
                <DeExp>
                  <DeExp leftExp>
                    <P>
                      <span>De</span>signer<br/>
                      <span>De</span>veloper<br/>
                      기획자
                    </P>
                  </DeExp>
                  <DeExp middle >
                    <P>
                      들의 &nbsp; 모임
                    </P>
                  </DeExp>
                </DeExp>
            </Container>
      </BannerBox>
      <BlueBox>
            <Container>
                <DivBox>
                  <DescText>
                    많은 IT 기업들이 <br/>
                    <B>협업 능력</B>을 갖춘 인재를 원하고 있는 요즘,
                  </DescText>
                </DivBox>
                <DivBox rightFlex>
                  <ImgBox>
                    <BannerImg src={Team} />
                  </ImgBox>
                  <DescText>
                    취업을 위한 <Br/> <B>팀 프로젝트 경험</B>은 <br/>
                    이젠,<Br/> 필수가 되었습니다.
                  </DescText>
                </DivBox>
            </Container>
      </BlueBox>
      <WhiteBox>
            <Container>
              <Inner>
                <DescText>
                  <B>하지만 홀로 공부하는 사람들은<br/>
                  팀원을 어떻게 찾아야 할까요?</B>
                </DescText>
                <MobileMargin/>
                <DescText>
                  아직도 국비, 부트캠프의 시작을 기다리느라<br/>
                  <span>소중한 시간을 허비하고 계신가요?</span>
                </DescText>
              </Inner>
              <MarginBox/>
              <Inner>
                <HalfCircleBox>
                  <B>팀 프로젝트 전용 플랫폼<br/>
                  Demoim에서 하루 빨리 <Br/>팀원을 구해보세요!</B>
                </HalfCircleBox>
                <MarginBox/>
                <MarginBox/>
                    <Miv>
                      <P mobile2>
                        <StrongSpan>Now</StrongSpan> 
                      </P>
                      <MSpan> Demoim 에서는  지금 당장 시작 가능합니다.</MSpan>
                    </Miv>
                  
                    <div style={{margin:'25px'}}></div>
                    <Miv>
                      <P mobile2>
                        <StrongSpan>Free</StrongSpan>
                      </P>
                      <MSpan>  비용없이 팀 프로젝트를 경험할 수 있습니다.</MSpan>
                    </Miv>
                  
              </Inner>
              <MarginBox/>
              <MarginBox/>
          
            </Container>
      </WhiteBox>
      <BlueBox>
        <Inner>
          <PurpleRadiusBox>
                  Demoim은 이런 분들에게 적합해요!
          </PurpleRadiusBox>
        </Inner>


        <div style={{margin:'40px'}}></div>

        <ListBox>
            <WhoDesc>
              <ImgCircle src={Teamwork} alt="아이콘" />
            </WhoDesc>
            <WhoDescLine third>
                <div>
                  <Big mobile2>팀 프로젝트를 경험해보고 싶은 사람</Big>
                </div>
            </WhoDescLine>
        </ListBox>
        <ListBox>
            <WhoDesc>
              <ImgCircle src={De_icon} alt="아이콘" /> 
            </WhoDesc>
            <WhoDescLine twenty>
                <div>
                  <Big mobile2>
                    포트폴리오를 향상시키고 싶은 <br/>
                    예비 개발자 & 예비 디자이너
                  </Big>
                </div>
            </WhoDescLine>
        </ListBox>
        <ListBox>
            <WhoDesc>
              <ImgCircle src={Planner_icon} alt="아이콘" /> 
            </WhoDesc>
            <WhoDescLine thirdFive>
                <div>
                  <Big mobile2>예비 기획자들까지도 모두 환영!</Big>
                </div>
            </WhoDescLine>
        </ListBox>
        <MarginBox/>
      </BlueBox>
      <MarginBox/>
  
      <BannerBox>
        <Inner>
          <PurpleRadiusToolTip>
                  Demoim 100% 활용법
          </PurpleRadiusToolTip>
          <MarginBox/>
          <OneAndThreeTitle>
            ONE
            <br/>
          </OneAndThreeTitle>
          <FlexBox>
            <OneContentBox margin>
              <OneDetail>
                <M2>프로젝트를 만들어</M2>
                <OneP>
                  팀원을 모집해보고</OneP>
              </OneDetail>
            </OneContentBox>
            <ImgBox2 src = {Project_img01} alt="배너"/>
          </FlexBox>
        </Inner>
      </BannerBox>
      <MarginBox/>
      <MarginBox/>
      <BannerBox>
      <Inner>
          <MarginBox/>
          <TwoTitle>
            TWO
          </TwoTitle>
          <FlexBox two>
            <ImgBox2 src = {Project_img02} alt="배너" />
            <OneContentBox>
              <TwoDetail>
                <OneP two>
                  팀원도 되어
                </OneP>
                <B>협업의 경험을 쌓아보세요</B>
              </TwoDetail>
            </OneContentBox>
          </FlexBox>
        </Inner>
      </BannerBox>
      <MarginBox/>
      <BannerBox>
        <Inner>
            <MarginBox/>
       
            <OneAndThreeTitle>
              THREE
            </OneAndThreeTitle>
            <FlexBox three>
              <OneContentBox>
                <ThreeDetail>
                  <B>팀 프로젝트 공유를 통해</B>
                  <OneP three>
                    타 유저들과 소통하는 재미까지!</OneP>
                </ThreeDetail>
              </OneContentBox>
              <div style={{margin:' 0 0 0 10px'}} >
                <ImgBox3 three src = {Project_img03} alt="배너"/>
              </div>
            </FlexBox>
          </Inner>
         
      </BannerBox>
      <MarginBox/>
      <MarginBox/>
      <BlueBox>
        <FooterBox>
          <B>지금 바로 리더가 되어 팀을 모아보세요!</B>
          <Btn><B>팀 꾸리러 가기</B> </Btn>
        </FooterBox> 
      </BlueBox>
    </React.Fragment>
  )
}

export default Service


const PurpleRadiusBox = styled.div`
  position: relative;
  padding: 10px;
  top: -18px;
  background-color: #999cda;
  width:350px;
  margin: auto;
  color: white;
  font-weight: 550;
  border-radius:20px;
  @media ${props => props.theme.tablet}{
    
  }
  @media ${props => props.theme.mobile}{
    font-size: 2.5vw;
    text-align:center;
    margin-top:15px;
    width:60%;
 }
`;

const PurpleRadiusToolTip = styled.div`
  position: relative;
  padding: 10px;
  top: -18px;
  background-color: #999cda;
  width:220px;
  margin: auto;
  color: white;
  font-weight: 550;
  border-radius:20px;
  &:after {
    content: '';
    position: absolute;
    transform: rotate(180deg);
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: #999cda transparent;
    display: block;
    z-index: 1;
    top: 35px;
    left: 115px;
    }

    @media ${props => props.theme.mobile}{
      width:280px;
      height:40px;
      line-height:40px;
      top: -30px;
      font-size:23px;
      &:after {
        content: '';
        position: absolute;
        transform: rotate(180deg);
        border-style: solid;
        border-width: 0 10px 14px 10px;
        border-color: #999cda transparent;
        display: block;
        z-index: 1;
        top:60px;
        left: 140px;
        }
   }
`;

const ListBox = styled.div`
  display: flex;
  width:500px;
  margin: 10px auto;
  @media ${props => props.theme.tablet}{
    width: 550px;
  }
  @media ${props => props.theme.mobile}{
    width: 100%;
    margin: -20px;
    line-height:20px;
    display: flex;
    justify-content: center;
    gap:20px;
  }
`;

const ImgCircle = styled.img`
  width:100px;
  height:100px;
  border-radius: 100%;
  overflow: hidden;
  @media ${props => props.theme.mobile}{
    width: 90px;
    margin:;
  }
 
`;

const MarginBox = styled.div`
  height: 50px;
`;

const WhiteBox = styled.div`
  margin-bottom:80px
`;

const BannerBox = styled.div`
   width:100%;
   height: 415px;
   background: -webkit-linear-gradient( #ebf2ff, #ffffff);
   background: -moz-linear-gradient(#ebf2ff, #ffffff);
   background: -o-linear-gradient(#ebf2ff, #ffffff);
   background: linear-gradient(#ebf2ff, #ffffff);

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
     
   }
   @media ${props => props.theme.mobile}{
    padding: 0;
    margin:0;
   }
`;

const Inner = styled.div`
    text-align: center;
    margin-top: 80px;
    @media ${props => props.theme.mobile}{
      margin:80px 0 0 0;
      width: 100%;
    }
`;

const DescDiv = styled.div`
margin-top: 30px;
font-size: 20px;
letter-spacing: -0.5px;
line-height: 1.3em;
 span{
   background-color: #f2f5fa;
 }
@media ${props => props.theme.tablet}{
   widht: 300px;
}
@media ${props => props.theme.mobile}{
   width:100%;
   font-size:18px;
   margin: auto;
}
`;

const DescText = styled.p`
   margin-top: 30px;
   font-size: 20px;
   letter-spacing: -0.5px;
   line-height: 1.3em;
    span{
      background-color: #f2f5fa;
    }
   @media ${props => props.theme.tablet}{
      widht: 300px;
   }
   @media ${props => props.theme.mobile}{
      width:100%;
      font-size:18px;
      margin: auto;
   }
`;

const Br = styled.br`
   display:none;
   @media ${props => props.theme.mobile}{
    display:block;
 }

`;


const B = styled.b`
  font-size: 20px;
  font-weight:bold;
  @media ${props => props.theme.mobile}{
    font-size: 17px;
    font-weight:bold;
 }
`;

const M = styled.b`
   display:none;

  @media ${props => props.theme.mobile}{
    display:block;   
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 100px;

  }
`;

const Miv = styled.div`
text-align:left;
    display: flex;
    justify-content: center;
    width:100%
    margin:auto;
    gap: 10px;  
  
  @media ${props => props.theme.mobile}{
    text-align:left;
    display: flex;
    justify-content: center;
    width:100%
    margin:auto;
    gap: 10px;
    &nbsp{
      none;
    }
 }
`;

const MSpan = styled.span`
margin: 5px 0 0 20px; 
  @media ${props => props.theme.mobile}{
    text-align:left;
    margin: 5px 0 0 10px;
    width:50%;
  }
`;

const Big = styled.b`
  font-size: 20px;
  font-weight:500;
  @media ${props => props.theme.mobile}{
    font-size: 20px;
    ${props =>
      props.mobile2 &&
      css`
      font-size: 17px;
      margin: 50px 5px 5px 0 ;
      white-space: break-spaces;
      `}
  }
`;

const GrayBox = styled.div`
   width: 230px;
   height:40px;
   font-size: 20px;
   line-height:55px;
   margin:auto;
   padding: 5px;
   background-color: #f1f1f1;
   border-radius: 50px;
   border: solid 1px #f1f1f1;
   @media ${props => props.theme.mobile}{
    width: 230px;
    height:40px;
    font-size: 20px;
    line-height:55px;
    margin:auto;

  }
`;

const BlueBox = styled.div`
  background-color: #ebf2ff;  
  width: 100vw;
  height:auto;
  margin: 60px auto 100px ;
`;

const P = styled.b`
  color: ${props => props.theme.main_black};
  span{
    color:${props => props.theme.main_color};
  }
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;

  @media ${props => props.theme.mobile}{
    font-size: 18px;
    font-weight:bold;
    width:100%;
    text-align:left;
    ${props =>
      props.mobile2 &&
      css`
      width:20%;
      text-align:left;
      `}
 }
`;

const Logo = styled.p`
  ${props => props.theme.logo}
  font-size: 30px;
  color: ${props => props.theme.main_black};
  span{
    color:${props => props.theme.main_color};
  }
  @media ${props => props.theme.mobile}{
    
   
  }
`;

const ImgBox = styled.div`
   margin-top: -10px;
   

  @media ${props => props.theme.mobile}{
      
   }
`;

const BannerImg = styled.img`
   width: 100%;

@media ${props => props.theme.mobile}{
      width:90%;
   }
`;

const MarginMinusBox=styled.div`
  margin-top: -120px;
  @media ${props => props.theme.mobile}{
    margin-top: 20px;
  }
`;  

const MobileMargin=styled.div`
  display:none;
  @media ${props => props.theme.mobile}{
    display:block;
    margin-top: 50px;
  }
`;  



const Summary = styled.p`
  text-align:left;
  width:105%;
  margin: 0 13px;
  ${props =>
    props.right &&
    css`
      text-align:right;
    `}

  @media ${props => props.theme.mobile}{
    text-align:center;
    margin:auto;
    width: 100%;
    line-height:25px;
  }
`;

const DeExp = styled.div`
  text-align:center;  
  width: 240px; 
  margin: 30px auto;
  display: flex;
  ${props =>
    props.leftExp &&
    css`
      text-align: left;
      width:120px;
      margin: 0 13px;
    `},
    ${props =>
      props.middle &&
      css`
        text-align: left;
        width:120px;
        margin: auto;
    `},
`;

const DivBox =styled.div `
  text-align:left;
  width:60%; 
  margin: 10px auto;
  padding:10px;
  ${props =>
    props.rightFlex &&
    css`
      text-align: right;
      width:50%; 
      @media ${props => props.theme.tablet}{
        width:70%
      }
      margin: 10px auto;
      padding:10px;
      display:flex;
      justify-content:space-around;
  `}
  @media ${props => props.theme.mobile}{
    font-size: 5px;
    width:100%; 
    margin: 0;
    padding:10px;
  }

`;

const HalfCircleBox= styled.div`
  background-color:#d7d5ef; 
  width:450px; 
  padding:20px;
  margin: auto;
  line-height:25px;
  border-radius:50%;
  @media ${props => props.theme.mobile}{
    
    width:90%; 
    margin: 0;
    padding:20px;
  }
`;

const StrongSpan = styled.span`
  font-size:28px;
  font-weight:600;
  @media ${props => props.theme.mobile}{
  text-align: left;
  font-size:25px;
  font-weight:600;
  }
`;

const WhoDesc = styled.div`
  text-align: center;
  margin:0 30px 10px 50px;
  width:20%;
  @media ${props => props.theme.mobile}{
    text-align: left;
    margin:0;
    width:90px;
    }
`;

const WhoDescLine = styled.div`
  lineHeight: 30px;
  
  ${props =>
    props.third &&
    css`
    margin-top:30px;
  `}
  ${props =>
    props.thirdFive &&
    css`
    margin-top:35px;
  `}
  ${props =>
    props.twenty &&
    css`
    margin-top:20px;
  `}
  @media ${props => props.theme.mobile}{
    margin-top:30px;
    width: 30%;
 }
`;


const OneAndThreeTitle = styled.div`
  font-size:30px;
  font-weight:300;
  width:450px;
  margin:0 auto 40px;
  text-align:left;
  @media ${props => props.theme.mobile}{
    width:10%;
    text-align:left;
    margin: 25px 0 0 40px;
 }
`;
const TwoTitle = styled.div`
  font-size:30px;
  font-weight:300;
  width:490px;
  margin:0 auto 40px;
  text-align:right;
  @media ${props => props.theme.mobile}{
    width:70%;
    text-align:right;
    margin:auto;
    margin:50px auto 40px;
 }
`;

const FlexBox = styled.div`
  width:65%; 
  display:flex;
  margin:auto;
  justify-content:center;
  gap:20px;
  ${props =>
    props.three &&
    css`
    width:65%; 
    display:flex;
    margin:auto;
    justify-content:center;
    gap:5%;
  `}
  @media ${props => props.theme.mobile}{
    display:flex;
    width: 90%;
    margin: auto;
    justify-content:center;
    gap:0;
    
    ${props =>
      props.two &&
      css`
      gap:5%;
    `}
    
 }
`;

const OneContentBox = styled.div`
  width:35%; 
  ${props =>
    props.margin &&
    css`
    margin:0 0 50px 0;
  `}
  @media ${props => props.theme.mobile}{
    width:50%; 
    z-index: 10;
  }
`;

const OneDetail = styled.div`
  margin:50px 2% 0 30%;
  letter-spacing: 1.3px; 
  line-height:20px;
  text-align:center; 
  width:200px;
  @media ${props => props.theme.mobile}{
    font-size: 30px;
    width:100%; 
    margin:50px 2% 0 0;
    text-align:left; 
    z-index:10;
  }
`;  
const M2 = styled.div`
  margin: 10px 0 10px 0;
  font-size: 20px;
  font-weight:bold;
  @media ${props => props.theme.mobile}{
    font-size: 4vw;
    font-weight:bold;
    margin : 0px 0 10px 5px;
  }
`;  

const OneP = styled.p`
  background-color:#999cda;
  color:white;
  width:164px;
  text-align:center;
  margin:4px auto;
  padding:2px;
  font-size:20px;
  font-weight:500;
  ${props =>
    props.two &&
    css`
    width : 110px;
    margin : 50px 0 10px 48%;
  `}
  ${props =>
    props.three &&
    css`
    text-align:center;
    width: 300px;
    margin : 4px 20px 0 0;
  `}
  @media ${props => props.theme.mobile}{
    font-size: 4vw;
    width:75%;
    padding:2px;
    text-align:center;
    margin : 0px 0 10px 5px;
    ${props =>
      props.two &&
      css`
      font-size: 17px;
      width:80%;
      padding:3px;
      text-align:center;
      margin : 0px 0 10px 25px;
    `}
    ${props =>
      props.three &&
      css`
      text-align:center;
      width: 300px;
      margin:4px auto;
      padding:2px;
      font-size:20px;
      font-weight:500;
    `}
  }
`;

const TwoDetail = styled.div`
  margin:10px 0 0 30x;
  letter-spacing: 1.3px; 
  line-height:20px;
  text-align:right; 
  width:250px;
  @media ${props => props.theme.tablet}{
    width:200px;
  }
  @media ${props => props.theme.mobile}{
    width:150px;
  }
`;  

const ThreeDetail = styled.div`
  margin:50px 200px 0 10%;
  letter-spacing: 1.3px; 
  line-height:20px;
  text-align:left; 
  width:250px;
  z-index:10;
  @media ${props => props.theme.tablet}{
    margin:50px 500px 0 10%;
    z-index:10;
  }
  @media ${props => props.theme.mobile}{
    width:300px;
  }
`;  

const ImgBox2 = styled.img`
  width:300px;
  @media ${props => props.theme.mobile}{
    width:40%;
  }
  
`;

const ImgBox3 = styled.img`
  width : 350px; 
  z-index: 0;
  @media ${props => props.theme.tablet}{
    margin-left: 80px;
    width : 300px; 
  } 
  @media ${props => props.theme.mobile}{
    margin-left: -40px;
    width : 200px; 
    z-index: 0;
  } 
`;
const FooterBox = styled.div`
  text-align:center;
  background-color:#ebf2ff;
  height:130px;
  padding:10px;
  line-height:110px;
  margin:0 0 -100px;
  @media ${props => props.theme.mobile}{
    height:150px;
    position: relative;
    
  } 
`;


const Btn = styled.button`
  margin:50px; 
  border:none;
  width:150px; 
  height:40px;
  padding:10px;
  background-color:white;
  border-radius:25px;
  @media ${props => props.theme.mobile}{
    position: absolute;
    top: 100px;
    right: 115px;
    margin: 0; 
  } 
`;