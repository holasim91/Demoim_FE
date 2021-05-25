import React from "react"
import styled from 'styled-components'
import { Container, } from "../elements";
import { useMediaQuery } from "react-responsive"
import { history } from "../redux/configStore";

const Footer = () => {

  const NotionURL = "" //팀소개노션링크
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });

  const isPc = useMediaQuery({
    query: "(min-width: 769px)"
  });

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo>
            <span>De</span>moim
          </Logo>
          {isPc && <TextContainer>
            <SubText>© 2021 Project Demoim.</SubText>
            <SubText padding="0 0 0 12px" onClick={() => {
                      history.push("/policy");
                    }}><span>개인정보처리</span></SubText>
            <SubText padding="0 0 0 12px"><span>팀원소개</span></SubText>
            <SubText padding="0 0 0 12px">All rights reserved.</SubText>
          </TextContainer>}
          {isMobile && <React.Fragment>
          <TextContainer>
          <Text onClick={() => {history.push("/policy");
          }}><span>개인정보처리</span></Text>
          <Text padding="0 0 0 12px" >
            <Atag href={NotionURL} target="#" rel="noreferrer noopener">
            <span>팀원소개</span>
            </Atag>
          </Text>
        </TextContainer>
          <TextContainer margin="0 0 10px 0">
            <Text>© 2021 Project Demoim.</Text>
            <Text padding="0 0 0 12px">All rights reserved.</Text>
          </TextContainer>
        </React.Fragment>
          }
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 107px;
  /* margin: 424px 0 0; */
  /* padding: 0px 100px 29px 70px; */
  background-color: #f1f1f1;
`;

const Logo = styled.p`
  font-size: 24px;
  ${props => props.theme.logo}
  color: ${props => props.theme.main_black};

  span{
    color:${props => props.theme.main_color};
  }

  @media ${props => props.theme.tablet}{
    font-size: 24px;
  }

  @media ${props => props.theme.mobile}{
    font-size: 24px;
  }
`;

const Content = styled.div`
  width:80%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-left:10px;
  margin: 28px 0px 0px 20px;
`;

const TextContainer = styled.div`
  display: flex;
  //justify-content: space-between;
  width:500px;
  box-sizing:border-box;
  margin: ${(props) => props.margin};
  @media ${props => props.theme.tablet}{
    width:430px;
    font-size: 12px;
  }

  @media ${props => props.theme.mobile}{
    width:100%;
    font-size: 12px;
    margin:5px auto;
  }
`;

const SubText = styled.p`
  display:inline-block;
  font-size: 13px;
  text-align: left;
  &span{
    cursor:pointer;
  }
  padding: ${(props) => props.padding};
  @media ${props => props.theme.tablet}{
    font-size: 13px;
  }

  @media ${props => props.theme.mobile}{
    font-size: 12px;
  }
  @media (max-width: 420px){
    font-size: 12px;
  }
`;

const Text = styled.p`
  display:inline-block;
  font-size: 13px;
  text-align: left;
  &span{
    cursor:pointer;
  }
  padding: ${(props) => props.padding};
  @media ${props => props.theme.tablet}{
    font-size: 12px;
  }

  @media ${props => props.theme.mobile}{
    font-size: 12px;
  }
  @media (max-width: 420px){
    font-size: 12px;
  }
`;

const Atag= styled.a`
  text-decoration:none;

`;