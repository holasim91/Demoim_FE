import React, { useRef } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { emailCheck, nicknameCheck, pwContinuous, pwMatch } from "../shared/Common";
import { Input, Text, Grid, Button } from "../elements";
import "../shared/register.css";
import "../shared/theme";

import { actionCreators } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import axios from "axios";



//username= email
const Signup = (props) => {
    const dispatch = useDispatch("");

    const [email, setEmail] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [pwCheck, setPwCheck] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [emailDup, setEmailDup] = React.useState(false);
    const [nicknameDup, setNicknameDup] = React.useState(false);
    const nickNameInfoUl = useRef(),
            nickNameInfo = useRef(),
            pwInfoLen = useRef(),
            pwInfoMatch = useRef(),
            pwInfoContinuos = useRef(),
            pwInfoUl = useRef(),
            rePwInfoUl = useRef(),
            rePwInfoLiT = useRef()
        

    //정규식 각 조건에 충족여부에 따라 info 확인 가능하도록
    const changeNickname = (e, nickNameInfo) => {

        const targetNickname = e.target.value;
        setNickname(targetNickname);

        if (!nicknameCheck(targetNickname)) {
            nickNameInfo.classList.add('error');
            nickNameInfo.classList.remove('ok');
        } else {
            nickNameInfo.classList.remove('error');
            nickNameInfo.classList.add('ok');
        }
    }

    //비밀번호
    const changePw = (e, pwInfoLen, pwInfoMatch, pwInfoContinuos) => {

        const targetPw = e.target.value;
        setPw(targetPw);

        if ( targetPw.length < 4 ) {
            pwInfoLen.classList.add('error');
            pwInfoLen.classList.remove('ok');
        } else {
            pwInfoLen.classList.remove('error');
            pwInfoLen.classList.add('ok');
        }

        if (!pwMatch(targetPw)) {
            pwInfoMatch.classList.add('error');
            pwInfoMatch.classList.remove('ok');
        } else {
            pwInfoMatch.classList.add('ok');
            pwInfoMatch.classList.remove('error');
        }

        if (pwContinuous(targetPw)) {
            pwInfoContinuos.classList.add('error');
            pwInfoContinuos.classList.remove('ok');
        } else {
            pwInfoContinuos.classList.add('ok');
            pwInfoContinuos.classList.remove('error');
        }
    }

    //비밀번호 재확인
    //pwOk && (컴포넌트 보여주기)
    const changePwMatch = (e, rePwInfoUl,rePwInfoLiT) => {
        const checkPw = e.target.value;
        console.log(checkPw)
        setPwCheck(checkPw);

        if (pw === checkPw) {
            rePwInfoUl.current.style.display = "block";
            rePwInfoLiT.current.style.color = "#0f851a";
            return false;
        }else{
            rePwInfoUl.current.style.display = "none";
        }
    }

    //checkEmailAPI (username:email)
    const checkEmailAPI = (email) => {
        console.log(email)
        
        const API = `http://54.180.142.197/api/signup/usernamedupchk?username=${email}`;
        axios.post(API,
            {
                username: email,
            })
            .then((res) => {
                console.log(res)
                if (res.data.msg === "false") {
                    alert('이미 등록된 이메일입니다!');
                    setEmailDup(false);
                } else {
                    alert('사용이 가능합니다.');
                    setEmailDup(true);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    //checkNicknameAPI
    const checkNicknameAPI = (nickname) => {
        console.log(nickname)
        const API = `http://54.180.142.197/api/signup/nicknamedupchk?nickname=${nickname}`;
        axios.post(API,
            {
                nickname:nickname,
            })
            .then((res) => {
                console.log(res)
                if(res.data.msg === "false"){
                    alert('이미등록된 닉네임입니다.')
                    setNicknameDup(false);
                }else{
                    alert('사용 가능한 닉네임입니다.')
                    setNicknameDup(true);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //희망포지션 설렉트박스
    const handleOnChange = (e) => {
        const selectedPosition = e.target.value;
        console.log(selectedPosition)
        setPosition(selectedPosition)
        //document.getElementById('result').innerText = value;
    }



    //회원가입하기!
    const signUp = () => {

        if (email === ' ') {
            alert('이메일을 입력해주세요!')
            return false;
        }
        if (nickname === ' ') {
            alert('닉네임을 입력해주세요!')
            return false;
        }

        if (emailDup === false) {
            alert('이메일 중복확인을 해주세요!');
            return false;
        }

        if (nicknameDup === false) {
            alert('닉네임 중복확인을 해주세요!');
            return false;
        }

        console.log(position)
        //alert('WELCOME MATE!')
        dispatch(actionCreators.signupAPI(email,pw,nickname,position))
    }



    return (
        <React.Fragment>
            <SignupContainer>
                <Grid margin="20px auto" center >
                    <Text size="1.5rem" bold>회원가입</Text></Grid>
                <SignupForm>
                    <Grid flex>
                        <Text width="6vw" margin="4px 20px" padding="12px" size="0.8rem" bold>이메일</Text>
                        <Input width="12vw" margin="4px 12px" padding="12px" type="text"
                            placeholder="mate12@naver.com"
                            value={email}
                            _onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        <Button width="8vw" margin="0 16px 0 0" padding="12px" font-size="0.5vw"
                            _onClick={() => {
                                console.log("email Check");
                                // if(!emailCheck(email)){
                                //     alert('이메일형식확인');
                                //     return false;
                                // }
                                checkEmailAPI(email);
                            }}>중복확인</Button>
                    </Grid>
                    <Grid flex>
                        <Text width="6vw" margin="4px 20px" padding="12px" size="0.8rem" bold>닉네임</Text>
                        <Input width="12vw" margin="4px 12px" padding="12px" placeholder="저녁은돈까스"
                            value={nickname}
                            _onClick={() => {
                                nickNameInfoUl.current.style.display = "block";
                            }}
                            _onChange={(e) => {
                                changeNickname(e, nickNameInfo.current);
                            }}
                        />
                        <Button width="8vw" margin="0 16px 0 0" padding="12px" font-size="0.5vw"
                            _onClick={() => {
                                //console.log("nickname Check")
                                checkNicknameAPI(nickname)
                            }}
                        >중복확인</Button>
                    </Grid>
                    <InfoUl className="checkPw" ref={nickNameInfoUl}>
                        <li ref={nickNameInfo}>·한글,영문,숫자만 2~6자리 가능</li>
                    </InfoUl>
                    <Grid flex text-align="left">
                        <Text width="6vw" margin="4px 20px" padding="12px" size="0.8rem" bold>비밀번호</Text>
                        <Input width="20vw" margin="4px 12px" padding="12px"
                            value={pw}
                            _onClick={() => {
                                pwInfoUl.current.style.display = "block";
                            }}
                            _onChange={(e) => {
                                changePw(e, pwInfoLen.current, pwInfoMatch.current, pwInfoContinuos.current);
                            }} />
                    </Grid>
                    <InfoUl className="checkPw" ref={pwInfoUl}>
                        <li ref={pwInfoLen}>·글자수는 4~20 글자 </li>
                        <li ref={pwInfoMatch}>·영문/숫자만 허용, 2개 이상의 조합</li>
                        <li ref={pwInfoContinuos}>·동일한 문자 3개 이상 연속 사용 불가</li>
                    </InfoUl>
                    <Grid flex>
                        <Text width="6vw" margin="4px 20px" padding="12px" size="0.8rem" bold>비밀번호확인</Text>
                        <Input width="20vw" margin="4px 12px" padding="12px" placeholder="비밀번호를 한번 더 입력해주세요"
                            value={pwCheck}
                            // _onClick={() => {
                            //     rePwInfoUl.current.style.display = "block";
                            // }}
                            _onChange={(e) => {
                                changePwMatch(e, rePwInfoUl,rePwInfoLiT)
                            }}

                        />
                    </Grid>
                    <InfoUl className="ReCheckPw" ref={rePwInfoUl}>
                        <li ref={rePwInfoLiT}>·비밀번호 일치</li>
                    </InfoUl>
                    <Grid flex>
                        <Text width="6vw" margin="4px 20px" padding="12px" size="0.8rem" bold>희망포지션</Text>
                        <Grid margin="4px 12px">
                            <Select className="position-select"
                                onChange={(e) => {
                                    handleOnChange(e)
                                }}>
                                <option value="프론트엔드">프론트엔드</option>
                                <option value="백엔드">백엔드</option>
                                <option value="디자이너">디자이너</option>
                                <option value="기획자">기획자</option>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid margin="20px 16px" center>
                        <Button width="100%" _onClick={signUp}>회원가입</Button>
                    </Grid>
                </SignupForm>
            </SignupContainer >
        </React.Fragment >
    );
};

const Select = styled.select`
    width: 20vw;
`;

const SignupContainer = styled.div`
    width: 30%;
    margin: 30px auto;
    border: 1px solid lightgray;
    @media ${props => props.theme.mobile}{
        width:97vw;
}
`;

// const Grid = styled.div`
//     box-sizing: border-box;
//     display: ${(props) => props.color};
//     ${(props) => (props.width ? `width:${props.width};` : '4px 12px')};
//     ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}

// `;

const SignupForm = styled.div`

`;

const InfoUl = styled.ul`
    font-size:12px;
    color:#666666;
    position: relative;
    left:135px;
    font-weight: 400;
`

export default Signup;
