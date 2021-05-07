import { createAction, createActions, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";

const LOADING = "LOADING";

const SET_SMALLTALK_COMMENT = "SET_SMALLTALK_COMMENT";
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const setComment = createAction(SET_SMALLTALK_COMMENT, (id, comment_list) =>({id, comment_list}))
const initialState = {
  smallTalkComments:[],
  isLoading: false,
};

const smallTalkCommentAPI = `${config.api}/api/smalltalk/comments`;
const getSmallTalkCommentsAPI = (id) => {
  
  return function (dispatch, getState, { history }){
    dispatch(loading(true))
    console.log('댓글 커몬')
    axios(
      smallTalkCommentAPI
      ,{
        params:{
          smalltalk_id: id,
        }
      }
    )
    .then((res) => {
      console.log(res)
      dispatch(setComment(id, res.data))
     dispatch(loading(false))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default handleActions(
  {

    [SET_SMALLTALK_COMMENT]: (state, action) =>
    produce(state, (draft) => {
      draft.smallTalkComments.push({
        id: action.payload.id,
        comment: action.payload.comment_list,
      });
    }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
    }),


  }, initialState);
  
const actionCreators = {
  getSmallTalkCommentsAPI,
  loading
};

export { actionCreators };
