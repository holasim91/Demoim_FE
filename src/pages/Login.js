import React, {useState} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Input, Text, Grid, Button } from "../elements";
import "../shared/theme";

import { useDispatch } from "react-redux";

const Login = () => {
  
  return (
    <React.Fragment>
      <LoginContainer>
        <Grid>
          <Text>로그인</Text>
        </Grid>
        <LoginForm>
          <Grid>
            <Text>이메일</Text>
            <Input placeholder="demoin@gmail.com"></Input>
          </Grid>
          <Grid>
            <Text>비밀번호</Text>
            <Input></Input>
          </Grid>
          <Grid>
            <Button>로그인</Button>
          </Grid>
          <Grid>
            <Text>회원가입하기</Text>
          </Grid>
        </LoginForm>
      </LoginContainer>
    </React.Fragment>
  );
};

const LoginContainer = styled.div`
`;

const LoginForm = styled.div`

`;


export default Login;