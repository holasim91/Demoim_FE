import React, {useState} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Input, Text, Grid, Button } from "../elements";
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

    console.log(email, pw)
    dispatch(actionCreators.loginAPI(email,pw))
  }

  return (
    <React.Fragment>
      <LoginContainer>
        <Grid margin="20px auto" center>
          <Text size="1.5rem" bold>로그인</Text>
        </Grid>
        <LoginForm>
          <Grid flex center padding="4px 12px">
            <Text margin="4px 20px" padding="12px" size="0.8rem" bold >이메일</Text>
            <Input width="20vw" margin="4px 12px" padding="12px" 
              placeholder="demoin@gmail.com"
              value={email}
              _onChange={(e) => {
                setEmail(e.target.value)
              }}/>
          </Grid>
          <Grid flex center padding="4px 12px">
            <Text margin="4px 20px" padding="12px" size="0.8rem" bold>비밀번호</Text>
            <Input width="20vw" margin="4px 12px" padding="12px" 
              type="password"
              value={pw}
              _onChange={(e) => {
                setPw(e.target.value)
              }}/>
          </Grid>
          <Grid margin="20px" center>
            <Button width="100%" _onClick={onLogin}>로그인</Button>
          </Grid>
          <BtnSignUP onClick={() => history.push("/signup")}>
            <Text size="0.5vw" >아직 회원이 아니신가요?</Text>
            <Text size="0.5vw" color="purple">지금 바로 가입해보세요!</Text>
          </BtnSignUP>
        </LoginForm>
      </LoginContainer>
    </React.Fragment>
  );
};

const LoginContainer = styled.div`
    width: 30%;
    margin: 30px auto;
    border: 1px solid lightgray;
    @media ${props => props.theme.mobile}{
        width:97vw;
}
`;

const LoginForm = styled.div`

`;

const BtnSignUP = styled.div`
  margin: 20px;
  display:flex;
  justify-content:space-evenly;
  padding: 0 80px;
  cursor: pointer;
`;


export default Login;