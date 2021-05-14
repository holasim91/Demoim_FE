import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configStore";
import { ChangeTimeType } from "../../shared/Common";
import DefaultProfile from "../../images/def_profile.svg";

const ExhibitionPost = (props) => {
  const { data } = props;
  const styles = {
    thumbnail: data.thumbnail,
  };
  const removeHtmlTag = (sentence) => sentence.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <ExhibitionPostBox
        onClick={() => {
          history.push(`/exhibition/detail/${props.data.exhibitionId}`);
        }}
      >
        <ExhibitionPostBoxContainer>
          <PostHeader>
            <HeaderLeft>
              {data.user.profileImg ? (
                <ProfileImage alt="profile" src={data.user.profileImg} />
              ) : (
                <ProfileImage alt="profile" src={DefaultProfile} />
              )}
              <UserName>{data.user.nickname}</UserName>
            </HeaderLeft>
            <PostDate>{ChangeTimeType(data.createAt)}</PostDate>
          </PostHeader>
          <ThumbNail {...styles} />
          <Title>{data.title}</Title>
          <Content>
            {removeHtmlTag(data.contents).length > 140
              ? removeHtmlTag(data.contents).slice(0, 140) + "..."
              : removeHtmlTag(data.contents)}
          </Content>
        </ExhibitionPostBoxContainer>
      </ExhibitionPostBox>
    </>
  );
};

const ExhibitionPostBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.main_gray};
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: translate(0px, -3px);
  }
  @media ${(props) => props.theme.mobile} {
    min-height: 400px;
    margin: auto;
    margin-bottom: 20px;
  }

  @media (max-width:420px){
    min-height: 300px;
  }
`;

const ExhibitionPostBoxContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;
const UserName = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
`;
const ThumbNail = styled.div`
  width: 100%;
  height: 200px;
  background: url("${(props) => props.thumbnail}") no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    height: 246px;
  }

    @media (max-width:420px){
    height: 140px;
  }
`;
const Title = styled.div`
  font-size: 25px;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 12px;
  margin-top: 10px;
  line-height: 1.5;
  color:#7a7786;
`;
export default ExhibitionPost;
