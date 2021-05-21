import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";
import Swal from "sweetalert2";

const SET_SMALLTALK_POST = "SET_SMALLTALK_POST"; //최초 데이터 가져오기
const SET_NEXT_SMALLTALK_POST = "SET_NEXT_SMALLTALK_POST"; // 무한스크롤을 위한 데이터 가져오기
const ADD_SMALLTALK_POST = "ADD_SMALLTALK_POST"; // 게시글 추가
const DELETE_SMALLTALK_POST = "DELETE_SMALLTALK_POST"; // 게시글 삭제
const UPDATE_SMALLTALK_POST = "UPDATE_SMALLTALK_POST"; // 게시글 수정
const ADD_SMALLTALK_COMMENT = "ADD_SMALLTALK_COMMENT"; // 댓글 추가
const DELETE_SMALLTALK_COMMENT = "DELETE_SMALLTALK_COMMENT"; // 댓글 삭제
const UPDATE_SMALLTALK_COMMENT = "UPDATE_SMALLTALK_COMMENT"; // 댓글 수정
const LOADING = "LOADING"; // 로딩

const setPost = createAction(SET_SMALLTALK_POST, (post_list, next_page, init_more) => ({
  post_list, next_page, init_more
})); // 최초 게시글을 불러오는 액션
const setNextPost = createAction(SET_NEXT_SMALLTALK_POST, (post_list, next_page, has_more) => ({
  post_list, next_page, has_more
})); // 일정 스크롤을 넘길때 다음 게시물을 부르는 액션
const addPost = createAction(ADD_SMALLTALK_POST, (post_list) => ({
  post_list,
})); // 게시물 추가
const deletePost = createAction(DELETE_SMALLTALK_POST, (post_id) => ({
  post_id,
}));
const updatePost = createAction(
  UPDATE_SMALLTALK_POST,
  (updated_contents, post_id) => ({ updated_contents, post_id })
);
const addComment = createAction(ADD_SMALLTALK_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));
const deleteComment = createAction(
  DELETE_SMALLTALK_COMMENT,
  (post_id, comment_id) => ({ post_id, comment_id })
);
const updateComment = createAction(
  UPDATE_SMALLTALK_COMMENT,
  (post_id, comment_id, updated_contents) => ({
    post_id,
    comment_id,
    updated_contents,
  })
);

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  smallTalkPosts: [],
  page: 1,
  hasMorePosts: true,
  isLoading: false,
};
const smallTalkAPI = `${config.api}/api/smalltalk`;


const updateSmallTalkCommentAPI = (post_id, comment_id, comment) => {
  const token = getCookie("token");

  return function (dispatch, getState, { history }) {
    axios({
      method: "PUT",
      headers: {
        authorization: token,
      },
      url: "http://54.180.142.197/api/update/comments",
      params: { comment_id: Number(comment_id) },
      data: {
        comments: comment,
      },
    }).then((res) => {
      dispatch(updateComment(post_id, res.data.commentId, res.data.comments));
      history.push("/smalltalk");
    });
  };
};

const deleteSmallTalkCommentAPI = (post_id, comment_id) => {
  const token = getCookie("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: "http://54.180.142.197/api/delete/comments",
      params: { comment_id: Number(comment_id) },
    })
      .then((res) => {
        dispatch(deleteComment(post_id, comment_id));
        history.push("/smalltalk");
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

const addSmallTalkCommentAPI = (comment, post_id) => {
  const token = getCookie("token");

  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI + `/comments`,
      params: { smalltalk_id: Number(post_id) },
      data: {
        comments: comment,
      },
    })
      .then((res) => {
        dispatch(addComment(post_id, res.data));
      })
      .catch((e) => console.error(e));
  };
};

