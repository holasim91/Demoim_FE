import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_EXHIBITION_COMMENT = "SET_EXHIBITION_COMMENT";
const ADD_EXHIBITION_COMMENT = "ADD_EXHIBITION_COMMENT";
const UPDATE_EXHIBITION_COMMENT = "UPDATE_EXHIBITION_COMMENT";
const DELETE_EXHIBITION_COMMENT = "DELETE_EXHIBITION_COMMENT";
const setExihibitionComment = createAction(
  SET_EXHIBITION_COMMENT,
  (comment_list) => ({
    comment_list,
  })
);

const addExihibitionComment = createAction(
  ADD_EXHIBITION_COMMENT,
  (comment_list) => ({
    comment_list,
  })
);
const updateExihibitionComment = createAction(
  UPDATE_EXHIBITION_COMMENT,
  (updated_comment, comment_id) => ({
    updated_comment,
    comment_id
  })
);
const deleteExihibitionComment = createAction(
  DELETE_EXHIBITION_COMMENT,
  (comment_id) => ({ comment_id })
);

const initialState = {
  exhibitionComments: [],
};

const exhibitionCommentAPI = `${config.api}/api/exhibition/comments`;

const deleteExhibitionCommentAPI = (post_id, comment_id) => {
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
        dispatch(deleteExihibitionComment( comment_id));
        history.push(`/exhibition/detail/${post_id}`);
      })
      .catch((e) => {
        console.error(e);
      });
  };
};


const updateExhibitionCommentAPI = (post_id,comment_id, comment) => {
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
      dispatch(updateExihibitionComment (res.data.comments, res.data.commentId));
      history.push(`/exhibition/detail/${post_id}`);
    });
  };
};


const getExihibitionCommentAPI = (id) => {
  return function (dispatch, getState, { history }) {
    axios(exhibitionCommentAPI, {
      params: {
        exhibition_id: id,
      },
    })
      .then((res) => {
        dispatch(setExihibitionComment(res.data));
      })
      .catch((e) => console.error(e));
  };
};

const addExhibitionCommentsAPI = (post_id, comment) => {
  const token = getCookie("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      header: {
        authorization: token,
      },
      url: exhibitionCommentAPI,
      params: {
        exhibition_id: post_id,
      },
      data: {
        comments: comment,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(addExihibitionComment(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionComments = action.payload.comment_list;
      }),
    [ADD_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionComments.push(action.payload.comment_list);
      }),
    [UPDATE_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const updated_idx = draft.exhibitionComments.findIndex(
          (comment) => comment.commentId === action.payload.comment_id
        );
        console.log(updated_idx)
        draft.exhibitionComments[updated_idx] = {
          ...draft.exhibitionComments[updated_idx],
          comments: action.payload.updated_comment,
        };
      }),
      [DELETE_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionComments = draft.exhibitionComments.filter(
          (p) => p.commentId !== action.payload.comment_id
        );
      }),

  },
  initialState
);

const actionCreators = {
  addExhibitionCommentsAPI,
  getExihibitionCommentAPI,
  updateExhibitionCommentAPI,
  deleteExhibitionCommentAPI
};

export { actionCreators };
