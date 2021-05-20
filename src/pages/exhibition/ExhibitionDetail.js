import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ExhibitionComment } from "../../components";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import SubMenus from "../../components/SubMenus";
import { Container, Grid } from "../../elements";
import "../../css/editor.css";
import { history } from "../../redux/configStore";
import Spinner from "../../shared/Spinner";
import ExhibitionCommentWrite from "../../components/Exhibition/ExhibitionCommentWrite";
import { ChangeTimeType } from "../../shared/Common";
import DefaultProfile from "../../images/def_profile.svg";
import Swal from "sweetalert2";

const ExhibitionDetail = (props) => {
  const dispatch = useDispatch();
  const id = Number(props.match.params.exhibitionId);
  const {isLogin} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(exhibitionActions.getOneExihibitionAPI(id));
  }, [dispatch, id]);
  const currentUser = useSelector((state) => state.user.user);
  const post = useSelector((state) => state.exhibition.exhibitionPostDetail);
  const comments = useSelector(
    (state) => state.exhibitionComment.exhibitionComments
  );
  const isLoading = useSelector((state) => state.exhibition.exihibitionLoading);
  const onEditExhibition = () => history.push(`/exhibition/write/${id}`);
  const onDeleteExhibition = () =>
    dispatch(exhibitionActions.deleteExihibitionAPI(Number(id)));
  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
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
            {post?.user?.profileImage ? (
              <ProfileImage alt="profile" src={post.user.profileImage} />
            ) : (
              <ProfileImage alt="profile" src={DefaultProfile} />
            )}
            <TextBlock>
              <UserName onClick={()=>{ 
                isLogin ? (
                  history.push(`/userpage/${post.user?.userId}`)
                  ) : (
                    Swal.fire({
                      text: '더 자세한 정보는 로그인 후 확인 가능합니다😍',
                      icon: 'warning',
                      confirmButtonColor: "#999cda",
                    })
                    )}}>{post?.user?.nickname} 님</UserName>
              <PostDate>{ChangeTimeType(post?.createAt)}</PostDate>
            </TextBlock>
          </UserInfo>
          {currentUser?.id === post?.user?.userId ? (
            <EditBtnWrapper>
              <WriteBtn onClick={onDeleteExhibition}>삭제</WriteBtn>
              <WriteBtn onClick={onEditExhibition}>수정</WriteBtn>
            </EditBtnWrapper>
          ) : (
            ""
          )}
          <ExhibitionDetailContent>
            <ExhibitionDetailContentContainer
              dangerouslySetInnerHTML={{ __html: post?.contents }}
            />
          </ExhibitionDetailContent>

          <ExhibitionCommentWrite post_id={post.exhibitionId} />
          {comments.map((comment) => (
            <ExhibitionComment
              key={comment.commentId}
              comment={comment}
              post_id={id}
            />
          ))}
        </DetailWrapper>
      </Container>
    </>
  );
};
const EditBtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
`;
const WriteBtn = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  padding: 5px 0px;
  color: #683fee;
  font-size: 0.81em;
  cursor: pointer;
  font-size: 15px;
  outline: none;
  margin: 0px 20px 10px 0px;
  font-weight: 600;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.9em;
  }

  @media (max-width: 380px) {
    font-size: 0.7em;
  }
`;

const DetailWrapper = styled.div`
  width: 80%;
  margin: 0 auto 100px auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }

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
  cursor:pointer;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
`;
const ExhibitionDetailContentContainer = styled.div`
  padding: 35px;

  & img{
    max-width:70%;
  }
  & p{
    line-height: 1.3em;
  }
  & h1,h2,h3{
    line-height: 1.5em;
  }
  @media (max-width:420px){
  
    & p,ol,ul{
      font-size:0.9em;
      line-height: 1.3em;
    }
  }
`;
const ExhibitionDetailContent = styled.div`
  width: 100%;
  min-height: 485px;
  border: solid 1px #d8d8d8;
  line-height: 1.5;
  @media ${(props) => props.theme.mobile} {
    min-height: 285px;
  }

`;

export default ExhibitionDetail;
