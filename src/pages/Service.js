import React from 'react'
import styled, { css } from 'styled-components';
import { Container } from "../elements";
import Team from "../images/team.svg";
import De_icon from "../images/de_icon.svg";
import Planner_icon from "../images/planner_icon.svg";
import Teamwork from "../images/teamwork.svg";
import Project_img01 from "../images/project_img01.png"
import Project_img02 from "../images/project_img02.png"
import Project_img03 from "../images/project_img03.png"

const Service = () => {

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
                          <span style={{color: '#683FEE', fontWeight:'600'}}> De</span>moim은  <B>개발자/디자이너/기획자</B>가<Br/> 팀원을 모아 <br/>
                          자신의 경험을 쌓아 나갈 수 있는 <Br/><B> 팀 빌딩 플랫폼</B>입니다.
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
                    <BannerImg src={Team} alt="배너" />
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
          <FlexBox>
            <OneContentBox>
              <OneDetail>
                <OneTitleBox>
                  ONE
                </OneTitleBox>
                <M1>프로젝트를 만들어</M1>
                <OneP>
                  팀원을 모집해보고</OneP>
              </OneDetail>
            </OneContentBox>
            <ImgBox1 src = {Project_img01} alt="배너"/>
          </FlexBox>
        </Inner>
      </BannerBox>
      <MarginBox/>
      <MarginBox/>
      <BannerBox>
      <Inner>
          <MarginBox/>
          <FlexBox>
            <ImgBox2 src = {Project_img02} alt="배너"/>
            <TwoContentBox>
              <OneDetail>
                <TwoTitleBox>
                  TWO
                </TwoTitleBox>
                <M2>팀원도 되어</M2>
                <TwoP>
                  협업의 경험을 쌓아보세요</TwoP>
              </OneDetail>
            </TwoContentBox>
            
          </FlexBox>
        </Inner>
      </BannerBox>
      <MarginBox/>
      <BannerBox>
        <Inner>
          <MarginBox/>
          <MarginBox/>
          <FlexBox>
            <ThreeContentBox>
              <OneDetail>
                <OneTitleBox>
                  THREE
                </OneTitleBox>
                <M3>팀 프로젝트 공유를 통해</M3>
                <ThreeP>
                  다른 사람들과 소통하는 재미까지!</ThreeP>
              </OneDetail>
            </ThreeContentBox>
            <ImgBox3 src = {Project_img03} alt="배너"/>
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
  @media ${props => props.theme.mobile}{
    font-size: 2.5vw;
    text-align: center;
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
  box-sizing: border-box;
  @media ${props => props.theme.tablet}{
    width: 550px;
  }
  @media ${props => props.theme.mobile}{
    width: 100%;
    margin: 0 0 0 0px;
    line-height:20px;
    display: flex;
    justify-content: center;
    gap:20px;
    box-sizing: border-box;
  }
  @media (max-width: 420px){ 
    font-size:12px;
    margin: 10px 0 0 0px;
    width: 100%;
    box-sizing: border-box;
  }
  @media (max-width: 375px){ 
    font-size:10px;
    margin: 10px 0 0 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ImgCircle = styled.img`
  width:100px;
  height:100px;
  border-radius: 100%;
  overflow: hidden;
  @media ${props => props.theme.mobile}{
    width: 90px;
  }
  @media (max-width: 375px){ 
    margin: 0 0 0 10px;
  }
`;

const MarginBox = styled.div`
  height: 50px;
`;

const WhiteBox = styled.div`
  margin-bottom:80px;
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
   width: 300px;
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
      margin: 25px auto;
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
    width:100%;
    margin:auto;
    gap: 10px;  
  
  @media ${props => props.theme.mobile}{
    text-align:left;
    display: flex;
    justify-content: center;
    width:100%;
    margin:auto;
    gap: 10px;
    &nbsp{
      display: none;
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
      font-size: 15px;
      margin: 50px 5px 5px 0 ;
      white-space: break-spaces;
      `}
  }

  @media (max-width: 375px){
    font-size: 15px; 
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
  width: 100%;
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
`;

const ImgBox = styled.div`
   margin-top: -10px;
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
  text-align:center;
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
    `}
    ${props =>
      props.middle &&
      css`
        text-align: left;
        width:120px;
        margin: auto;
    `}
`;

const DivBox =styled.div`
  text-align:left;
  width: 60%; 
  margin: 10px auto;
  padding:10px;
  ${props =>
    props.rightFlex &&
    css`
      text-align: right;
      width: 50%; 
      @media ${props => props.theme.tablet}{
        width:70%
      }
      margin: 10px auto;
      padding:10px;
      display:flex;
      justify-content: space-around;
  `}
  @media ${props => props.theme.mobile}{
    font-size: 5px;
    width:100%; 
    margin: 0;
    padding:10px;
  }
`;

const HalfCircleBox = styled.div`
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
    margin:0 0 0 20%;
    width:20%;
  }

  @media (max-width: 375px){
    margin:0 15px 0 20px;
  }
  @media (max-width: 414px){
    margin: 0 15px 0 13px;
  }
`;

const WhoDescLine = styled.div`
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
    font-size: 10px; 
    margin: 40px 0 0 -11px;
    width: 63%;
 }
 @media (max-width: 375px){
    font-size: 10px; 
    margin: 40px 0 0 13px;
    width: 63%;
  }
`;


const M1 = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  z-index:10;
`;  
const M2 = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: right;
  @media (max-width: 500px){
      font-size: 20px;
      font-weight: 500;
      text-align: right;
    }
`;  
const M3 = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  z-index:10;
`;  

const OneP = styled.p`
  background-color: #999cda;
  font-size: 17px;
  font-weight: 500;
  padding:5px;
  color: white;
  text-align: left;
  z-index:10;
  @media ${props => props.theme.mobile}{
    background-color: #999cda;
    font-size: 17px;
    font-weight: 500;
    padding:5px;
    color: white;
    text-align: left;
    z-index:10;
    }

    @media (max-width: 500px){
      background-color: #999cda;
    font-size: 17px;
    font-weight: 500;
    padding:5px;
    color: white;
    text-align: left;
    z-index:10;
    width:150px;
    }
`;

const TwoP = styled.p`
  background-color: #999cda;
  font-size: 17px;
  font-weight: 500;
  padding:5px;
  color: white;
  text-align: left;
  z-index:10;
  @media (max-width: 500px){
    background-color: #999cda;
    font-size: 17px;
    font-weight: 500;
    padding:5px;
    color: white;
    text-align: left;
    z-index:10;
    width: 180px;
  }
`;

const ThreeP = styled.p`
  background-color: #999cda;
  font-size: 17px;
  font-weight: 500;
  padding:5px;
  color: white;
  text-align: left;
  z-index:10;
  @media ${props => props.theme.mobile}{
    background-color: #999cda;
    font-size: 17px;
    font-weight: 500;
    padding:5px;
    color: white;
    text-align: left;
    z-index:10;
    }

    @media (max-width: 500px){
      background-color: #999cda;
    font-size: 17px;
    font-weight: 500;
    padding:5px;
    color: white;
    text-align: left;
    z-index:10;
    width:250px;
    }
`;

const FlexBox = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  margin: 50px 0 0 0;
  gap: 5%;

  @media ${props => props.theme.mobile}{
    width:90%;
    display:inline-flexbox;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    box-sizing: border-box;
    }

    @media (max-width: 500px){
    width:90%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    box-sizing: border-box;
    }
`;

const OneTitleBox = styled.div`
    text-align: left;
    font-size: 40px;
    font-weight: 300;
    margin-bottom:30px;
    z-index:10;
    @media ${props => props.theme.tablet}{
      text-align: left;
      font-size: 40px;
      font-weight: 300;
      margin-bottom:30px;
    }
    @media (max-width: 420px){ 
      text-align: left;
      font-size: 30px;
      font-weight: 300;
      margin-bottom:30px;
    }
    @media (max-width: 375px){ 
      text-align: left;
      font-size: 30px;
      font-weight: 300;
      margin-bottom:30px;
    }

`;

const TwoTitleBox = styled.div`
    text-align: right;
    font-size: 40px;
    font-weight: 300;
    margin-bottom:30px;
    @media ${props => props.theme.tablet}{
      text-align: right;
      font-size: 40px;
      font-weight: 300;
      margin-bottom:30px;
    }
    @media ${props => props.theme.mobile}{
      text-align: right;
      font-size: 30px;
      font-weight: 300;
      margin-bottom:30px;
      
    }
`;



const OneContentBox = styled.div`
   @media (max-width: 500px){
      position: relative;
      left: 50px;
    }
    @media (max-width: 370px){
      position: relative;
      left: 70px;
    }
`;
const TwoContentBox = styled.div`
    @media (max-width: 500px){
      position: relative;
      margin-right: 100px;
    }
`;
const ThreeContentBox = styled.div`
   @media (max-width: 500px){
      position: relative;
      left: 100px;
    }
    @media (max-width: 370px){
      position: relative;
      left: 130px;
    }
`;

const OneDetail = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: left;
  gap: 8px;
  z-index:10;
`;  

const ImgBox1 = styled.img`
    width: 300px;
    height: 350px;
    position: relative;
    top: -80px;

    @media ${props => props.theme.mobile}{
    width: 200px;
    height: 250px;
    position: relative;
    top: -30px;
    right:-30px;
    z-index:0;
    }

    @media (max-width: 500px){
      width: 200px;
      height: 250px;
      position: relative;
      top: -30px;
      margin-right: 50px;
      z-index:0;
    }
    @media (max-width: 370px){
      width: 200px;
      height: 250px;
      position: relative;
      top: -30px;
      margin-right: 70px;
      z-index:0;
    }
`;
const ImgBox2 = styled.img`
    width: 200px;
    height: 170px;
    position: relative;
    top: 0px;
    @media (max-width: 500px){
      width: 200px;
      height: 170px;
      position: relative;
      top: 0px;
      left: 80px;
    }
`;

const ImgBox3 = styled.img`
    width: 300px;
    height: 350px;
    position: relative;
    top: -40px;
    @media ${props => props.theme.mobile}{
      width: 200px;
      height: 250px;
      position: relative;
      top: 0px;
      z-index:0;
    }

    @media (max-width: 500px){
      width: 200px;
      height: 250px;
      position: relative;
      top: -30px;
      margin-right: 100px;
      z-index:0;
    }
    @media (max-width: 370px){
      width: 200px;
      height: 250px;
      position: relative;
      top: -30px;
      margin-right: 100px;
      z-index:0;
    }
`;



const FooterBox = styled.div`
  text-align:center;
  background-color:#ebf2ff;
  height:130px;
  padding:10px;
  line-height:130px;
  margin:0 0 -100px;
  @media ${props => props.theme.mobile}{
    height:150px;
    display: flex;
    flex-direction: column;
    margin:0 0 -100px;
  } 
`;

const Btn = styled.button`
  margin:50px; 
  border:none;
  width:160px; 
  height:40px;
  line-height:10px;
  padding:10px;
  background-color:white;
  border-radius:25px;
  @media ${props => props.theme.mobile}{
    margin: -25px auto 0 auto; 
  } 
`;