import React from "react";
import styled from "styled-components";
import { Container } from "../elements";
import nodata from "../images/nodata.svg";
import { history } from "../redux/configStore";

const NoData = () => {
  const current = history.location.pathname.split("/")[1];
  const messages = {
    smalltalk: "대신 가장 먼저 유저들과 소통할 수 있는 기회에요!",
    exhibition: "대신 가장 먼저 프로젝트를 자랑할 수 있는 기회에요!",
    team: "대신 가장 먼저 팀을 만들수 있는 기회에요!",
    nodata: "대신 가장 먼저 유저들과 소통할 수 있는 기회에요!",
  };
  return (
    <Container>
      <ImageWrapper>
        <NoDataImg src={nodata} />
      </ImageWrapper>

      <NoDataMsg>
        <p>아직 글이 없어요..</p>
        <p>{messages[current]}</p>
      </NoDataMsg>
    </Container>
  );
};

const NoDataMsg = styled.div`
  font-size: 25px;
  text-align: center;
  margin: 40px 0 300px 0;
  font-weight: 500;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 110px auto 0 auto;
`;
const NoDataImg = styled.img`
  width: 100%;
  margin: 10px auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 10px auto;
  }
`;

export default NoData;
