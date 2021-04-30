import { createAction, handleActions } from 'redux-actions';
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookies";
import Swal from 'sweetalert2';
import { produce } from 'immer';
//import { history } from "../redux/configStore";
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
        username:email,
        password:pw,
        nickname:nickname,
        position:position,
      },
    })
    .then((res) => {
      //console.log("회원가입ok", res)
      Swal.fire({
        text: "회원가입 성공!",
        icon: "success",
        confirmButtonColor: "#3D825A",
      })
      history.push('/');
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const loginAPI = (email,pw) => {
  console.log(email,pw)
  return function (dispatch, getState, { history }){
    const API = 'http://54.180.142.197/api/login';
    axios({
      method: "post",
      url:API,
      data:{
      username: email,
      password:pw,
    }
    }).then((res) => {
      console.log(res)

      let token = res.headers.authorization;
      setCookie('token', token);

      axios.defaults.headers.common['authorization'] = token;

      Swal.fire({
        text: 'Welcome, Mate!',
        confirmButtonColor: "#3D825A",
      })
      history.push('/');
    })
    .catch((err) => console.log(err))
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
  loginAPI,
  //logout,
  //isLogin
};

export { actionCreators };
