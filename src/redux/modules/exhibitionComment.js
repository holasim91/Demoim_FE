import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_EXHIBITION_COMMENT = "SET_EXHIBITION_COMMENT";
const ADD_EXHIBITION_COMMENT = "ADD_EXHIBITION_COMMENT";

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
const initialState = {
  exhibitionComments: [],
};

const exhibitionCommentAPI = `${config.api}/api/exhibition/comments`;
const token = getCookie("token");

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
  },
  initialState
);

const actionCreators = {
  addExhibitionCommentsAPI,
  getExihibitionCommentAPI,
};

export { actionCreators };
