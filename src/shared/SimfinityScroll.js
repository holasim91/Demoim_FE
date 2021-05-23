import React, { useEffect } from "react";
import _ from "lodash";

const SimfinityScroll = (props) => {
  const { children, callNext, hasMorePosts, page } = props;

  const onScroll = _.throttle(
    () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts) {
          callNext();
        }
      }
    },
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
