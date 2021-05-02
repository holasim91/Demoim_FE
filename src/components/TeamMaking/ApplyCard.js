import React from "react";
import styled, { css } from "styled-components";
import { Image, Button } from "./../../elements";
import { useMediaQuery } from "react-responsive";

const ApplyCard = (props) => {

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  return (
    <React.Fragment>
      <Grid>
        {isMobile ? (<React.Fragment>
          <MobileUserInfoBox>

            <Image size="45" src={props.user.profileimage} />

            <UserInfo>
              <InfoText className="user">
                {props.user.nickname}<Position>{props.user.position}</Position>
              </InfoText>
              <InfoText className="desc">
                {props.user.desc}
              </InfoText>
            </UserInfo>
          </MobileUserInfoBox>
          <Line />
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
            <Button size="11" width="95px" padding="5px 0px">선택하기</Button>
          </MobileBtnBox>
        </React.Fragment>) : (<React.Fragment>
          <Image size="75" src={props.user.profileimage} />
          {/* 클릭시 해당 유저 페이지 이동 */}
          <UserInfoBpx>
            <InfoText className="user">
              {props.user.nickname}
            </InfoText>
          </UserInfoBpx>
          <UserInfoBpx>
            <InfoText className="position">
              {props.user.position}
            </InfoText>
          </UserInfoBpx>
          <UserInfoBpx>
            <InfoText className="desc intro">
              {props.user.desc.length > 75 ? props.user.desc.slice(0, 75) + "..." : props.user.desc}
            </InfoText>
          </UserInfoBpx>
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
          <SelectBtn>선택하기</SelectBtn>
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
  min-height: 200px;
  box-sizing:border-box;
  padding:35px; 
  ${Flex}
  align-items:center;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.1);
  gap:10px;

  @media ${props => props.theme.mobile}{
      align-items: flex-start;
      padding:15px;
      gap:1px;
   }

`;

const InfoText = styled.p`
  font-size:16px;

  &.user{
    cursor: pointer;
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
  }
  &.apply{
    margin:0px 0px 8px 3px;
    font-size:15px;
  }

  @media ${props => props.theme.mobile}{
    
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
  min-height: 80px;
  background-color: #F2F2F2;
  border-radius: 4px;
  padding:10px;
  box-sizing:border-box;
  font-size:14px;

  &.portfolio{
    min-height: 30px; 
  }

  @media ${props => props.theme.mobile}{
    min-height: auto;
    background-color: white;
  }
`;

const MsgMentBox = styled.div`
  margin-top: 15px;
`;

const SelectBtn = styled.button`
  width:70px;
  height: 70px;
  border-radius: 100%;
  border:1px solid ${props => props.theme.main_gray};
  background-color:${props => props.theme.main_gray};
  cursor: pointer;
  font-weight: bold;
  margin-top:20px;
  outline: none;
  transition: all .2s;

  &:hover{
    background-color: ${props => props.theme.button_purple};
    border:1px solid ${props => props.theme.button_purple};
    color:white;
  }
`;

const Position = styled.span`
  background-color: ${props => props.theme.button_purple};
  border-radius: 15px;
  font-size:13px;
  padding:0px 7px;
  margin-left:7px;
  color:white;
`;

//모바일 버전
const MobileUserInfoBox = styled.div`
  display: flex;
  gap:10px;
  width:100%;
`;
const UserInfo = styled.div`
  padding-top:10px;
`;

const Line = styled.div`
  width:100%;
  height: 1px;
  background-color: ${props => props.theme.main_gray};
  margin-top:7px;
`;

const MobileBtnBox = styled.div`
  align-self: flex-end;
`;
