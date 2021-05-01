import React from "react";
import styled, { css } from "styled-components";
import { Image } from "./../../elements";

const ApplyCard = () => {
  return (
    <React.Fragment>
      <Grid>
        <Image size="75" />
        <InfoText>
          어피치
        </InfoText>
        <InfoText>
          프론트엔드
        </InfoText>
        <InfoText className="desc">
          안녕하세요! 열심히 포트폴리오를 만들고 있습니다 :)
        </InfoText>
      </Grid>
    </React.Fragment>
  )
}

export default ApplyCard;

const Flex = css`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  width:100%;
  min-height: 200px;
  padding:15px;
  ${Flex}
  align-items:center;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.1);
  gap:10px;
`;

const InfoText = styled.p`
  font-size:16px;

  &.desc{
    font-size:14px;
  }
`;