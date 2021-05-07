import React, {useState} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Text,Grid, Button, Container } from "../elements";
import { history } from "../redux/configStore";
import "../shared/theme";

import { actionCreators } from "../redux/modules/user";

import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const  dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('')

  const onLogin = () => {

    if (email === ""){
      window.alert("이메일과 비밀번호를 입력해주세요!")
      return
    } 
    if (pw === "") {
      window.alert("이메일과 비밀번호를 입력해주세요!")
      return
    }

    dispatch(actionCreators.loginAPI(email,pw))
  }

  return (
    <React.Fragment>
      <Container>
        <LoginContainer>
          <Title>
            로그인
          </Title>
          <LoginForm>
            <LoginTable>
              <tbody>
                <tr>
                  <td>이메일</td>
                  <td>
                  <Input placeholder="demoim@gmail.com"
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value)
                  }}/></td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td>
                    <Input type="password"
                    value={pw}
                    onChange={(e) => {
                      setPw(e.target.value)}}/>
                    </td>
                </tr>
              </tbody>
            </LoginTable>
            <LoginBtn onClick={onLogin}>로그인</LoginBtn>
          </LoginForm>
          <ToSignup onClick={() => history.push("/signup")}>
            <span>아직 회원이 아니신가요?</span>
            <span>지금 바로 가입해보세요!</span>
          </ToSignup>
        </LoginContainer>
      </Container>
    </React.Fragment>
  );
};


const LoginContainer = styled.div`
    width: 578px;
    margin: 100px auto;
    padding: 10px auto;
    box-sizing:border-box;
    @media ${props => props.theme.tablet}{
        width: 480px;
        margin: 80px auto;
    }
    @media ${props => props.theme.mobile}{
        /* min-width:500px; */
        width: 100%;
        /* margin: 20px auto; */
        text-align:right;
        margin-right:10px;

    }
`;

const LoginForm = styled.div`
    /* text-align:center; */
    width:100%;
    color: black;
    border: solid 1px lightgray;
    box-sizing:border-box;
`;

const LoginTable = styled.table`
    margin:50px auto 0 auto;
    padding-bottom: 49px;
    box-sizing:border-box;
    & tr{
        text-align: left;
        font-size: 16px;
        font-weight: 400;
    }
    & td{
    position: relative;
    padding-bottom: 16px;
    @media ${props => props.theme.tablet}{
        font-size: 14px;
        }
    @media ${props => props.theme.mobile}{
        font-size: 1px;
        }
    }
    td:nth-child(1){
    box-sizing: border-box;
    padding: 15px 30px 0px 18px;
    @media ${props => props.theme.mobile}{
        font-size: 4px;
        padding: 15px 10px 0px 10px;
        }
    }
`;

const Title = styled.div`
  width:100%;
    padding:20px 10px;
    text-align: center;
    box-shadow: 0 0 2px 0 rgba(216, 216, 216, 0.86);
    background-color: #f2f5fa;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    box-sizing:border-box;
    font-size: 1.3vw;
    font-weight: 500;
    @media ${props => props.theme.tablet}{
        font-size: 18px;
        }
    @media ${props => props.theme.mobile}{
        font-size: 16px;
    }

`;

const Input = styled.input`
    width: 283px;
    border:none;
    border-bottom: 1px solid lightgray;
    @media ${props => props.theme.tablet}{
        font-size: 14px;
        }
    @media ${props => props.theme.mobile}{
        width: 180px;
        font-size: 12px;
    }
    &:focus{
        outline:none;
    }

`;


const LoginBtn = styled.div`
        width:100px;
        margin: 20px auto;
        padding: 12px;
        border: 1px solid grey;
        border-radius: 4px;
        background-color: #ffffff;
        letter-spacing:0.5px;
        font-size: 16px;
        font-weight:500;
        text-align:center;
        box-sizing:border-box;
        &:hover{
            cursor: pointer;
        }
  @media ${props => props.theme.tablet}{
        font-size: 12px;
        }
  @media ${props => props.theme.mobile}{
        font-size: 12px;
      }
`;

const ToSignup = styled.div`
    margin: 20px;
    /* display:flex;
    justify-content:space-between; */
    text-align:right;
    padding-left:80px;
    cursor: pointer;
    font-size:12px;
    &span{  
    }
    & span:nth-child(2){
      margin-left:10px;
      color:#683fee;
      text-decoration:underline;
    
    }
    @media ${props => props.theme.mobile}{
        text-align:center;
        padding-left:10px;
      }
`;



export default Login;