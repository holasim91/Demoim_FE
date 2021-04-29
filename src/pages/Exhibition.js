import React, { useState } from "react";
import styled from "styled-components";
import ExhibitionPost from "../components/ExhibitionPost";
import { Container, Grid } from "../elements";
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
            <ExhibitionPost data={dummy} key={dummy.id} />
          ))}
        </ExhibitionBoxWrapper>
        <div style={{padding:'30px 0 20px 0'}}>
        <Pagenation size={8} currentPage={page}/>
        </div>
      </Container>
    </>
  );
};

const ExhibitionBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Exhibition;
