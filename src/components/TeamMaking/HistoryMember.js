import React from "react";
import styled from "styled-components";
import { Image } from "../../elements";
import DefaultProfile from "../../images/def_profile.svg";

const HistoryMember = (props) => {

  const { nickname, profileImage, position } = props;

  return (
    <ParticipationMember>
      <div>
        <Image size="40" src={profileImage ? profileImage : DefaultProfile} />
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
