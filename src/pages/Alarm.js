import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../elements";
import { AlarmCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as alarmAction } from "../redux/modules/alarm";

const Alarm = (props) => {
  const dispatch = useDispatch();
  const alarmList = useSelector((state) => state.alarm.alarmList);


  const onDeleteAlarmAll = () =>{
    if (alarmList.length === 0){
      alert("삭제 할 알람이 없습니다!");
    }else{
      dispatch(alarmAction.deleteAlarmAllAPI(props.id));
    }
    
  } 

  useEffect(() => {
    dispatch(alarmAction.setAlarmAPI());
    dispatch(alarmAction.setAlarmCntAPI());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <TitleBox>
          알림 내역
      </TitleBox>
        <AllDeleteBox>
          <AllDeleteBtn onClick={onDeleteAlarmAll}>전체 삭제</AllDeleteBtn>
        </AllDeleteBox>
        <AlarmBox>
          {alarmList.length !== 0 ? (alarmList.map((a) => {
            return (
              <AlarmCard data={a} {...a} key={a.id} />
            )
          })) : (<NoneAlarm>알림 내역이 없습니다.</NoneAlarm>)}
        </AlarmBox>
      </Wrapper>
    </Container>
  )
}

export default Alarm;

const Wrapper = styled.div`
  width:100%;
  padding:0px 200px;
  box-sizing: border-box;

  @media ${props => props.theme.tablet}{
  padding:0px 100px;
  }

    @media ${props => props.theme.mobile}{
  padding:0px;
  }
`;

const TitleBox = styled.div`
  margin-top:100px;
  font-size:22px;
  text-align: center;
  
`;

const AllDeleteBox = styled.div`
  text-align: right;
  margin-top:70px;

  @media ${props => props.theme.mobile}{
    margin-top:40px;
  }
`;

const AllDeleteBtn = styled.button`
  padding:6px 9px;
  font-weight: 600;
  background-color: #f1f1f1;
  border:none;
  border-radius: 14px;
  cursor: pointer;
  outline: none;
`;

const AlarmBox = styled.div`
  margin:30px 0px 150px 0px;
  display: flex;
  flex-direction: column;
  gap:15px;
`;

const NoneAlarm = styled.p`
  font-size:18px;
  text-align: center;
  margin-top: 60px;
  color:#7a7786;
`;
