import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { certNumberCheck, cellPhoneNum } from "../../shared/Common";
import { Container } from "../../elements";
import { history } from "../../redux/configStore";
import axios from "axios";

const Certification = () => {
  const [userNumber, setUserNumber] = React.useState("");
  const [resCertNumber, setresCertNumber] = React.useState("");
  const [certNumber, setCertNumber] = React.useState("");

  const [check, setCheck] = React.useState({ check: false });

  //체크박스
  const handleCheck = (e, target) => {
    const { checked } = e.target;
    setCheck({ check: checked });
  };

  //인증번호요청
  const checkUserNumberAPI = (userNumber) => {
    if (userNumber === "" || !cellPhoneNum(userNumber)) {
      Swal.fire({
        text: "휴대폰번호를 확인해주세요~",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
      return false;
    }

    const API = `http://54.180.142.197/api/signup/certNumber`;
    axios
      .post(API, {
        phoneNum: userNumber,
      })
      .then((res) => {
        Swal.fire({
          text: "입력하신 번호로 인증번호가 발송되었습니다.",
          icon: "success",
          confirmButtonColor: "#999cda",
        });
        setresCertNumber(res.data.certNumber);
      })
      .catch((err) => {
        Swal.fire({
          text: `${err.response.data.msg}`,
          icon: "warning",
          confirmButtonColor: "#999cda",
        });
      });
  };

  //인증번호확인

  const checkCertNumber = (certNumber) => {
    if (certNumber === "" || !certNumberCheck(certNumber)) {
      Swal.fire({
        text: "문자받으신 인증번호 6자리를 입력해주세요!",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
      return false;
    }

    if (certNumber !== resCertNumber) {
      Swal.fire({
        text: "인증번호가 유효하지 않습니다!",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
    } else {
      Swal.fire({
        text: "인증성공!",
        icon: "success",
        confirmButtonColor: "#999cda",
      });
    }
  };

  //checkbox

  //NextBtn
  const toSignup = () => {
    if (userNumber === "") {
      Swal.fire({
        text: "휴대폰번호를 확인해주세요~",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
      return false;
    }

    if (certNumber === "" || !certNumberCheck(certNumber)) {
      Swal.fire({
        text: "문자받으신 인증번호 6자리를 입력해주세요!",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
      return false;
    }

    if (check.check === false) {
      Swal.fire({
        text: "이용약관 동의 후 회원가입이 가능합니다.",
        icon: "warning",
        confirmButtonColor: "#999cda",
      });
      return false;
    }
    history.push("/signup");
  };

  return (
    <React.Fragment>
      <Container>
        <PageTitleContainer>
          <PageTitle>회원가입</PageTitle>
          <StepBox>
            <Step bg="#999cda" color="#ffffff">
              1단계
            </Step>
            <StepLine>---------</StepLine>
            <Step bg="#d8d8d8" color="#000000">
              2단계
            </Step>
          </StepBox>
        </PageTitleContainer>

        <CertificateContainer>
          <Title>전화번호 인증 및 약관동의</Title>
          <CertificateForm>
            <CertificateTable>
              <tbody>
                <tr>
                  <td>휴대폰번호</td>
                  <td>
                    <Input
                      placeholder="'-'없이 번호만 입력"
                      value={userNumber}
                      onChange={(e) => {
                        setUserNumber(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        checkUserNumberAPI(userNumber);
                      }}
                    >
                      인증번호요청
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>인증번호입력</td>
                  <td>
                    <Input
                      placeholder="숫자6자리"
                      maxLength="6"
                      value={certNumber}
                      onChange={(e) => {
                        setCertNumber(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        checkCertNumber(certNumber);
                      }}
                    >
                      인증번호확인
                    </Button>
                  </td>
                </tr>
              </tbody>
            </CertificateTable>

            <CheckBoxTable>
              <tbody>
                <tr>
                  <td>약관동의</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      type="checkbox"
                      label=""
                      checked={check.check}
                      onChange={(e) => handleCheck(e, "check")}
                    />
                  </td>
                  <td>개인정보 처리 방침에 대한 이용약관에 동의</td>
                  <td>
                    <CheckContents
                      onClick={() => {
                        history.push("/policy");
                      }}
                    >
                      {" "}
                      {">"} 전문보기
                    </CheckContents>
                  </td>
                </tr>
              </tbody>
            </CheckBoxTable>
            <NextBtn onClick={toSignup}>다음</NextBtn>
          </CertificateForm>
        </CertificateContainer>
      </Container>
    </React.Fragment>
  );
};

const Checkbox = styled.input`
  width: 40px;
  height: 15px;
  vertical-align: middle;
`;

const PageTitleContainer = styled.div`
  width: 578px;
  margin: 100px auto;
  padding: 10px auto;
  text-align: center;
  box-sizing: border-box;

  @media ${(props) => props.theme.tablet} {
    width: 430px;
    margin: 80px auto;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 20px auto;
  }
`;

const PageTitle = styled.p`
  color: #000000;
  font-size: 28px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  letter-spacing: 1.5px;
`;

const StepBox = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Step = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

const StepLine = styled.div`
  width: 50px;
  height: 50px;
  color: #979797;
  font-size: 10px;
  line-height: 50px;
  letter-spacing: 1px;
`;

//form
const CertificateContainer = styled.div`
  width: 578px;
  margin: 100px auto;
  padding: 10px auto;
  box-sizing: border-box;
  @media ${(props) => props.theme.tablet} {
    width: 430px;
    margin: 80px auto;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 20px auto;
  }
`;

const Title = styled.div`
  color: #000000;
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  box-shadow: 0 0 2px 0 rgba(216, 216, 216, 0.86);
  background-color: #f2f5fa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-sizing: border-box;
  font-size: 1.3vw;
  font-weight: 500;
  @media ${(props) => props.theme.tablet} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
  }
`;

const CertificateForm = styled.div`
  width: 100%;
  color: black;
  border: solid 1px lightgray;
  box-sizing: border-box;
`;

const CertificateTable = styled.table`
  margin: 20px auto;
  padding-bottom: 49px;
  box-sizing: border-box;
  & tr {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
  }
  & td {
    position: relative;
    padding-right: 10px;
    padding-bottom: 16px;
    @media ${(props) => props.theme.tablet} {
      font-size: 14px;
    }
    @media ${(props) => props.theme.mobile} {
      font-size: 12px;
      padding-right: 0px;
    }
  }
  & td:nth-child(1) {
    box-sizing: border-box;
    padding: 15px 30px 0px 18px;
    @media ${(props) => props.theme.mobile} {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 15px 12px 10px 5px;
    }
  }
`;

const Input = styled.input`
  width: 85%;
  border: none;
  border-bottom: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin: 0 auto;
  padding: 5px;
  color: #ffffff;
  border: none;
  border-radius: 13.5px;
  background-color: #999cda;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
  @media (max-width: 420px) {
    font-size: 10px;
    padding: 5px;
  }
`;

const CheckBoxTable = styled.table`
  margin: 50px auto 20px auto;
  padding-bottom: 50px;
  box-sizing: border-box;
  & tr {
    text-align: left;
    font-size: 14px;
    font-weight: 400;
  }
  & td {
    position: relative;
    padding-bottom: 16px;
    @media ${(props) => props.theme.tablet} {
      font-size: 14px;
    }
    @media ${(props) => props.theme.mobile} {
      font-size: 12px;
    }
    tr:nth-child(1) {
      &td:nth-child(1) {
        @media (max-width: 420px) {
          font-size: 12px;
          padding: 0px 0px 15px 5px;
        }
      }
    }
    td:nth-child(1) {
      text-align: right;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 0px 0px 15px 5px;
    }
  }
`;

const CheckContents = styled.div`
  padding-left: 15px;
  font-size: 10px;
  color: #7a7786;
  vertical-align: middle;
  cursor: pointer;
  @media (max-width: 420px) {
    font-size:8px;
    padding-left:5px;
    }
`;

const NextBtn = styled.div`
  width: 100px;
  margin: 20px auto;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #ffffff;
  letter-spacing: 0.5px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default Certification;
