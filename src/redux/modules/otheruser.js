import { createAction, handleActions } from 'redux-actions';
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookies";
import Swal from 'sweetalert2';
import { produce } from 'immer';
//import { history } from "../redux/configStore";
import axios from "axios";
import { actionCreators as SmallTalkActions } from "../modules/smalltalk";
import { actionCreators as ExhibitionActions } from "../modules/exhibition";


//action
const SET_OTHER_USER = 'SET_OTHER_USER';
const RESET_OTHER_USER = 'RESET_OTHER_USER';

//actionCreator
const setOtherUser = createAction(SET_OTHER_USER, (otheruser) => ({ otheruser }));
const resetOtherUser = createAction(SET_OTHER_USER, (otheruser) => ({ otheruser }));

const initialState = {
  otherUser: null,
};


//API
//다른 유저의 정보불러오기  
const otherCheckAPI = (otherId) => {
  return function (dispatch, getState, { history }) {

    // const token = getCookie('token');
    // axios.defaults.headers.common['authorization'] = token;
    console.log("OtherAPI아이디 :",otherId);
    const API = `http://54.180.142.197/api/user/profile?user_id=${otherId}`
    axios({
      method: "get",
      url: API,
    }).then((res) => {
      console.log("OtherCheck 서버응답!:", res.data);

      dispatch(setOtherUser({
        id: res.data.userid, 
        description: res.data.description,
        nickname: res.data.nickname,
        position: res.data.position,
        profileImage: res.data.profileImage,
        username: res.data.username, //email
        nowteamcnt: res.data.nowTeamCnt, 
        applyteamid:res.data.applyTeamIdList,
      }))
    }).catch((err) => {
      console.log("OTHERcheck에러:", err);
    })
  }
}


//reducer
export default handleActions(
  {
    [SET_OTHER_USER]: (state, action) => produce(state, (draft) => {
      draft.otherUser = action.payload.otheruser;
    }),
    [RESET_OTHER_USER]: (state, action) => produce(state, (draft) => {
      draft.otherUser = null;
    }),
  }, initialState);

const actionCreators = {
  otherCheckAPI,
  resetOtherUser,
};

export { actionCreators };