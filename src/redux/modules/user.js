import { createAction, handleActions } from 'redux-actions';
// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import Swal from 'sweetalert2';
import { produce } from 'immer';
import axios from "axios";

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user:null,
  isLogin:false,
};

const signupAPI = (email,pw,nickname,position) => {
  console.log(email,pw,nickname,position)
  return function (dispatch, getState, { history }){
    const API = 'http://54.180.142.197/api/signup'
    axios({
      method: "post",
      url:API,
      data:{
        username: email,
        password:pw,
        nickname:nickname,
        position:position,
      },
    })
    .then((res) => {
      console.log("회원가입ok", res)
    //   Swal.fire({
    //     text: "회원가입 성공!",
    //     icon: "success",
    //     confirmButtonColor: "#3D825A",
    // })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      draft.user = null;
      draft.is_login = false;
    }),

  }, initialState);
  
const actionCreators = {
  signupAPI,
  //loginAPI,
  //logout,
  //isLogin
};

export { actionCreators };
