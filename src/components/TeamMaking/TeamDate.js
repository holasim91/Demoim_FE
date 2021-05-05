import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const TeamDate = (props) => {
  const { startDate, endDate, setStartDate, setEndDate, recruit, recruitMaxDate } = props;

  //모집일 최소날짜 
  let _periodinDate = new Date(startDate.valueOf());
  let periodMinDate = new Date(_periodinDate.setDate(_periodinDate.getDate() + 1))

  //프로젝트 마감일 최소날짜
  //let _projectMinDate = new Date(startDate.valueOf());
  //console.log('복사 date:' + new Date(date.setDate(date.getDate() + 1)))
  // console.log('지원 끝날 minDate: ' + new Date(startDate.setDate(_startDate.getDate() + 1)))

  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick }, ref) => (
      <DateBtn onClick={onClick} ref={ref}>
        {value}
      </DateBtn>
    ),
  );

  if (recruit) {
    return (
      <DateBox>
        <DatePicker
          locale={ko}
          selected={startDate}
          selectsStart
          startDate={startDate}
          minDate={startDate}
          maxDate={startDate}
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
          minDate={periodMinDate}
          maxDate={recruitMaxDate}
          customInput={<ExampleCustomInput />}
          closeOnScroll={true}
          popperPlacement="auto"
        />
      </DateBox>
    )
  }

  return (
    <DateBox>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        maxDate={endDate}
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
        minDate={periodMinDate}
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