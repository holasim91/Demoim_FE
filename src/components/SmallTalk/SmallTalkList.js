import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SmallTalkPost from "./SmallTalkPost";
import { actionCreators as smalltalkActions } from "../../redux/modules/smalltalk";
import { history } from "../../redux/configStore";
import Spinner from "../../shared/Spinner";


const Dummy = [
  {
    "id": 3,
    "content":"Dummy Test2",
    "user":{
      "userid": 1,
      "username":"test@tset.com",
      "nickname":'케로',
      "profileImage" :'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
    },
    "createdAt": "2021-04-30T20:12:37.254",
    "modifiedAt": "2021-04-30T20:12:37.254",
  },
  {
    "id": 4,
    "content":"Dummy Test2",
    "user":{
      "userid": 2,
      "username":"test@tset.com",
      "nickname":'케로',
      "profileImage" :'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
    },
    "createdAt": "2021-04-30T20:12:37.254",
    "modifiedAt": "2021-04-30T20:12:37.254",
  },
  {
    "id": 5,
    "content":"Dummy Test2",
    "user":{
      "userid": 3,
      "username":"test@tset.com",
      "nickname":'케로',
      "profileImage" :'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
    },
    "createdAt": "2021-04-30T20:12:37.254",
    "modifiedAt": "2021-04-30T20:12:37.254",
  },
]
const SmallTalkList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1); //현재페이지, 1부터 시작
  useEffect(() => {
    dispatch(smalltalkActions.getSmallTalkPostsAPI(1, 6));
  }, [dispatch, page]);
  const { smallTalkPosts, isLoading } = useSelector((state) => state.smalltalk);
  
  if (isLoading && history.location.pathname!=='/') {
    return (
      <>
      <Spinner />
      </>
    );
  }

  return (
    <>
    {smallTalkPosts.map((data) => <SmallTalkPost data={data} key ={data.id} />)}
     
    </>
  );
};

export default SmallTalkList;
