import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";

const SET_EXHIBITION_POST = "SET_EXHIBITION_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_EXHIBITION_POST, (post_list) => ({
  post_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


const initialState = {
  exhibitionPosts: [],
  page: 1,
  isLoading: false,
};

const exhibitionMockAPI = 'https://run.mocky.io/v3/927b3e00-e602-45a7-ba79-86fb41418e87'
const exihibitionAPI = (page, size) => {

  return function (dispatch, getState, { history }) {
    dispatch(loading(true))
    axios({
      method: 'GET',
      url: exhibitionMockAPI,
    }, {
      params: {
        page: page,
        size: size,
      }
    }
    )
      .then((res) => {

        dispatch(setPost(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default handleActions(
  {

    [SET_EXHIBITION_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionPosts = action.payload.post_list;
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
