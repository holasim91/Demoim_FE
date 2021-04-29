import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
const Pagenation = (props) => {
  const [page, setPage] = useState(1); //현재페이지, 1부터 시작
  const [size, setSize] = useState(8); //페이지당 post갯수 = 8개씩(고정값) 사실상 setSize 안써도 됨, 지워도 작동o

  //pageNumber = [1,2,3,4,5,6,7]
  // 51개는 총 상품 갯수
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(51 / size); i++) {
    pageNumber.push(i);
  }

  const paginate = (PageNumber) => setPage(PageNumber);

  // 오른쪽 화살표 함수
  const forward = () => {
    if (page < 7) {
      setPage(page + 1);
    } else {
      window.alert("마지막 페이지에요!");
    }
  };
  // 왼쪽 화살표 함수
  const backward = () => {
    if (page > 1) {
      setPage(page - 1);
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
            <li key={pageNum} className="pagination_item" style={{cursor:'pointer'}}>
              <PageSpan current = {1}onClick={() => paginate(pageNum)}>{pageNum}</PageSpan>
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
