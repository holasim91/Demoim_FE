import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";

const SET_EXHIBITION_COMMENT = "SET_EXHIBITION_COMMENT";
const ADD_EXHIBITION_COMMENT = "ADD_EXHIBITION_COMMENT";

const setExihibitionComment = createAction(SET_EXHIBITION_COMMENT, (post_list) => ({
  post_list,
}));

const addExihibitionComment = createAction(ADD_EXHIBITION_COMMENT, (id, comment_list) => ({
  id,
  comment_list,
}));
const initialState = {
  exhibitionPostComments: [],
  isLoading: false,
};

const exhibitionCommentAPI = `${config.api}/api/exhibition/comments`;

const getExihibitionComment = (id) =>{
  return function(dispatch, getState, {history}){
    axios(exhibitionCommentAPI,{
      params:{
        exhibition_id: id
      }
    }).then((res)=>
      dispatch(setExihibitionComment(res.data))
    ).catch((e) => console.error(e))
  }
}

const addExhibitionCommentsAPI = (id) => {
  return function (dispatch, getState, { history }) {
    axios(exhibitionCommentAPI, {
      params: {
        exhibition_id: id,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(addExihibitionComment(id, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) =>{
        draft.exhibitionComments = action.payload.comment_list
      }),
    [ADD_EXHIBITION_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionComments.push({
          id: action.payload.id,
          comment: action.payload.comment_list,
        });
      }),
  },
  initialState
);

const actionCreators = {
  addExhibitionCommentsAPI,
};

export { actionCreators };
