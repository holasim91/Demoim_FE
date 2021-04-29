import React from "react";
import styled from "styled-components";
const ExhibitionPost = (props) => {
  const { data } = props;
  return (
    <>
      <ExhibitionPostBox
        onClick={() => {
          console.log(props.data.id);
        }}
      >
        <ExhibitionPostBoxContainer>
          <PostHeader>
            <HeaderLeft>
              <ProfileImage alt="profile" src={data.User[0].profile_img} />
              <UserName>{data.User[0].username}</UserName>
            </HeaderLeft>
            <PostDate>{data.createdAt}</PostDate>
          </PostHeader>
          <ThumbNail alt="thumbnail" src={data.thumbnail} />
          <Title>{data.title}</Title>
          <Content>
            {data.contents.length > 140
              ? data.contents.slice(0, 140) + "..."
              : data.contents}
          </Content>
        </ExhibitionPostBoxContainer>
      </ExhibitionPostBox>
    </>
  );
};

const ExhibitionPostBox = styled.div`
  width: 515px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.main_gray};
  margin-bottom: 10px;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: #C4C4C4;
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
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
const UserName = styled.div`
  margin-left: 5px;
`;
const PostDate = styled.div``;
const ThumbNail = styled.img`
  width: 100%;
  height: 200px;
`;
const Title = styled.div`
  font-size: 25px;
  margin-top: 10px;
`;
const Content = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
export default ExhibitionPost;
