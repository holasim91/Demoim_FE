import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
const Pagenation = (props) => {
   const {currentPage, totalPage, size} = props
   const [current, setCurrent] = useState(currentPage)
  //pageNumber = [1,2,3,4,5,6,7]
  // 51개는 총 상품 갯수
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(51 / size); i++) {
    pageNumber.push(i);
  }


  // 오른쪽 화살표 함수
  const forward = () => {
    if (current < 7) {
      setCurrent(current + 1);
    } else {
      window.alert("마지막 페이지에요!");
    }
  };
  // 왼쪽 화살표 함수
  const backward = () => {
    if (current > 1) {
      setCurrent(current - 1);
    } else {
      window.alert("첫번째 페이지에요!");
    }
  };
  return (
    <PagenationWrapper>
<PagenationUl  >
          <LeftArrow
            onClick={backward}
          />
          {pageNumber.map((pageNum) => (
            <li key={pageNum}  style={{cursor:'pointer'}}>
              <PageSpan current = {1}>{pageNum}</PageSpan>
            </li>
          ))}
          <RightArrow onClick={forward} />
        </PagenationUl>
    </PagenationWrapper>
  );
};

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const LeftArrow = styled(BsFillCaretLeftFill)`
  cursor:pointer;
  :hover {
    background-color: #d2d2d21a;
    color: #212121;
  }
`
const RightArrow = styled(BsFillCaretRightFill)`
  cursor:pointer;
  :hover{
    color: #C3C3C3
  }
`

const PagenationUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

const PageSpan = styled.div`
  padding: 1rem;
  width: 1rem;
  border-radius: 10rem;
  transition: font-weight 100ms ease-in, background-color 100ms ease-in,
    color 100ms ease-in;
  :hover {
    font-weight: 900;
    background-color: #d2d2d21a;
    color: #212121;
  }

`;

export default Pagenation;
