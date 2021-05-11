import React from "react";
import styled from "styled-components";

const ParticipationProjectCard = (props) => {
  return (
    <Grid>
      <Titlebox>
        [프로젝트] 채팅 사이트를 만들고 싶습니다!
        </Titlebox>
      <TeamBox>
        <TeamInfoBox>
          랄라랄라라라
        </TeamInfoBox>
        <MemberBox>

        </MemberBox>
      </TeamBox>
    </Grid>
  )
}

export default ParticipationProjectCard;

const Grid = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  gap:10px;
`;

const TeamBox = styled.div`
  width:100%;
  box-sizing:border-box;
  display: flex;
  gap:2%;
  padding:7px 25px 25px 25px;

  @media ${props => props.theme.tablet}{
    flex-direction: column;
    gap:0;
  }
`;

const Titlebox = styled.div`
  margin-bottom: 0px;
  font-weight: 500;
  padding-left: 10px;
`;

const TeamInfoBox = styled.div`
  height: 300px;
  width:60%;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding:15px;
  @media ${props => props.theme.tablet}{
    width:100%;
    margin-bottom: 10px;
  }
`;

const MemberBox = styled.div`
  height: 300px;
  width:40%;
  padding:15px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  @media ${props => props.theme.tablet}{
    width:100%;
  }
`;