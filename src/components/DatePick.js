import React from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
const DatePick = (props) => {
  const [startDate, setStartDate] = React.useState(new Date());
  console.log(startDate.getTime());

  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick }, ref) => (
      <PickBtn className="예시입니다!" onClick={onClick} ref={ref}>
        {value}
      </PickBtn>
    ),
  );
  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      popperPlacement="auto"
      minDate={new Date()}
      closeOnScroll={true}

    />
  );
};

export default DatePick;

const PickBtn = styled.button`
  border-radius: 10px;
  padding:3px 10px;
  background-color: ${props => props.theme.button_purple};
  border:1px solid ${props => props.theme.button_purple};
`