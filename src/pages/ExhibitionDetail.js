import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Grid } from "../elements";

const ExhibitionDetail = (props) => {
  const id = props.match.params.exhibitionId;
  const post = useSelector((state) => state.exhibition.posts).find(
    (v) => v.id === id
  );
  return (
    <>
      <Container>
        <Grid padding="100px 0 0 0" />

        <ExhibitionDetailHeader>
          <Title>{post.title}</Title>
          <HeaderRight>
            <ProfileImage alt="profile" src={post.User[0].profile_img} />
            <TextBlock>
              <UserName>{post.User[0].username}</UserName>
              <PostDate>{post.createdAt}</PostDate>
            </TextBlock>
          </HeaderRight>
        </ExhibitionDetailHeader>
        <ExhibitionDetailContent>{post.contents}</ExhibitionDetailContent>
      </Container>
    </>
  );
};
const ExhibitionDetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const Title = styled.div`
  font-size: 48px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.div`
  padding-bottom: 5px;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
`;

const ExhibitionDetailContent = styled.div`
  width: 100%;
  min-height: 695px;
  border: 1px solid;
  line-height: 1.5;

`;

export default ExhibitionDetail;
