import React from "react";
import styled, { keyframes } from 'styled-components';
import { FaTimes } from "react-icons/fa";
const MobileBar = (props) => {

  const { open, close, children } = props;
  return (
    <>
      { open ? (
        <Wapper>
          <BurgerBox>
            <CloseBox>
              <CloseIcon onClick={close} />
            </CloseBox>
            {children}
          </BurgerBox>
        </Wapper >) : null}
    </>
  )
}
export default MobileBar;


const OpenBar = keyframes`
  0%{
     opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;


const Wapper = styled.div`
  display: none;
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  background-color: rgb(0,0,0,0.6);

  @media ${props => props.theme.mobile}{
  display: block;
  animation: ${OpenBar} 0.2s;
}
`;

const BurgerBox = styled.div`
  width:60vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
  background-color: #ffffff;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.08);
  
`;

const CloseBox = styled.div`
  width: 100%;
  box-sizing:border-box;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  font-size: 1.4em;
`;