const updateSmallTalkPostAPI = (id, contents) => {
  const token = getCookie("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "PUT",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI + "/detail",
      params: { smalltalk_id: Number(id) },
      data: {
        contents: contents,
      },
    })
      .then((res) => {
        dispatch(updatePost(res.data.contents, res.data.smallTalkId));
        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const deleteSmallTalkPostAPI = (id) => {
  const token = getCookie("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI + "/detail",
      params: { smalltalk_id: Number(id) },
    })
      .then((res) => {
        dispatch(deletePost(id));
        Swal.fire({
          text: "삭제 성공!",
          confirmButtonColor: "#999cda",
        })

        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const addSmallTalkPostAPI = (contents) => {
  const token = getCookie("token");
  return function (dispatch, getState, { history }) {
    // dispatch(loading(true));

    axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI,
      data: { contents: contents },
    })
      .then((res) => {
        dispatch(addPost(res.data));
        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getSmallTalkPostsAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios(smallTalkAPI, {
      params: {
        page: page,
        size: size,
      },
    })
      .then((res) => {
        const next = page + 1;
        dispatch(setPost(res.data, next, true));
        dispatch(loading(false));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const getNextSmallTalkPostsAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    axios(smallTalkAPI, {
      params: {
        page: page,
        size: size,
      },
    })
      .then((res) => {
        res.data.length === 6?
        dispatch(setNextPost(res.data, page+1, true))
        :dispatch(setNextPost(res.data, page, false))
        dispatch(loading(false));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export default handleActions(
  {
    [SET_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts = action.payload.post_list
        draft.page = action.payload.next_page
        draft.hasMorePosts = action.payload.init_more
      }),
    [SET_NEXT_SMALLTALK_POST]: (state, action) =>
    produce(state, (draft) => {
      draft.smallTalkPosts = draft.smallTalkPosts.concat(action.payload.post_list)
      draft.page = action.payload.next_page
      draft.hasMorePosts = action.payload.has_more
    }),

    [ADD_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts.unshift(action.payload.post_list);
      }),
    [DELETE_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts = draft.smallTalkPosts.filter(
          (p) => p.smallTalkId !== action.payload.post_id
        );
      }),
    [UPDATE_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        const current_id = action.payload.post_id;
        const updated_idx = draft.smallTalkPosts.findIndex(
          (v) => v.smallTalkId === current_id
        );
        draft.smallTalkPosts[updated_idx] = {
          ...draft.smallTalkPosts[updated_idx],
          contents: action.payload.updated_contents,
        };
      }),
    [ADD_SMALLTALK_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const current_id = action.payload.post_id;
        const target_idx = draft.smallTalkPosts.findIndex(
          (v) => v.smallTalkId === current_id
        );
        draft.smallTalkPosts[target_idx].commentList.push(
          action.payload.comment
        );
      }),
    [DELETE_SMALLTALK_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const current_id = action.payload.post_id;
        const target_idx = draft.smallTalkPosts.findIndex(
          (v) => v.smallTalkId === current_id
        );
        draft.smallTalkPosts[target_idx].commentList = draft.smallTalkPosts[
          target_idx
        ].commentList.filter(
          (comment) => comment.commentId !== action.payload.comment_id
        );
      }),
    [UPDATE_SMALLTALK_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const current_id = action.payload.post_id; // 댓글을 달려는 글의 id 
        const target_idx = draft.smallTalkPosts.findIndex(
          (v) => v.smallTalkId === current_id
        ); // 해당 아이디가 몇 번째 글인지
        const target_comment = draft.smallTalkPosts[
          target_idx
        ].commentList.findIndex(
          (v) => v.commentId === action.payload.comment_id
        ); // 
        draft.smallTalkPosts[target_idx].commentList[target_comment] = {
          ...draft.smallTalkPosts[target_idx].commentList[target_comment],
          comments: action.payload.updated_contents,
        };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  getSmallTalkPostsAPI,
  getNextSmallTalkPostsAPI,
  addSmallTalkPostAPI,
  deleteSmallTalkPostAPI,
  updateSmallTalkPostAPI,
  addSmallTalkCommentAPI,
  deleteSmallTalkCommentAPI,
  updateSmallTalkCommentAPI,
  loading,
};

export { actionCreators };
