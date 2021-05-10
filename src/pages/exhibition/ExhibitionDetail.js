import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ExhibitionComment } from "../../components";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import SubMenus from "../../components/SubMenus";
import { Container, Grid } from "../../elements";
import '../../css/editor.css';

const ExhibitionDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.exhibitionId;
  useEffect(() => {
    dispatch(exhibitionActions.getOneExihibitionAPI(Number(id)));
  }, [id]);

  const post = useSelector((state) => state.exhibition.exhibitionPostDetail);
  console.log(post);
  const ChangeTimeType = (time) => time.split("T")[0];

  if (!post) {
    return <>No DATA</>;
  }

  return (
    <>
      <SubMenus />

      <Container>
        <DetailWrapper>
          <Grid padding="100px 0 0 0" />

          <Title>{post.title}</Title>
          <UserInfo>
            {post.user.profileImage ? (
              <ProfileImage alt="profile" src={post.user.profileImage} />
            ) : (
              <ProfileImage
                alt="profile"
                src={
                  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
              />
            )}
            <TextBlock>
              <UserName>{post.user.nickname} 님</UserName>
              <PostDate>{ChangeTimeType(post.createAt)}</PostDate>
            </TextBlock>
          </UserInfo>
          <ExhibitionDetailContent>
            <ExhibitionDetailContentContainer dangerouslySetInnerHTML={{ __html: post.contents }} />
          </ExhibitionDetailContent>
          <ExhibitionComment />
        </DetailWrapper>
      </Container>
    </>
  );
};
const DetailWrapper = styled.div`
  width: 80%;
`;
const Title = styled.div`
  background-color: #f2f5fa;
  font-size: 22px;
  padding: 5px 0 5px 15px;
`;
const UserInfo = styled.div`
  margin-top: 67px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-right: 10px;
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
const ExhibitionDetailContentContainer = styled.div`
  padding: 35px;
`;
const ExhibitionDetailContent = styled.div`
  width: 100%;
  min-height: 485px;
  border: solid 1px #d8d8d8;
  line-height: 1.5;
`;

export default ExhibitionDetail;
