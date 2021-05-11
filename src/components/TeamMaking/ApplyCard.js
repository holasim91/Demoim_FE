import React from "react";
import styled, { css } from "styled-components";
import { Image } from "./../../elements";
import { useMediaQuery } from "react-responsive";
import { history } from "../../redux/configStore";
import { useDispatch } from 'react-redux';
import { actionCreators as applyActions } from "../../redux/modules/apply";

const ApplyCard = (props) => {

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  const dispatch = useDispatch();
  const ChoiceTeamMember = () => {

    if (!props.applyId) {
      return false;
    }
    dispatch(applyActions.choiceApplyAPI(props.applyId));
  }


  return (
    <React.Fragment>
      <Grid>
        {isMobile ? (<React.Fragment>
          <MobileUserInfoBox>

            <Image size="45" src={(props.responseUser.profileImage) ? props.responseUser.profileImage : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} />

            <UserInfo>
              <InfoText className="user">
                {props.responseUser?.nickname}<Position>{props.responseUser?.position}</Position>
              </InfoText>
              <InfoText className="desc">
                {props.responseUser?.description}
              </InfoText>
            </UserInfo>
          </MobileUserInfoBox>
          <MobileMsgBox >
            <MsgMentBox>
              <InfoText className="apply">
                메세지
            </InfoText>
              <MsgBox>
                {props.message}
              </MsgBox>
            </MsgMentBox>
            <MsgMentBox>
              <InfoText className="apply">
                포트폴리오
            </InfoText>
              <MsgBox>
                {props.portfolio}
              </MsgBox>
            </MsgMentBox>
            <MobileBtnBox>
              <SelectBtn>선택하기</SelectBtn>
            </MobileBtnBox>
          </MobileMsgBox>
        </React.Fragment>) : (<React.Fragment>
          <Image size="75" src={(props.responseUser.profileImage) ? props.responseUser.profileImage : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} />
          {/* 클릭시 해당 유저 페이지 이동 */}
          <InfoBox>
            <UserInfoBpx>
              <InfoText className="user" onClick={() => {
                history.push(`/userpage/${props.responseUser?.userid}`);
              }}>
                {props.responseUser?.nickname}
              </InfoText>
            </UserInfoBpx>
            <UserInfoBpx>
              <InfoText className="position">
                {props.responseUser?.position}
              </InfoText>
            </UserInfoBpx>
            <UserInfoBpx>
              <InfoText className="desc intro">
                {props.responseUser?.description.length > 75 ? props.responseUser?.description.slice(0, 75) + "..." : props.responseUser?.description}
              </InfoText>
            </UserInfoBpx>
          </InfoBox>
          <InfoBox className="msg">
            <ApplyBox>
              <MsgMentBox>
                <InfoText className="apply">
                  메세지
            </InfoText>
                <MsgBox>
                  {props.message}
                </MsgBox>
              </MsgMentBox>
              <MsgMentBox>
                <InfoText className="apply">
                  포트폴리오
            </InfoText>
                <MsgBox className="portfolio">
                  {props.portfolio}
                </MsgBox>
              </MsgMentBox>
            </ApplyBox>
            <BtnBox>
              <SelectBtn onClick={ChoiceTeamMember}>선택하기</SelectBtn>
            </BtnBox>
          </InfoBox>
        </React.Fragment>)}
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
  padding-top:35px;
  min-height: 200px;
  box-sizing:border-box;
  ${Flex}
  align-items:center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color:#ffffff;
  gap:10px;
  border-radius: 5px;
  
  @media ${props => props.theme.mobile}{
      align-items: flex-start;
      gap:1px;
      padding:0px;
}

`;

const InfoBox = styled.div`
  padding:0px 35px 0px 35px;
  width:100%;
  box-sizing:border-box;
  
  &.msg{
    padding-top:15px;
    padding-bottom: 25px;
    background-color: #e5ecf7;
    border-top:1px solid #d8d8d8;
    flex:2;
  }
`;

const InfoText = styled.p`
  font-size:16px;

  &.user{
    cursor: pointer;
    font-size:19px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  &.desc{
    font-size:14px;
    margin-top:5px;
  }
  &.position{
    background-color: ${props => props.theme.button_purple};
    padding:4px 9px;
    border-radius: 20px;
    color:white;
    display: inline-block;
    font-size:0.8em;
    margin-bottom: 11px;
  }
  &.apply{
    margin:0px 0px 8px 3px;
    font-size:15px;
    font-weight: 600;
  }

  @media ${props => props.theme.mobile}{
    
    &.user{
      font-weight:600 ;
      font-size:16px;
    }

    &.desc{
      margin-top:8px;
      line-height: 1.2em;
      text-align:left;
    }
    &.apply{
    margin:0px 0px 0px 3px;
    font-size:15px;
    }
}
`;

const ApplyBox = styled.div`
  width:100%;
`;

const UserInfoBpx = styled.div`
  width:100%;
  text-align:center;
  
  & .intro{
    height: 40px;
    line-height: 1.1em;
  }
`;

const MsgBox = styled.div`
  width:100%;
  border-radius: 4px;
  min-height: 60px;
  padding:10px;
  box-sizing:border-box;
  font-size:14px;
  overflow:hidden;
  word-wrap:break-word;
  word-break:break-all;
  line-height: 1.4em;
  &.portfolio{
    min-height: 30px; 
  }

  @media ${props => props.theme.mobile}{
    min-height: auto;
  }
`;

const MsgMentBox = styled.div`
  margin-top: 15px;
`;

const SelectBtn = styled.button`
  
  border-radius: 9px;
  border:2px solid rgba(122, 119, 134, 0.5);
  padding:4px 9px;
  background-color:#ffffff;
  cursor: pointer;
  font-weight: bold;
  margin-top:20px;
  outline: none;
  transition: all .2s;

  &:hover{
    background-color: ${props => props.theme.button_purple};
    border:2px solid ${props => props.theme.button_purple};
    color:white;
  }

  @media ${props => props.theme.mobile}{
    margin-top:0px;
  }

`;

const BtnBox = styled.div`
  width:100%;
  text-align: center;
`;

const Position = styled.span`
  background-color: ${props => props.theme.button_purple};
  border-radius: 15px;
  font-size:13px;
  padding:0px 7px;
  margin-left:7px;
  color:white;
  font-weight: 400;
`;

//모바일 버전
const MobileUserInfoBox = styled.div`
  display: flex;
  gap:10px;
  width:100%;
  padding:15px;
  box-sizing: border-box;
`;
const UserInfo = styled.div`
  padding-top:10px;
`;



const MobileBtnBox = styled.div`
  width:100%;
  text-align:right;
`;

const MobileMsgBox = styled.div`
  background-color: #e5ecf7;
  width:100%;
  padding:15px;
  box-sizing:border-box;
  border-top:1px solid #d8d8d8;
`;