import React, { useEffect } from "react";
import _ from "lodash";
//최초 1페이지 불러오기
//다음페이지를 2페이지를 달라고 해야하는데
//스크롤 위치를 기준으로.. 라이버르리 쓰면 어떤 요소가 화면에 보이는지..
//다음페이지를 받아와야한다면
// 현재 몇번 페이지 까지..
// 응답이 오면 데이터의 뒷 부분에 붙이고
// 현재페이지를 업데이트를 치고?
// 지금 받아온 페이지가 마지막페이지.. 를 기록해야한다.
// 데이터/ 현재 조회하는 페이지가 어디가진지/ 지금 마지막페이지..

const SimfinityScroll = (props) => {
  const { children, callNext, hasMorePosts, page } = props;

  const onScroll = _.throttle(
    () => {
      /*
    window.scrollY : 화면을 얼마나 내렸는지
    document.documentElement.clientHeight: 화면이 보이는 길이
    document.documentElement.scrollHeight: 화면의 총 길이
    */
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts) {
          callNext();
        }
      }
    }, // 무한 스크롤
    300
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, page, onScroll]);
  return (
    <>
      {children}
    </>
  );
};

export default SimfinityScroll;
