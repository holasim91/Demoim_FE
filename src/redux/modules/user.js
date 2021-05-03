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
        id:1,
        username:email,
        password:pw,
        nickname:nickname,
        position:position,
      },
    })
    .then((res) => {
      //console.log("회원가입ok", res)
      Swal.fire({
        icon: "success",
        text: "회원가입 성공!",
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

      const userInfo = {
        id:"",
        username:email,
      }
      dispatch(setUser(userInfo))

      console.log("로그인성공", userInfo);
      
      let token = res.headers.authorization;
      setCookie('token', token);

      axios.defaults.headers.common['authorization'] = token;
      
      Swal.fire({
        icon:"success",
        text: "Welcome Back!",
        confirmButtonColor: "#683fee",
      })
      history.push('/');
    })
    //실패이유 Swal띄어주기 
    .catch((err) => {
      Swal.fire({
        text:`${err.response.data.message}`,
        icon:'warning',
        confirmButtonColor: "#3D825A", 
      })
    })
  }
}

//현재 로그인한 유저정보API
const loginCheckAPI = () => {
  return function (dispatch, getState, { history }){

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;

    const API = 'http://54.180.142.197/api/mypage/profile'
    axios({
      method: "get",
      url:API,
    }).then((res) =>{

      dispatch(setUser({
        desc:res.data.desc,
        nickname:res.data.nickname,
        position:res.data.position,
        profileImage:res.data.profileImage,
        username:res.data.username, //email
        teams:res.data.teams, //[]
      }))
      console.log("로그인체크성공:",res.data);
    
    }).catch((err) => {
      console.log('로그인체크에러:', err);
    })
  }
}

const logout = () => {
  return function (dispatch, getState, { history }){
    deleteCookie('token');
    axios.defaults.headers.common['Authorization'] = null;
    delete axios.defaults.headers.common['Authorization'];
    Swal.fire({
      text: "See you soon, Mate!",
      confirmButtonColor: "#3D825A",
    })
    dispatch(logOut());
    history.replace('/');
  }
}


//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.isLogin = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      draft.user = null;
      draft.isLogin = false;
    }),

  }, initialState);
  
const actionCreators = {
  signupAPI,
  loginAPI,
  loginCheckAPI,
  logout,
  //isLogin
};

export { actionCreators };
