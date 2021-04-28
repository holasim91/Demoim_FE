import React from "react";
import styled from "styled-components";
import { Container } from "../elements";
const Main = (props) => {
   return (
      <>
         <BannerBox>
            <Container>

            </Container>
         </BannerBox>
      </>
   )
}

export default Main

const BannerBox = styled.div`
   width:100%;
   height: 415px;
   background: -webkit-linear-gradient( #F2F5FA, #ffffff);
   background: -moz-linear-gradient(#F2F5FA, #ffffff);
   background: -o-linear-gradient(#F2F5FA, #ffffff);
   background: linear-gradient(#F2F5FA, #ffffff);
`;