import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configStore";
const ExhibitionPost = (props) => {
  const { data } = props;
  const styles = {
    thumbnail: data.thumbnail,
  }
  return (
    <>
      <ExhibitionPostBox
        onClick={() => {
          history.push(`/exhibition/detail/${props.data.id}`)
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
          <ThumbNail  {...styles}/>
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
  width: 100%;
  box-sizing:border-box;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.main_gray};
  margin-bottom: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: translate(0px,-3px);
  }
  @media ${props => props.theme.mobile}{
    min-height: 400px;
    margin: auto;
    margin-bottom: 10px;
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
  font-size:15px;
`;
const PostDate = styled.div`
color: #7a7786;
font-size:15px;

`;
const ThumbNail = styled.div`
  width:100%;
  height: 200px;
  background: url('${(props) => props.thumbnail}') no-repeat;
  background-size: cover;
  margin: 0 auto;
  @media ${props => props.theme.mobile}{
    height: 246px;
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
`;
export default ExhibitionPost;
