import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";

const SET_SMALLTALK_POST = "SET_SMALLTALK_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_SMALLTALK_POST, (post_list) => ({
  post_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


const initialState = {
  smallTalkPosts:[],
  page:1,
  isLoading: false,
};

const smallTalkAPI = 'http://54.180.142.197/api/smalltalk'
const getSmallTalkPostsAPI = (page, size) => {
  
  return function (dispatch, getState, { history }){
    dispatch(loading(true))
    axios(smallTalkAPI,{
        params:{
          page: page,
          size: size,
        }
      }
    )
    .then((res) => {
    
     dispatch(setPost(res.data))
     dispatch(loading(false))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default handleActions(
  {

    [SET_SMALLTALK_POST]: (state, action) =>
    produce(state, (draft) => {
      draft.smallTalkPosts=action.payload.post_list; 
      draft.is_loading = false;
    }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
    }),


  }, initialState);
  
const actionCreators = {
  setPost,
  getSmallTalkPostsAPI,
  loading
};

export { actionCreators };
