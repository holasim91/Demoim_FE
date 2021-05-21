import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as exhibitionCommentActions } from "../../redux/modules/exhibitionComment";
import { ChangeTimeType } from "../../shared/Common";
import DefaultProfile from "../../images/def_profile.svg";
import Swal from "sweetalert2";
import { history } from "../../redux/configStore";

const ExhibitionComment = (props) => {
  const { post_id } = props;
  const { commentId, comments, user, createdAt } = props.comment;
  const { isLogin } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false); // 수정 모드 토글
  const [current, setCurrent] = useState(comments);
  const currentUser = useSelector((state) => state.user);
  const onToggleEdit = () => setIsEdit((state) => !state);
  const onUpdateTextArea = (e) => {
    setCurrent(e.target.value);
  };
  const onClickCommentUpdate = () => {
    dispatch(
      exhibitionCommentActions.updateExhibitionCommentAPI(
        post_id,
        commentId,
        current
      )
    );
    setIsEdit(false);
  };
  const onClickDeleteComment = () =>
    dispatch(
      exhibitionCommentActions.deleteExhibitionCommentAPI(post_id, commentId)
    );

  return (
    <CommentWrapper>
      <CommentHeader>
        <HeaderLeft>
          {user.profileImage ? (
            <ProfileImage alt="profile" src={user.profileImage} />
          ) : (
            <ProfileImage alt="profile" src={DefaultProfile} />
          )}
          <UserName
            onClick={() => {
              isLogin
                ? history.push(`/userpage/${user?.userId}`)
                : Swal.fire({
                    text: "더 자세한 정보는 로그인 후 확인 가능합니다😍",
                    icon: "warning",
                    confirmButtonColor: "#999cda",
                  });
            }}
          >
            {user.nickname}
          </UserName>
        </HeaderLeft>
        <TextBlock>
          <PostDate>{ChangeTimeType(createdAt)}</PostDate>
        </TextBlock>
      </CommentHeader>
      {isEdit ? (
        <UpdateTextArea
          value={current}
          onChange={onUpdateTextArea}
          maxLength="300"
        />
      ) : (
        <CommentContents>{comments}</CommentContents>
      )}

      <PostBoxBottom>
        {isEdit ? (
          <EditingToggle>
            <div className="editConfirm" onClick={onClickCommentUpdate}>
              수정하기
            </div>
            <div className="editCancel" onClick={onToggleEdit}>
              취소
            </div>
          </EditingToggle>
        ) : user.userId === currentUser?.user?.id ? (
          <EditToggle>
            <div className="editComment" onClick={onToggleEdit}>
              수정하기
            </div>
            <div className="deleteComment" onClick={onClickDeleteComment}>
              삭제
            </div>
          </EditToggle>
        ) : (
          ""
        )}
      </PostBoxBottom>
    </CommentWrapper>
  );
};

const EditingToggle = styled.div`
  display: flex;
  .editConfirm {
    padding-right: 40px;
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
  .editCancel {
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
`;

const EditToggle = styled.div`
  display: flex;
  .editComment {
    padding-right: 40px;
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
  .deleteComment {
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
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const PostBoxBottom = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  flex-flow: row-reverse;
  font-size: 13px;
  color: #7a7786;

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;

const CommentWrapper = styled.div`
  background-color: #f1f1f1;
  min-height: 80px;
  margin: 0 auto 10px auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 80%;
  position: relative;
  top: 2px;
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const UserName = styled.div`
  padding-bottom: 5px;
  cursor: pointer;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
`;
const CommentContents = styled.div`
  margin-top: 10px;
  margin-left: 50px;
`;
export default ExhibitionComment;
