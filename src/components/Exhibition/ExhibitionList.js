import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ExhibitionPost from "./ExhibitionPost";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import { history } from "../../redux/configStore";

const ExhibitionList = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1); //현재페이지, 1부터 시작
  useEffect(()=>{
    dispatch(exhibitionActions.exihibitionAPI(page, 6))
  },[dispatch,page])
const {posts, isLoading} = useSelector((state) => state.exhibition)

if(isLoading){
  return(
    <>
      로오딩중
    </>
  )
}


  return (
    <>
      {posts.map((post) => (
            <ExhibitionPost data={post} key={post.id} onClick={()=>history.push(`/detail/${post.id}`)} />
          ))}

    </>
  )
}

export default ExhibitionList
