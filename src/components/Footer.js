import React from "react"
import styled from 'styled-components'
import { Container, Text } from "../elements";
import { useMediaQuery } from "react-responsive"

const Footer = () => {


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
          {isPc && <React.Fragment>
            <Text>© 2021 Project Demoim.</Text>
            <Text margin='3px 0px 0px 0px'>All rights reserved.</Text>
          </React.Fragment>}
          {isMobile && <React.Fragment>
            <Text size="2vw">© 2021 Project Demoim.</Text>
            <Text size="2vw" margin='3px 0px 0px 0px'>All rights reserved.</Text>
          </React.Fragment>}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  /* margin: 424px 0 0; */
  /* padding: 0px 100px 29px 70px; */
  background-color: #f1f1f1;
`;

const Logo = styled.p`
  ${props => props.theme.logo}
  color: ${props => props.theme.main_black};

  span{
    color:${props => props.theme.main_color};
  }

  @media ${props => props.theme.mobile}{
    font-size: 2em;
  }
`;

const Content = styled.div`
  width:80%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding-left:10px;
  margin: 47px 0px 0px 41px;
`