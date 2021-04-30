import React, { useState } from "react";
import styled from "styled-components";
import ExhibitionPost from "../components/ExhibitionPost";
import { Container, Grid } from "../elements";
import { history } from "../redux/configStore";
import DummyExhibition from "../shared/DummyExhibition.json";
import Pagenation from "../shared/Pagenation";
const Exhibition = () => {
  const [page, setPage] = useState(1); //현재페이지, 1부터 시작

  return (
    <>
      <Container>
        <Grid padding="100px 0 0 0" />
        <ExhibitionBoxWrapper>
          {DummyExhibition.data.map((dummy) => (
            <ExhibitionPost data={dummy} key={dummy.id} onClick={()=>history.push(`/detail/${dummy.id}`)} />
          ))}
        </ExhibitionBoxWrapper>
        <PagenationWrapper>
        <Pagenation size={6} currentPage={page} totalPage={51}/>
        </PagenationWrapper>
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

const PagenationWrapper = styled.div`
 padding: 30px 0 20px 0;
 @media ${props => props.theme.mobile}{
    display: none;
 }

`

export default Exhibition;
