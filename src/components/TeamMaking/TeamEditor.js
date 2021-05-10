import styled from 'styled-components';
import Arrow from "../../images/arrow.jpg";

//팀메이킹 글작성 페이지에 사용된 컴포넌트 모음입니다!
export const Wrapper = styled.div`
  margin:50px 0px 50px 0px;
  padding:0px 20px;
  box-sizing: border-box;
`;

export const TitleBox = styled.div`
  width:100%;
  text-align: center;
  font-size:1.37em;
  margin-bottom: 15px;
`;

export const ChoiceBox = styled.div`
  width:340px;
  padding:20px;
  box-sizing: border-box;
  margin:0px auto 25px auto;

  @media ${props => props.theme.mobile}{
    margin:0px auto 30px auto;
  }

  @media (max-width:380px){
    padding:0px;
    width:auto;
    margin:0px auto 15px auto;
  }
`;

export const ConentesBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  width:100%;
`;

export const BtnBox = styled.div`
  width:100%;
  text-align: center;
  margin:40px 0px 70px 0px;
  @media ${props => props.theme.mobile}{
    margin:40px 0px 30px 0px;
  }
`;

export const WriteBtn = styled.button`
  background-color: #ffffff;
  border: 2px solid #979797;
  border-radius: 11px;
  font-weight: 600;
  padding:5px 12px;
  color:#595858;
  font-size:1em;
  cursor: pointer;
  outline: none;

  @media ${props => props.theme.mobile}{
    font-size:0.9em;
  }

  @media (max-width:380px){
    font-size:0.7em;
  }
`;

export const UploadBox = styled.div`
  @media (max-width:615px){
    width:100%;
    margin-top:30px;
  }
`;

export const ChoiceTable = styled.table`
  width:100%;
  height: 100%;
  & tr,td{
    vertical-align: middle;
  }
  & td:nth-child(1){
    width:40%;
  }
  & tr:nth-child(1){
    height: 50px;
  }

  & tr:nth-child(5){
    height: 50px;
  }
  

@media ${props => props.theme.mobile}{
   & td:nth-child(1){
    width:35%;
    }
    font-size:0.9em;
  }

  @media (max-width:380px){
    &td:nth-child(1){
      width:50%;
    }
    & tr:nth-child(1){
      height: auto;
    }
    font-size:0.8em;
  }
`;

export const SelectBox = styled.select`
  padding:7px 6px;
  outline: none;
  border:none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width:170px;
  background: url(${Arrow}) no-repeat 98% 50%;
  background-size:22px;
  background-color: ${props => props.theme.main_gray};
  
  font-size:12px;
  select::-ms-expand {
    display: none;
  }

    @media (max-width:380px){
      font-size:11px;
  }
`;

export const LanguageInput = styled.input`
  padding:4px 5px;
  box-sizing: border-box;
  outline: none;
  width:170px;
  border:1px solid lightgray;
  border-radius: 3px;

  &::placeholder{
    color:#C0C0C0;
  }
`;

export const PositionBox = styled.div`
  display: flex;

`;

export const NumberInput = styled.input`
  outline: none;
  height: 15px;
  position: relative;
  top:7px;
  width:45px;
  border:1px solid lightgray;
  padding:2px 5px;
  border-radius: 4px;
`;

export const PositionSelect = styled.div`
  width:100px;
`;

export const Info = styled.p`
  font-size:0.8em;
  position: relative;
  top:4px;
  left:2px;
  color:#BDBDBD;
`;

export const Line = styled.div`
  width:380px;
  height: 1px;
  background-color: #d8d8d8;
  margin:20px auto 0px auto;

  @media ${props => props.theme.mobile}{
    width:80%;
  }
  @media (max-width:380px){
    width:100%;
    }
  `;


export const RecruitDate = styled.p`
  font-size:0.9em;
  position: relative;
  left:4px;
`;

export const RecruitInfo = styled.p`
  font-size:0.7em;
  position: relative;
  top:3px;
  left:5px;
  color:#9F9F9F;
`;