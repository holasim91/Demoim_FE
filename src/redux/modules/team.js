import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_TEAM = "SET_TEAM";
const LOADING = "LOADING";
const ADD_TEAM = "ADD_TEAM";
const UPDATE_TEAM = "UPDATE_TEAM";
const DELETE_TEAM = "DELETE_TEAM";
const SET_DETAIL_TEAM = "SET_DETAIL_TEAM";

const setTeam = createAction(SET_TEAM, (teamList) => ({ teamList }));
const addTeam = createAction(ADD_TEAM, (team) => ({ team }));
const deleteTeam = createAction(DELETE_TEAM, (teamId) => ({ teamId }));
const updateTeam = createAction(UPDATE_TEAM, (teamId, team) => ({ teamId, team }));
const loading = createAction(LOADING, (isLoading) => ({ isLoading }));
const setDetailTeam = createAction(SET_DETAIL_TEAM, (teamInfo) => ({ teamInfo }));

const initialState = {
  list: [],
  isLoading: false,
  teamInfo: {
    teamId: 0,
    title: "",
    createdAt: 1620627320595,
    recruit: 1620713709368,
    begin: 1620627309368,
    end: 1623305709368,
    location: "온라인",
    thumbnail: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    front: 0,
    back: 0,
    designer: 0,
    planner: 0,
    stack: "",
    contents: "",
    recruitState: "",
    projectState: "",
    leader: {
      id: 0,
      nickname: "",
      position: "",
      desc: "",
      profileImage: null
    }
  },
  paging: { start: null, next: null, size: 9 },
}
//start는 page 번호 
const getTeamMakingAPI = (page, size = 9) => {
  return function (dispatch, getState, { history }) {

    /*
        let _paging = getState().team.paging;
        if (_paging.start && !_paging.next) {
          return;
        }
    
        if (start === null) {
          start = 1;
        }
    
        dispatch(loading(true));
        axios({
          method: 'get',
          url: `${config.api}/api/team?page=${start}&size=${size + 1}`,
        }).then((res) => {
    
          let paging = {
            start: start + 1,
            next: res.data.length === size + 1 ? res.data[res.data.length - 1] : null,
            size: size,
          }
    
          let team = res.data;
          team.pop();
    
          dispatch(setTeam(team, paging));
    
        });
    */
    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/team?page=${page}&size=${size}`,
    }).then((res) => {
      console.log(res.data);
      if (typeof res.data === 'object') {
        dispatch(setTeam(res.data));
      }
      //우선 해결법..typeof로 string 확인해서 막기..
      //서버에서 해결을 해줘야함. 프론트쪽에선 typeof로 일단 막자!
      //로그인 문제가 일어나면 프론트쪽에서 쿠키를 지워서 로그아웃 해주자.
    }).catch((error) => {
      console.log(error);
    });

  }
}

const getDetailTeamMakingAPI = (teamId) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'get',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {
      console.log(res.data);
      dispatch(setDetailTeam(res.data));
    }).catch((error) => {
      console.log(error);
    })

  }
}

const addTeamMakingAPI = (formdata) => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');

    if (!formdata) {
      return false;
    }

    axios({
      method: "post",
      header: {
        authorization: token,
      },
      url: `${config.api}/api/team`,
      data: formdata,
    }).then((res) => {

      dispatch(addTeam(res.data));
      history.push("/team");

    }).catch((err) => {
      console.log("팀메이킹 글작성 에러:", err);
    })

  }
}

const deleteTeamMakingAPI = (teamId) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'delete',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {

      dispatch(deleteTeam(teamId));
      history.replace('/team');

    }).catch((err) => {
      console.log('팀메이킹 글삭제 에러:', err);
    })

  }
}


const updateTeamMakingAPI = (teamId, formData) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null || formData === null) {
      return false;
    }

    axios({
      method: 'put',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
      data: formData,
    }).then((res) => {

      dispatch(updateTeam(teamId, res.data));
      history.replace(`/team/detail/${teamId}`);

    }).catch((err) => {
      console.log('팀메이킹 글수정 에러:', err);
    })

  }
}

const getFrontTeamMaking = (page = 1, size = 6) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/team/front?page=${page}&size=${size}`,
    }).then((res) => {
      dispatch(setTeam(res.data));
    }).catch((err) => {
      console.log('팀메이킹 프론트엔드 조회 에러:', err);
    })

  }
}

const getBackTeamMaking = (page, size) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/team/back?page=${page}&size=${size}`,
    }).then((res) => {
      dispatch(setTeam(res.data));
    }).catch((err) => {
      console.log('팀메이킹 백엔드 조회 에러:', err);
    })

  }
}

const getDesignerTeamMaking = (page, size) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/team/designer?page=${page}&size=${size}`,
    }).then((res) => {
      dispatch(setTeam(res.data));
    }).catch((err) => {
      console.log('팀메이킹 디자이너 조회 에러:', err);
    })

  }
}

const getPlannerTeamMaking = (page, size) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/team/planner?page=${page}&size=${size}`,
    }).then((res) => {
      dispatch(setTeam(res.data));
    }).catch((err) => {
      console.log('팀메이킹 기획자 조회 에러:', err);
    })

  }
}


export default handleActions(
  {
    [SET_TEAM]: (state, action) => produce(state, (draft) => {
      /*draft.list.push(...action.payload.teamList);
      if (action.payload.paging) {
        draft.paging = action.payload.paging;
      }
      */
      draft.list = action.payload.teamList;
      draft.isLoading = false;
    }),
    [ADD_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list.push(action.payload.team);
    }),
    [UPDATE_TEAM]: (state, action) => produce(state, (draft) => {
      let idx = draft.list.findIndex((t) => t.teamId === action.payload.teamId);
      draft.list[idx] = { ...draft.list[idx], ...action.payload.team };
    }),
    [DELETE_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list = draft.list.filter((t) => t.teamId !== action.payload.teamId);
    }),
    [LOADING]: (state, action) => produce(state, (draft) => {
      draft.isLoading = action.payload.isLoading;
    }),
    [SET_DETAIL_TEAM]: (state, action) => produce(state, (draft) => {
      draft.teamInfo = action.payload.teamInfo;
    }),

  }, initialState);


const actionCreators = {
  getTeamMakingAPI,
  getDetailTeamMakingAPI,
  addTeamMakingAPI,
  deleteTeamMakingAPI,
  updateTeamMakingAPI,
  getFrontTeamMaking,
  getBackTeamMaking,
  getDesignerTeamMaking,
  getPlannerTeamMaking
};

export { actionCreators };