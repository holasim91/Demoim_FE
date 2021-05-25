import React from 'react'
import styled from 'styled-components'

const Text = (props) => {

  const { bold, color, size, children, margin, _onClick, padding } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    padding: padding,
  }

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  )
}

Text.defalutProps = {
  children: null,
  bold: false,
  color: '#000000',
  size: '14px',
  margin: false,
  _onClick: () => { },
}

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};  
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  padding: ${(props) => props.padding};
`;

export default Text
