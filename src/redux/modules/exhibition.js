import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_EXHIBITION_POST = "SET_EXHIBITION_POST";
const EXHIBITION_LOADING = "EXHIBITION_LOADING";

const setPost = createAction(SET_EXHIBITION_POST, (post_list) => ({
  post_list,
}));
const exihibitionLoading = createAction(EXHIBITION_LOADING, (is_loading) => ({ is_loading }));


const initialState = {
  exhibitionPosts: [],
  page: 1,
  exihibitionLoading: false,
};

// const exhibitionMockAPI = 'https://run.mocky.io/v3/927b3e00-e602-45a7-ba79-86fb41418e87'
const exhibitionAPI =  `${config.api}/api/exhibition`
const token = getCookie("token");
const getExihibitionAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    dispatch(exihibitionLoading(true))
    axios(exhibitionAPI, {
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
const getOneExihibitionAPI = (id) => {
  return function (dispatch, getState, { history }) {
    dispatch(exihibitionLoading(true))
    axios(exhibitionAPI, {
      params: {
        exhibition_id: id
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
        draft.exihibitionLoading = false
      }),
    [EXHIBITION_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.exihibitionLoading = action.payload.is_loading;
      }),


  }, initialState);

const actionCreators = {
  setPost,
  getExihibitionAPI,
  getOneExihibitionAPI,
  exihibitionLoading
};

export { actionCreators };
