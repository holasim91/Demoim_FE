import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";
import { actionCreators as applyActions } from "../modules/apply";

const SET_TEAM = "SET_TEAM";
const LOADING = "LOADING";
const ADD_TEAM = "ADD_TEAM";
const UPDATE_TEAM = "UPDATE_TEAM";
const DELETE_TEAM = "DELETE_TEAM";
const SET_DETAIL_TEAM = "SET_DETAIL_TEAM";
const SET_PARTICIPATION_HISTORY = "SET_PARTICIPATION_HISTORY";
const SET_LEADER_HISTORY = "SET_LEADER_HISTORY";
const DELETE_LEADER_HISTORY = "DELETE_LEADER_HISTORY";

const setTeam = createAction(SET_TEAM, (teamList) => ({ teamList }));
const addTeam = createAction(ADD_TEAM, (team) => ({ team }));
const deleteTeam = createAction(DELETE_TEAM, (teamId) => ({ teamId }));
const updateTeam = createAction(UPDATE_TEAM, (teamId, team) => ({ teamId, team }));
const loading = createAction(LOADING, (isLoading) => ({ isLoading }));
const setDetailTeam = createAction(SET_DETAIL_TEAM, (teamInfo) => ({ teamInfo }));
const setParticipationHistory = createAction(SET_PARTICIPATION_HISTORY, (participationList) => ({ participationList }));
const setLeaderHistory = createAction(SET_LEADER_HISTORY, (leaderList) => ({ leaderList }));
const deleteLeaderHistory = createAction(DELETE_LEADER_HISTORY, () => ({}));

const initialState = {
  list: [],
  teamParticipationList: {},
  teamLeaderList: {},
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

//팀메이킹 전체 조회
const getTeamMakingAPI = (page, size = 9) => {
  return function (dispatch, getState, { history }) {

    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/team?page=${page}&size=${size}`,
    }).then((res) => {
      if (typeof res.data === 'object') {
        dispatch(setTeam(res.data));
      }

    }).catch((error) => {
      console.log(error);
    });
  }
}

//팀메이킹 디테일 조회 
const getDetailTeamMakingAPI = (teamId) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'get',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {

      dispatch(setDetailTeam(res.data));

    }).then((res) => {

      if (getState().team.teamInfo.leader.id === getState().user.user.id) {
        dispatch(applyActions.getApplyAPI(teamId));
      }

    }).catch((error) => {
      console.log(error);
    })

  }
}

//팀메이킹 글 작성 
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

//팀메이킹 글 삭제 
const deleteTeamMakingAPI = (teamId, move = 'team') => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'delete',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {

      dispatch(deleteTeam(teamId));
      dispatch(deleteLeaderHistory());

      if (move === 'team') {
        history.replace('/team');
      } else if (move === 'log') {
        history.replace(`/userpage/${getState().user.user.id}`);
      }
    }).catch((err) => {
      console.log('팀메이킹 글삭제 에러:', err);
    })

  }
}

//팀메이킹 글 수정 
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

//직군별 불러오기(프론트엔드)
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

//직군별 불러오기(백엔드)
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
//직군별 불러오기(디자이너)
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

//직군별 불러오기(기획자)
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

//로그인한 유저가 지원한 팀프로젝트 목록 리스트
const getUserApplyListAPI = () => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/mypage/apply`,
    }).then((res) => {

      dispatch(setTeam(res.data));

    }).catch((err) => {
      console.log('마이페이지 로그인 유저 지원한 프로젝트 조회 에러:', err);
    })
  }
}

//로그인한 유저가 참여한 팀프로젝트 목록 리스트 (객체로 전달옴)
const getUserParticipateListAPI = () => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/mypage/team`,
    }).then((res) => {

      console.log('팀메이킹 로그인 유저 참여 프로젝트 목록::', res);
      //dispatch(setParticipationHistory(res.data));

      let myTeamHistory = {
        activateProject: res.data.myTeamHistory.activatedProject,
        finishedProject: res.data.myTeamHistory.finishedProject
      }
      dispatch(setParticipationHistory(myTeamHistory));

    }).catch((err) => {
      console.log('마이페이지 로그인 유저 참여 프로젝트 조회 에러:', err);
    })

  }
}

//로그인한 유저가 리더인 팀프로젝트 목록 리스트(객체로 전달옴)
const getUserLeaderListAPI = () => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}/api/mypage/leader`,
    }).then((res) => {

      dispatch(setLeaderHistory(res.data));

    }).catch((err) => {
      console.log('마이페이지 로그인 유저 참여 프로젝트 조회 에러:', err);
    })

  }
}

//특정 유저가 참여한 팀프로젝트 목록 리스트
const getMemberParticipateListAPI = () => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}`,
    }).then((res) => {

      dispatch(setParticipationHistory(res.data));

    }).catch((err) => {
      console.log('마이페이지 특정 유저 참여 프로젝트 조회 에러:', err);
    })
  }
}

//특정 유저가 리더인 팀프로젝트 목록 리스트
const getMemberLeaderListAPI = () => {
  return function (dispatch, getState, { history }) {

    axios({
      method: 'get',
      url: `${config.api}`,
    }).then((res) => {

      dispatch(setLeaderHistory(res.data));

    }).catch((err) => {
      console.log('마이페이지 특정 유저 리더 프로젝트 조회 에러:', err);
    })

  }
}

export default handleActions(
  {
    [SET_TEAM]: (state, action) => produce(state, (draft) => {
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
    [SET_PARTICIPATION_HISTORY]: (state, action) => produce(state, (draft) => {
      draft.teamParticipationList = action.payload.participationList;
    }),
    [SET_LEADER_HISTORY]: (state, action) => produce(state, (draft) => {
      draft.teamLeaderList = action.payload.leaderList;
    }),
    [DELETE_LEADER_HISTORY]: (state, action) => produce(state, (draft) => {
      draft.teamLeaderList = {};
    })
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
  getPlannerTeamMaking,
  getUserApplyListAPI,
  getUserParticipateListAPI,
  getUserLeaderListAPI,
  getMemberParticipateListAPI,
  getMemberLeaderListAPI
};

export { actionCreators };