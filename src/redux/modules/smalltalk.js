import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";

const SET_SMALLTALK_POST = "SET_SMALLTALK_POST";
const ADD_SMALLTALK_POST = "ADD_SMALLTALK_POST";
const DELETE_SMALLTALK_POST = "DELETE_SMALLTALK_POST";
const UPDATE_SMALLTALK_POST = "UPDATE_SMALLTALK_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_SMALLTALK_POST, (post_list) => ({
  post_list,
}));
const addPost = createAction(ADD_SMALLTALK_POST, (post_list) => ({
  post_list,
}));
const deletePost = createAction(DELETE_SMALLTALK_POST, (post_id) =>({post_id}))
const updatePost = createAction(UPDATE_SMALLTALK_POST, (updated_contents, post_id) =>({updated_contents, post_id}))

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  smallTalkPosts: [],
  page: 1,
  isLoading: false,
};
const smallTalkAPI = `${config.api}/api/smalltalk`;

const updateSmallTalkPostAPI = (id, contents, token) =>{
  return function (dispatch, getState, { history }) {
    axios({
      method: "PUT",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI+'/detail',
      params: { smalltalk_id: Number(id) },
      data:{
        contents:contents
      }
    })
      .then((res) => {
        console.log('updated DB',res)
        dispatch(updatePost(res.data.contents, res.data.id))
        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
}

const deleteSmallTalkPostAPI = (id, token) =>{
  return function (dispatch, getState, { history }) {
    axios({
      method: "DELETE",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI+'/detail',
      params: { smalltalk_id: Number(id) },
    })
      .then((res) => {
        dispatch(deletePost(id))
        window.alert(res.data.msg)
        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };

}

const addSmallTalkPostAPI = (contents, token) => {
  return function (dispatch, getState, { history }) {
    // dispatch(loading(true));

    axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: smallTalkAPI,
      data: { contents: contents },
    })
      .then((res) => {
        dispatch(addPost(res.data))
        history.push("/smalltalk");
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getSmallTalkPostsAPI = (page, size) => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios(smallTalkAPI, {
      params: {
        page: page,
        size: size,
      },
    })
      .then((res) => {
        dispatch(setPost(res.data));
        dispatch(loading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts = action.payload.post_list;
      }),
    [ADD_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts.unshift(action.payload.post_list);
      }),
    [DELETE_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.smallTalkPosts = draft.smallTalkPosts.filter(
          (p) => p.id !== action.payload.post_id
        );
      }),
    [UPDATE_SMALLTALK_POST]: (state, action) =>
      produce(state, (draft) => {
        const current_id = action.payload.post_id;
        const updated_idx = draft.smallTalkPosts.findIndex(
          (v) => v.id === current_id
        );
        draft.smallTalkPosts[updated_idx] = {
          ...draft.smallTalkPosts[updated_idx],
          contents: action.payload.updated_contents,
        };

      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  getSmallTalkPostsAPI,
  addSmallTalkPostAPI,
  deleteSmallTalkPostAPI,
  updateSmallTalkPostAPI,
  loading,
};

export { actionCreators };
