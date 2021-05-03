import React from "react";
import styled from "styled-components";

const Checkbox = (props) => {

  const { _onClick, checked, label } = props;

  return (
    <Wrapper>
      <input type="checkbox" id="check" />
      <label htmlFor="check" >{label}</label>
    </Wrapper>
  )
}

export default Checkbox;

const Wrapper = styled.div`
  & input[type=checkbox] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}

& input[type=checkbox] {
  display: none;
}

& input[type=checkbox] + label:before {
  content: "";
  border: 0.1em solid lightgray;
  border-radius: 0.2em;
  display: inline-block;
  width: 12px;
  height: 10px;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: .2s;
}

& input[type=checkbox] + label:active:before {
  transform: scale(0);
}

& input[type=checkbox]:checked + label:before {
  background-color: ${props => props.theme.main_color};
  border-color: ${props => props.theme.main_color};
  color: #fff;
}

& input[type=checkbox]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

& input[type=checkbox]:checked:disabled + label:before {
  transform: scale(1);
  background-color: #bfb;
  border-color: #bfb;
}
`;