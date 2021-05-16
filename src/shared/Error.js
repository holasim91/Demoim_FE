import React from 'react'
import styled from "styled-components";
import Questionmark from "../images/questionmark.svg"

const Error = () => {

  return (
    <React.Fragment>
      <NonePageContainer>
        <ErrorDesc>
          <NonPage>404 Not Found Page</NonPage>
          <NonPage>웹페이지를 표시 할 수 없습니다.</NonPage>
        </ErrorDesc>
        <ErrorImgBox>
          <ErrorPage src={Questionmark}/>
        </ErrorImgBox>
      </NonePageContainer>      
    </React.Fragment>
  )
}

const NonePageContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  text-align:center;
  /* border:1px solid black; */

`;
const ErrorDesc = styled.div`
text-align:center;
  margin:50px auto;

`;


const NonPage = styled.div`
  color: #683fee;
  text-align:center;
  font-size:1em;
`;

const ErrorImgBox = styled.div`
  text-align:center;
  margin:50px auto;

`;

const ErrorPage = styled.img`
    width:70%;
    margin:10px auto;
    @media ${props => props.theme.mobile}{
    width:100%;
    margin:10px auto;
    }
  
`;





export default Error
