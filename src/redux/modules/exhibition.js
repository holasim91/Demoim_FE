import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";

const SET_POST = "SET_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({
  post_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


const initialState = {
  posts:[],
  page:1,
  isLoading: false,
};

const exhibitionMockAPI = 'https://run.mocky.io/v3/927b3e00-e602-45a7-ba79-86fb41418e87'
const exihibitionAPI = (page, size) => {
  
  return function (dispatch, getState, { history }){
    dispatch(loading(true))
    axios({
      method:'GET',
      url:exhibitionMockAPI,
      },{
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

    [SET_POST]: (state, action) =>
    produce(state, (draft) => {
      draft.posts=action.payload.post_list; 
      draft.is_loading = false;
    }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
    }),


  }, initialState);
  
const actionCreators = {
  setPost,
  exihibitionAPI,
  loading
};

export { actionCreators };
