import { createAction, handleActions } from 'redux-actions';
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookies";
import { SuccessAlert, ErrorAlert } from "../../shared/Alerts";
import { produce } from 'immer';
import axios from "axios";
import { actionCreators as SmallTalkActions } from "../modules/smalltalk";
import { actionCreators as ExhibitionActions } from "../modules/exhibition";
import { config } from "../../shared/config";

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  isLogin: false,
};


const signupAPI = (email, pw, nickname, position) => {
  return function (dispatch, getState, { history }) {
    const API = `${config.api}/api/signup`
    axios({
      method: "post",
      url: API,
      data: {
        username: email,
        password: pw,
        nickname: nickname,
        position: position,
      },
    })
      .then((res) => {
        SuccessAlert("회원가입 성공!")
        history.push('/login');
      })
      .catch((err) => {
        console.log("회원가입에러:", err)
        ErrorAlert("회원가입 실패😭")
      })
  }
}

const loginAPI = (email, pw) => {
  return function (dispatch, getState, { history }) {
    const API = `${config.api}/api/login`;
    axios({
      method: "post",
      url: API,
      data: {
        username: email,
        password: pw,
      }
    })
      .then((res) => {
        const descriptions= res.data.userInfo.Description.replaceAll('<br>','\n').replaceAll('<-->',':').replaceAll('<샵>','#');
        console.log('descriptions');
        const userInfo = {
          id: Number(res.data.userInfo.Id),
          description: descriptions,
          nickname: res.data.userInfo.Nickname,
          position: res.data.userInfo.Position,
          profileImage: res.data.userInfo.ProfileImage,
          username: res.data.userInfo.Username, //email
          nowteamcnt: Number(res.data.userInfo.NowTeamCnt),//진행중인프로젝트
          applyteamid: res.data.applyTeamId,//[] 지원한프로젝트의 아이디
        }
        dispatch(setUser(userInfo))
        let token = res.headers.authorization;
        setCookie('token', token);

        axios.defaults.headers.common['authorization'] = token;
        SuccessAlert("Welcome Mate!")
        history.replace('/');
      })
      .catch((err) => {
        ErrorAlert(`${err.response.data.message}`)
      })
  }
}

//현재 로그인한 유저정보API
const loginCheckAPI = () => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;

    const API = `${config.api}/api/mypage/profile`;
    axios({
      method: "get",
      url: API,
    })
    // \r\n|\n|\n\n
      .then((res) => {
        const descriptions= res.data.description.replaceAll('<br>','\n').replaceAll('<-->',':').replaceAll('<샵>','#');
        dispatch(setUser({
          id: res.data.userid,
          description: descriptions,
          nickname: res.data.nickname,
          position: res.data.position,
          profileImage: res.data.profileImage,
          username: res.data.username, //email
          nowteamcnt: res.data.nowTeamCnt,
          applyteamid: res.data.applyTeamIdList,
        }))
      }).catch((err) => {
        console.log('로그인체크에러:', err);
      })
  }
}


//프로필수정하기
const editProfileAPI = (formData) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;

    const API = `${config.api}/api/mypage/profile`
    axios({
      method: "put",
      url: API,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "authorization": token,
      },
    })
      .then((res) => {
        SuccessAlert("수정완료")
        dispatch(setUser({
          id: res.data.id,
          description: res.data.description,
          nickname: res.data.nickname,
          position: res.data.position,
          profileImage: res.data.profileImage,
          username: res.data.username, //email
        }))
        history.push(`/userpage/${res.data.id}`);
      })
      .catch((err) => {
        console.log("포지션수정 에러" , err);
        ErrorAlert(`${err.response.data.msg}`)
      })
  }
}

//Tab-SmallTalk
//현재로그인한 사용자가 작성했던 SmallTalk반환
const TabSmallTalkAPI = (otherId = null) => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;
    
    let API;
    if (otherId === null) {
      API = `${config.api}/api/mypage/smalltalk`
    } else {
      API = `${config.api}/api/mypage/smalltalk?user_id=${otherId}`
    }
      axios({
        method: "get",
        url: API,
        headers: {
          'authorization': token,
        },
      }).then((res) => {
        dispatch(SmallTalkActions.setPost(res.data))
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  
//Tab-ExhibitionList
//현재로그인한 사용자가 작성했던 프로젝트자랑글 반환

const TabExhibitionAPI = (otherId) => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;
    let API;
    if (!otherId) {
      API = `${config.api}/api/mypage/exhibition`
    } else {
      API = `${config.api}/api/mypage/exhibition?user_id=${otherId}`
    }
    axios({
      method: "get",
      url: API,
      headers: {
        'authorization': token,
      },
    }).then((res) => {

      dispatch(ExhibitionActions.setExihibition(res.data))

    }).catch((err) => {
      console.log("TabExhibitionAPI에러:", err)
    })
  }
}


const logout = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie('token');
    axios.defaults.headers.common['Authorization'] = null;
    delete axios.defaults.headers.common['Authorization'];
    SuccessAlert("See you soon, Mate!")
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
  editProfileAPI,
  TabSmallTalkAPI,
  TabExhibitionAPI,
  //isLogin
};

export { actionCreators };
