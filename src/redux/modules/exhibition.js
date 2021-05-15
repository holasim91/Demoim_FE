import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";
import {actionCreators as exhibitionCommentActions} from './exhibitionComment'
const SET_EXHIBITION_POST = "SET_EXHIBITION_POST";
const SET_NEXT_EXHIBITION_POST = "SET_NEXT_EXHIBITION_POST";
const SET_ONE_EXHIBITION_POST = "SET_ONE_EXHIBITION_POST";
const ADD_EXHIBITION_POST = "ADD_EXHIBITION_POST";
const EXHIBITION_LOADING = "EXHIBITION_LOADING";

const setExihibition = createAction(SET_EXHIBITION_POST, (post_list, next_page, init_more) => ({
  post_list,next_page, init_more
}));
const setNextPost = createAction(SET_NEXT_EXHIBITION_POST, (post_list, next_page, has_more) => ({
  post_list, next_page, has_more
}));

const setOneExihibition = createAction(SET_ONE_EXHIBITION_POST, (post) => ({
  post,
}));
const addExihibition = createAction(ADD_EXHIBITION_POST, (post) => ({
  post,
}));
const exihibitionLoading = createAction(EXHIBITION_LOADING, (is_loading) => ({
  is_loading,
}));

const initialState = {
  exhibitionPosts: [],
  exhibitionPostDetail: {},
  page: 1,
  hasMorePosts: true,
  exihibitionLoading: false,
};

// const exhibitionMockAPI = 'https://run.mocky.io/v3/927b3e00-e602-45a7-ba79-86fb41418e87'
const exhibitionAPI = `${config.api}/api/exhibition`;
const exhibitionDetailAPI = `${config.api}/api/exhibition/detail`;
const token = getCookie("token");

const deleteExihibitionAPI = (id) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: "DELETE",
      header: {
        authorization: token,
      },
      url: exhibitionDetailAPI,
      params:{
        exhibition_id:id
      }
    })
      .then((res) => {
        window.alert(res.data.msg)
        history.push(`/exhibition`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const editExihibitionAPI = (formdata, id) => {
  return function (dispatch, getState, { history }) {
    if (!formdata) {
      return false;
    }

    axios({
      method: "put",
      header: {
        authorization: token,
      },
      url: exhibitionDetailAPI,
      params:{
        exhibition_id:id
      },
      data: formdata,
    })
      .then((res) => {
        history.push(`/exhibition/detail/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const addExihibitionAPI = (formdata) => {
  return function (dispatch, getState, { history }) {
    if (!formdata) {
      return false;
    }

    axios({
      method: "post",
      header: {
        authorization: token,
      },
      url: exhibitionAPI,
      data: formdata,
    })
      .then((res) => {
        console.log(res.data)
        dispatch(addExihibition(res.data));
        history.push("/exhibition");
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
const getNextExihibitionPostsAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    axios(exhibitionAPI, {
      params: {
        page: page,
        size: size,
      },
    })
      .then((res) => {
        res.data.length === 6?
        dispatch(setNextPost(res.data, page+1, true))
        :dispatch(setNextPost(res.data, page, false))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getExihibitionAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    dispatch(exihibitionLoading(true));
    axios(exhibitionAPI, {
      params: {
        page: page,
        size: size,
      },
    })
      .then((res) => {
        const next = page + 1;
        dispatch(setExihibition(res.data,next, true));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getOneExihibitionAPI = (id) => {
  return function (dispatch, getState, { history }) {
    dispatch(exihibitionLoading(true));
    axios(exhibitionDetailAPI, {
      params: {
        exhibition_id: id,
      },
    })
      .then((res) => {
        dispatch(setOneExihibition(res.data));
        dispatch(exhibitionCommentActions.getExihibitionCommentAPI(res.data.exhibitionId))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [ADD_EXHIBITION_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionPosts.unshift(action.payload.post);
        draft.exihibitionLoading = false;
      }),
      [SET_NEXT_EXHIBITION_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionPosts = draft.exhibitionPosts.concat(action.payload.post_list)
        draft.page = action.payload.next_page
        draft.hasMorePosts = action.payload.has_more
      }),
  
    [SET_EXHIBITION_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionPosts = action.payload.post_list;
        draft.exihibitionLoading = false;
        draft.page = 1
        draft.hasMorePosts = action.payload.init_more
      }),
    [SET_ONE_EXHIBITION_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.exhibitionPostDetail = action.payload.post;
        draft.exihibitionLoading = false;
      }),
    [EXHIBITION_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.exihibitionLoading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setExihibition,
  getExihibitionAPI,
  getOneExihibitionAPI,
  addExihibitionAPI,
  editExihibitionAPI,
  deleteExihibitionAPI,
  exihibitionLoading,
  getNextExihibitionPostsAPI,
};

export { actionCreators };
