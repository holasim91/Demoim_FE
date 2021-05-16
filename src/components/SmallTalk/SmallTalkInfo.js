import React from "react";
import styled from "styled-components";

const SmallTalkInfo = () => {
  return (
    <SmallTalkInfoWrapper>
      <DetalkTitle>
        프로젝트 관련 <Point>small talk</Point>
      </DetalkTitle>
      <DatalkSubTitle>
        다른 유저들과 보다 더 자유롭게 소통해보세요!
      </DatalkSubTitle>
    </SmallTalkInfoWrapper>
  );
};
const SmallTalkInfoWrapper = styled.div`
  margin: 81px auto 71px 70px;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }

`;
const DetalkTitle = styled.p`
  font-size: 1.37em;
  font-weight: bold;
  padding-bottom: 20px;

  @media ${(props) => props.theme.mobile} {
    font-size: 3.5vw;
  }
`;

const Point = styled.span`
  color: ${(props) => props.theme.main_color};
`;

const DatalkSubTitle = styled.p`
  font-size: 0.93em;
  font-weight: 300;

  @media ${(props) => props.theme.mobile} {
    font-size: 2.5vw;
  }
`;

export default SmallTalkInfo;
