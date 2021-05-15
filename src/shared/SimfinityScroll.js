import React, { useEffect } from "react";
import _ from "lodash";

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
