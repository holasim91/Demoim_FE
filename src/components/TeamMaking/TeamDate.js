import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const TeamDate = (props) => {

  const { startDate, endDate, setStartDate, setEndDate } = props;

  //const [startDate, setStartDate] = React.useState(new Date());
  //const [endDate, setEndDate] = React.useState(new Date());

  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick }, ref) => (
      <DateBtn onClick={onClick} ref={ref}>
        {value}
      </DateBtn>
    ),
  );

  return (
    <DateBox>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={startDate} //내일부터...startDate 초기값 내일. maxDate는 여부받기.
        customInput={<ExampleCustomInput />}
        closeOnScroll={true}
        popperPlacement="auto"
      />
      <Sign>-</Sign>
      <DatePicker
        locale={ko}
        selected={endDate}
        onChange={setEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate} //프로젝트 시작일과 겹치면 안됨 하루 더하기.
        customInput={<ExampleCustomInput />}
        closeOnScroll={true}
        popperPlacement="auto"
      />
    </DateBox>
  )
}

export default TeamDate;

const DateBtn = styled.button`
  padding:3px 6px;
  outline: none;
  border:none;
  background-color: transparent;
  font-size:0.9em;
`;

const DateBox = styled.div`
  display: flex;
  width:165px;
  padding:2px 5px;
  position: relative;
  left:-7px;
`;

const Sign = styled.p`
  position: relative;
  top:2px;
`;