import { createAction, handleActions } from 'redux-actions';
import Swal from 'sweetalert2';
import { produce } from 'immer';
import axios from "axios";

const SET_POST = "SET_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


const dummyPosts = [
  {
    "id": "1",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "thumbnail": "https://cdn.pixabay.com/photo/2017/09/08/09/49/craft-2728227__340.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  },
  {
    "id": "2",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "thumbnail": "https://mdn.github.io/css-examples/learn/images/balloons.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  },
  {
    "id": "3",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "thumbnail": "https://mdn.github.io/css-examples/learn/images/balloons.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  },
  {
    "id": "4",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "thumbnail": "https://mdn.github.io/css-examples/learn/images/balloons.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  },
  {
    "id": "5",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "thumbnail": "https://mdn.github.io/css-examples/learn/images/balloons.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  },
  {
    "id": "6",
    "title": "테스트 타이틀",
    "contents": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "thumbnail": "https://mdn.github.io/css-examples/learn/images/balloons.jpg",
    "User": [{
      "username":"베로니",
      "profile_img":"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    }],
    "createdAt":"2021.04.29 11:32:11"
  }
]

const initialState = {
  posts:[],
  page:1,
};

const exihibitionAPI = (page, size) => {
  
  return function (dispatch, getState, { history }){
    axios({
      
      },{
        method:'GET',
        params:{
          page: page,
          size: size,
        }
      }
    )
    .then((res) => {
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default handleActions(
  {

    [SET_POST]: (state, action) =>
    produce(state, (draft) => {
      draft.list.push(...dummyPosts); // draft.list를 action.payload.post_list로 갈아끼우자
      /*
      draft.list = draft.list.reduce((acc, cur) => {
        if (acc.findIndex((a) => a.id === cur.id) === -1) {
          return [...acc, cur];
        } else {
          acc[acc.findIndex((a) => a.id === cur.id)] = cur;
          return acc;
        }
      }, []); //중복제거
      */
      draft.is_loading = false;
    }),


  }, initialState);
  
const actionCreators = {
  setPost,

};

export { actionCreators };
