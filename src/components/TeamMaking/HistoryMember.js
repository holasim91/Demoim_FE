import React from "react";
import styled from "styled-components";
import { Image } from "../../elements";
import DefaultProfile from "../../images/def_profile.svg";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { history } from "../../redux/configStore";

const HistoryMember = (props) => {

  const { nickname, profileImage, position,  userId } = props;
  const isLogin = useSelector((state) => state.user.isLogin);
  //console.log("참여자1", isLogin, "유저아이디", userId)
  

  return (
    <ParticipationMember>
      <div>
        <Image size="40" src={profileImage ? profileImage : DefaultProfile} />
      </div>
      <MemberInfoBox onClick={() => {
      isLogin ? (
        history.push(`/userpage/${userId}`)) : (console.log("참여자3", `${userId}`))
      }}>
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
  :hover{
    cursor:pointer;
  }

`;
