import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SmallTalkComment from "./SmallTalkComment";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as smalltalkActions } from "../../redux/modules/smalltalk";
import { ChangeTimeType } from "../../shared/Common";
import DefaultProfile from "../../images/def_profile.svg";
import { history } from "../../redux/configStore";
import Swal from "sweetalert2";

const SmallTalkPost = (props) => {
  const dispatch = useDispatch();
  const { location } = props;
  const { contents, createdAt, user, smallTalkId, commentList } = props.data;
  const {isLogin} = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false); //댓글 창 토글
  const [isEdit, setIsEdit] = useState(false); // 수정 모드 토글
  const onClickToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const onClickUpdate = () => setIsEdit((state) => !state);
  const onDeletePost = () =>
    dispatch(smalltalkActions.deleteSmallTalkPostAPI(smallTalkId));
  const [current, setCurrent] = useState(contents);
  const onUpdatePost = () => {
    dispatch(
      smalltalkActions.updateSmallTalkPostAPI(smallTalkId, current)
    );
    setIsEdit(false);
  };
  const onUpdateTextArea = (e) => {
    setCurrent(e.target.value);
  };

  const currentUser = useSelector((state) => state.user);
  if (location === "/") {
    return (
      <PostBoxWrapperForMain>
        <PostBoxHeader>
          <HeaderLeft>
            {user.profileImage ? (
              <ProfileImage alt="profile" src={user.profileImage} />
            ) : (
              <ProfileImage alt="profile" src={DefaultProfile} />
            )}
            <UserName >{user.nickname}</UserName>
          </HeaderLeft>
          <HeaderRight>
            <PostDate>{ChangeTimeType(createdAt)}</PostDate>
          </HeaderRight>
        </PostBoxHeader>
        <PostContents value={contents}  readOnly/>
      </PostBoxWrapperForMain>
    );
  }

  if (location.split("/")[1] === "userpage") {
    return (
      <PostBoxWrapper>
        <PostBoxHeader>
          <HeaderLeft>
            {user.profileImage ? (
              <ProfileImage alt="profile" src={user.profileImage} />
            ) : (
              <ProfileImage
                alt="profile"
                src={
                  DefaultProfile
                }
              />
            )}
            <UserName>{user.nickname}</UserName>
          </HeaderLeft>
          <HeaderRight>
            <PostDate>{ChangeTimeType(createdAt)}</PostDate>
          </HeaderRight>
        </PostBoxHeader>
        <PostContents value={contents} readOnly />
      </PostBoxWrapper>
    );
  }

  return (
    <>
      <PostBoxWrapper>
        <PostBoxHeader>
          <HeaderLeft>
            {user.profileImage ? (
              <ProfileImage alt="profile" src={user.profileImage} />
            ) : (
              <ProfileImage
                alt="profile"
                src={
                  DefaultProfile
                }
              />
            )}
            {user.nickname ? (
              <UserName style={{cursor:'pointer'}} onClick={()=>{ 
                isLogin ? (
                  history.push(`/userpage/${user?.userId}`)
                  ) : (
                    Swal.fire({
                      text: '더 자세한 정보는 로그인 후 확인 가능합니다😍',
                      icon: 'warning',
                      confirmButtonColor: "#999cda",
                    })
                    )}}>{user.nickname}</UserName>
            ) : (
              <UserName>닉네임 없음</UserName>
            )}
          </HeaderLeft>
          <HeaderRight>
            <PostDate>{ChangeTimeType(createdAt)}</PostDate>
          </HeaderRight>
        </PostBoxHeader>
        {isEdit ? (
          <UpdateTextArea
            value={current}
            onChange={onUpdateTextArea}
            maxLength="300"
          />
        ) : (
          <PostContents value={contents} readOnly />
          )}
        {isEdit ? (
          <UpdatePostBoxBottom>
            <div className="updateCancel" onClick={onClickUpdate}>
              취소
            </div>
            <div className="updatePost" onClick={onUpdatePost}>
              수정하기
            </div>
          </UpdatePostBoxBottom>
        ) : (
          <PostBoxBottom>
            <CommentToggle onClick={onClickToggle}>
              {isOpen ? (
                <>
                  <AiFillCaretUp style={{ paddingRight: "5px", color:"#7a7786" }} />
                  댓글닫기
                </>
              ) : (
                <>
                  <AiFillCaretDown style={{ paddingRight: "5px", color:"#7a7786"  }} />
                  댓글보기
                </>
              )}
            </CommentToggle>

            {currentUser.isLogin &&
              currentUser.user.nickname === user.nickname ? (
              <EditToggle>
                <div className="editPost" onClick={onClickUpdate}>
                  수정하기
                </div>
                <div className="deletePost" onClick={onDeletePost}>
                  삭제
                </div>
              </EditToggle>
            ) : (
              ""
            )}
          </PostBoxBottom>
        )}
      </PostBoxWrapper>
      {isOpen ? (
        <SmallTalkComment
          profileImg={user.profileImage}
          comments={commentList}
          post_id={smallTalkId}
          className="comment"
        />
      ) : (
        ""
      )}
    </>
  );
};

const CommentToggle = styled.div`
  cursor: pointer;
  :hover {
    color: #ccc;
  }
`;

const EditToggle = styled.div`
  display: flex;
  .editPost {
    padding-right: 40px;
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }

  .deletePost {
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
`;

const UpdateTextArea = styled.textarea`
  border: 1px solid #c9c9d9;
  font-size: 0.875rem;
  width: 100%;
  min-height: 60px;
  resize: none;
  :focus {
    outline: none;
  }
`;
const UpdatePostBoxBottom = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 13px;
  color:#7a7786;
  .updateCancel {
    padding-left: 20px;
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
  .updatePost {
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
  @media (max-width: 375px) {
    font-size: 11px;
  }
`;
const PostBoxBottom = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  padding-left: 60px;
  color:#7a7786;
  @media (max-width: 425px) {
    font-size: 11px;

  }
  @media (max-width: 375px) {
    padding-left: 40px;
  }
`;
const PostBoxWrapperForMain = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 80px;
  margin: 20px auto 0 auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 75%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  @media ${(props) => props.theme.tablet} {
    /* width: 550px; */
    height: 156px;
    max-width: 584px;
  }
  @media (max-width: 425px) {
    width: 75%;
  }
  @media (max-width: 375px) {
    height: 125px;
  }
`;
const PostBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 80px;
  margin: 20px auto 0 auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 55%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  @media ${(props) => props.theme.tablet} {
    /* width: 550px; */
    height: 156px;
    max-width: 584px;
  }
  @media (max-width: 425px) {
    width: 85%;
    height: auto;
  } 
  @media (max-width: 375px) {
    height: 125px;
  }
`;

const PostBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  @media (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;
const UserName = styled.div`
  padding-left: 10px;
  @media (max-width: 375px) {
    font-size: 13px;
  }
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const PostContents = styled.textarea`
  /* margin-top: 20px; */
  min-height: 50px;
  padding-left: 60px;
  resize: none;
  border: none;
  background-color:#f1f1f1;
  width: 86%;
  margin-bottom: 10px;
  :focus {
  outline: none;
}
  @media (max-width: 375px) {
    font-size: 12px;
    padding-left: 42px;
  }
`;
export default SmallTalkPost;
