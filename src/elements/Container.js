import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {



 return (
  <ContainerBox>
   {children}
  </ContainerBox>
 )
}

export default Container




const ContainerBox = styled.div`
  width : 1200px;
  margin: 0px auto;
  background-color: blue;
  padding:0px 20px;

 @media ${props => props.theme.tablet}{
  width: 100%;
  background-color: orange;
 }

@media ${props => props.theme.mobile}{
 background-color: skyblue;
}
`