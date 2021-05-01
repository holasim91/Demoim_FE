import React from "react";
import styled from "styled-components";
import { Container, Grid } from "../elements";
import SubMenus from "../components/SubMenus";
import ExhibitionList from "../components/Exhibition/ExhibitionList";

const Exhibition = (props) => {
  return (
    <>
    <SubMenus currentPath = {props.location.pathname.split('/')[1]}/>
    
      <Container>
        <Grid padding="100px 0 0 0" />
        <ExhibitionBoxWrapper>
          <ExhibitionList />
        </ExhibitionBoxWrapper>
      </Container>
    </>
  );
};

const ExhibitionBoxWrapper = styled.div`
  margin:30px auto 0 auto;
  width:100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 2%;
  grid-row-gap: 27px;

  @media ${props => props.theme.tablet}{
  grid-template-columns: repeat(2,minmax(0,1fr));
  }

  @media ${props => props.theme.mobile}{
    grid-template-columns: repeat(1,1fr);
   grid-gap:0%;
 }
`;


export default Exhibition;
