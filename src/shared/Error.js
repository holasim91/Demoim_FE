import React from 'react'
import styled from "styled-components";
import { Text, Grid, Button, Container } from "../elements";
import Questionmark from "../images/questionmark.svg"

const Error = () => {

  return (
    <React.Fragment>
      <Container>
        <NonePageContainer>
          <NonPageBox>
            <ErrorDesc>
              <NonPage>404 Not Found Page</NonPage>
              <NonPage>웹페이지를 표시 할 수 없습니다.</NonPage>
            </ErrorDesc>
            <ErrorImgBox>
              <ErrorPage src={Questionmark}/>
            </ErrorImgBox>
          </NonPageBox>
        </NonePageContainer>
      </Container>
    </React.Fragment>
  )
}

const NonePageContainer = styled.div`
  text-align:center;
  margin:0 auto;
  box-sizing:border-box;
`;


const NonPageBox = styled.div`
  display:flex;
  justify-content:space-between;
  text-align:center;
  width:900px;
  margin:50px auto;
  box-sizing:border-box;
  @media ${props => props.theme.tablet}{
    width:100%;
    box-sizing:border-box;
    }
  @media ${props => props.theme.mobile}{
    width:100%;
    flex-direction:column-reverse;
    box-sizing:border-box;
    }
`;


const ErrorDesc = styled.div`
  margin-top:100px;
  text-align:center;
  box-sizing:border-box;
  @media ${props => props.theme.tablet}{
    padding-left:50px;
    }
  @media ${props => props.theme.mobile}{
    margin-top:20px;
    padding-left:0px;
    }
`;

//404
const NonPage = styled.div`
  text-align:center;
  :nth-child(1){
    font-size: 45px;
    font-weight: 600;
    color: #683fee;
    margin-bottom:10px;
    @media ${props => props.theme.tablet}{
    font-size:30px;
    }
    @media ${props => props.theme.mobile}{
    font-size:25px;
    }
  }:nth-child(2){
    font-size:35px;
    color: #000000;
    @media ${props => props.theme.tablet}{
    font-size:25px;
    }
    @media ${props => props.theme.mobile}{
      font-size:20px;
    }
  }
`;

const ErrorImgBox = styled.div`
  text-align:center;
  @media ${props => props.theme.tablet}{
    padding-right:50px;
    }
  @media ${props => props.theme.mobile}{
    padding-right:0px;
    }
    
`;

//이미지
const ErrorPage = styled.img`
    margin:10px auto;
    box-sizing:border-box;
    @media ${props => props.theme.mobile}{
    width:50%;
    margin:10px auto;
    }
  
`;


export default Error
