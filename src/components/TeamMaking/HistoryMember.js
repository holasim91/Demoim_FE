import React from "react";
import styled from "styled-components";
import { Image } from "../../elements";
const HistoryMember = (props) => {

  const { nickname, profileImage, position } = props;

  return (
    <ParticipationMember>
      <div>
        <Image size="40" src={profileImage ? profileImage : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} />
      </div>
      <MemberInfoBox>
        <p className="nickname bold">{nickname}</p>
        <p className="position">{position}</p>
      </MemberInfoBox>
    </ParticipationMember>
  )
}

export default HistoryMember;

const ParticipationMember = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
`;

const MemberInfoBox = styled.div`
  line-height: 1.2em;
  & .position{
    font-size:12px;
    color:#7a7786;
  }

`;
