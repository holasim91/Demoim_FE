import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";

const ADD_SMALLTALK_COMMENT = "ADD_SMALLTALK_COMMENT";
const addComment = createAction(ADD_SMALLTALK_COMMENT, (id, comment_list) =>({id, comment_list}))
const initialState = {
  smallTalkComments:[],
  isLoading: false,
};

const smallTalkCommentAPI = `${config.api}/api/smalltalk/comments`;
const addSmallTalkCommentsAPI = (id) => {
  
  return function (dispatch, getState, { history }){
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
      dispatch(addComment(id, res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default handleActions(
  {

    [ADD_SMALLTALK_COMMENT]: (state, action) =>
    produce(state, (draft) => {
      draft.smallTalkComments.push({
        id: action.payload.id,
        comment: action.payload.comment_list,
      });
    }),


  }, initialState);
  
const actionCreators = {
  addSmallTalkCommentsAPI
};

export { actionCreators };
